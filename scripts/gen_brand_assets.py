"""
Generates the portfolio's static brand assets from the existing visual identity:
  - public/og-image.png        1200x630  social share card
  - public/apple-touch-icon.png 180x180  iOS home-screen icon (GM monogram)
  - public/favicon.png          32x32     raster favicon fallback

Palette (matches tailwind.config.js): ink #0A0A0A, accent red #EF4444 / #DC2626,
white #FFFFFF, slate #CBD5E1 / #64748B. Run: python scripts/gen_brand_assets.py
This is a build-time helper, not shipped to the browser.
"""
from PIL import Image, ImageDraw, ImageFilter, ImageFont

INK = (10, 10, 10)
BORDER = (42, 42, 42)
ACCENT = (239, 68, 68)
ACCENT_STRONG = (220, 38, 38)
WHITE = (255, 255, 255)
SLATE_LIGHT = (203, 213, 225)
SLATE_MUTED = (100, 116, 139)


def load_font(candidates, size):
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


BOLD = ["C:/Windows/Fonts/segoeuib.ttf", "C:/Windows/Fonts/arialbd.ttf"]
SEMI = ["C:/Windows/Fonts/seguisb.ttf", "C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf"]
REG = ["C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf"]
MONO = ["C:/Windows/Fonts/consola.ttf", "C:/Windows/Fonts/cour.ttf"]


def tracked_text(draw, xy, text, font, fill, tracking=0):
    """Draw text with extra per-character spacing; returns total width."""
    x, y = xy
    start = x
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking
    return x - tracking - start


def tracked_width(draw, text, font, tracking=0):
    return sum(draw.textlength(ch, font=font) + tracking for ch in text) - tracking


def build_glow(size):
    W, H = size
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    g = ImageDraw.Draw(glow)
    g.ellipse([W - 560, -280, W + 280, 380], fill=(239, 68, 68, 95))
    g.ellipse([-340, H - 320, 340, H + 340], fill=(220, 38, 38, 55))
    return glow.filter(ImageFilter.GaussianBlur(170))


def gen_og():
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), INK).convert("RGBA")
    img = Image.alpha_composite(img, build_glow((W, H))).convert("RGB")
    d = ImageDraw.Draw(img)

    # frame + top accent rule
    d.rectangle([0, 0, W - 1, H - 1], outline=BORDER, width=2)
    d.rectangle([0, 0, W, 6], fill=ACCENT)

    pad = 96
    f_word = load_font(BOLD, 76)
    f_sub = load_font(BOLD, 42)
    f_tag = load_font(REG, 34)
    f_mono = load_font(MONO, 22)
    f_eyebrow = load_font(SEMI, 22)

    # eyebrow
    ey_y = 128
    d.rectangle([pad, ey_y + 4, pad + 14, ey_y + 18], fill=ACCENT)
    tracked_text(d, (pad + 26, ey_y), "PORTFOLIO", f_eyebrow, SLATE_MUTED, tracking=3)

    # wordmark
    word_y = 176
    w = tracked_text(d, (pad, word_y), "GANESH MISHRA", f_word, WHITE, tracking=4)
    # red underline
    d.rectangle([pad, word_y + 96, pad + min(int(w * 0.42), 260), word_y + 102], fill=ACCENT)

    # subtitle
    d.text((pad, 300), "Full-Stack Engineer", font=f_sub, fill=ACCENT)

    # tagline (single line fits at this size within content width)
    d.text((pad, 372), "Building web products that are ready for real users.", font=f_tag, fill=SLATE_LIGHT)

    # tech line
    d.text((pad, 502), "React  \u00b7  Next.js  \u00b7  Node.js / NestJS  \u00b7  PostgreSQL  \u00b7  AWS / Azure",
           font=f_mono, fill=SLATE_MUTED)

    img.save("public/og-image.png", "PNG", optimize=True)
    print("wrote public/og-image.png", img.size)


def gen_icon(size, out, corner_ratio=0.22):
    scale = 4
    S = size * scale
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    r = int(S * corner_ratio)
    # dark tile with subtle border
    d.rounded_rectangle([0, 0, S - 1, S - 1], radius=r, fill=INK, outline=BORDER, width=max(scale, 2))
    # accent corner tick (bottom-right) for brand color presence
    tick = int(S * 0.16)
    d.rounded_rectangle([S - tick - int(S * 0.12), S - tick - int(S * 0.12),
                         S - int(S * 0.12), S - int(S * 0.12)],
                        radius=int(tick * 0.3), fill=ACCENT)
    # GM monogram
    f = load_font(BOLD, int(S * 0.46))
    text = "GM"
    tw = d.textlength(text, font=f)
    bbox = d.textbbox((0, 0), text, font=f)
    th = bbox[3] - bbox[1]
    tx = (S - tw) / 2
    ty = (S - th) / 2 - bbox[1] - int(S * 0.02)
    d.text((tx, ty), text, font=f, fill=WHITE)
    img = img.resize((size, size), Image.LANCZOS)
    img.save(out, "PNG", optimize=True)
    print("wrote", out, img.size)


if __name__ == "__main__":
    gen_og()
    gen_icon(180, "public/apple-touch-icon.png", corner_ratio=0.24)
    gen_icon(32, "public/favicon.png", corner_ratio=0.26)

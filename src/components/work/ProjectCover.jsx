import { cn } from '../../lib/cn'

// One restrained red hue per project (tri-color system), resolved to a hex for
// inline SVG. Kept subtly distinct across the red family.
const HUE = {
  emerald: '#EF4444',
  cyan: '#F87171',
  indigo: '#EF4444',
  purple: '#DC2626',
  amber: '#F87171',
}

// Each glyph is line-art in the project's hue — a designed motif, never a
// fabricated screenshot. Drawn on a 400×250 (16/10) canvas.

function Delivery({ c }) {
  return (
    <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="88" y="70" width="224" height="112" rx="14" stroke={c} strokeOpacity="0.45" fill={c} fillOpacity="0.04" />
      <path d="M120 156 C 172 156 190 104 250 100" strokeDasharray="1 12" strokeOpacity="0.7" />
      <circle cx="120" cy="156" r="6" fill={c} stroke="none" />
      <path d="M244 104 L252 122 L260 104" fill={c} stroke="none" />
      <circle cx="252" cy="97" r="12" strokeOpacity="0.9" />
      <circle cx="252" cy="97" r="3.5" fill={c} stroke="none" />
      <rect x="178" y="132" width="30" height="26" rx="4" fill={c} fillOpacity="0.1" strokeOpacity="0.8" />
      <path d="M178 141 H208 M193 132 V158" strokeOpacity="0.8" strokeWidth="2" />
    </g>
  )
}

function Interview({ c }) {
  return (
    <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="108" y="62" width="140" height="124" rx="12" stroke={c} strokeOpacity="0.5" fill={c} fillOpacity="0.04" />
      <path d="M126 92 H214 M126 110 H214 M126 128 H198 M126 146 H182" stroke="#D4D4D4" strokeOpacity="0.4" strokeWidth="6" />
      <rect x="228" y="70" width="60" height="40" rx="11" fill={c} fillOpacity="0.07" strokeOpacity="0.7" />
      <path d="M238 128 l7 7 l14 -16" strokeWidth="3.2" />
      <circle cx="249" cy="132" r="22" strokeOpacity="0.85" />
    </g>
  )
}

function Business({ c }) {
  return (
    <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="94" y="60" width="212" height="130" rx="12" stroke={c} strokeOpacity="0.5" fill={c} fillOpacity="0.03" />
      <path d="M94 84 H306" strokeOpacity="0.4" strokeWidth="2" />
      <circle cx="110" cy="72" r="3" fill={c} fillOpacity="0.7" stroke="none" />
      <circle cx="122" cy="72" r="3" fill={c} fillOpacity="0.5" stroke="none" />
      <circle cx="134" cy="72" r="3" fill={c} fillOpacity="0.3" stroke="none" />
      <g fill={c} fillOpacity="0.16" strokeOpacity="0.55" strokeWidth="1.5">
        <rect x="124" y="146" width="20" height="26" rx="2" />
        <rect x="156" y="130" width="20" height="42" rx="2" />
        <rect x="188" y="112" width="20" height="60" rx="2" />
        <rect x="220" y="92" width="20" height="80" rx="2" />
      </g>
      <path d="M132 148 L166 132 L198 114 L232 96" strokeWidth="2.5" />
      <path d="M232 96 L220 94 M232 96 L230 108" strokeWidth="2.5" />
    </g>
  )
}

function Ai({ c }) {
  return (
    <g fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M100 92 a16 16 0 0 1 16-16 h96 a16 16 0 0 1 16 16 v40 a16 16 0 0 1 -16 16 h-70 l-22 18 v-18 h-4 a16 16 0 0 1 -16 -16 Z" stroke={c} strokeOpacity="0.55" fill={c} fillOpacity="0.05" />
      <circle cx="132" cy="112" r="5" fill={c} fillOpacity="0.75" stroke="none" />
      <circle cx="156" cy="112" r="5" fill={c} fillOpacity="0.75" stroke="none" />
      <circle cx="180" cy="112" r="5" fill={c} fillOpacity="0.75" stroke="none" />
      <path d="M258 74 L263 90 L279 95 L263 100 L258 116 L253 100 L237 95 L253 90 Z" fill={c} fillOpacity="0.9" stroke="none" />
      <rect x="214" y="132" width="80" height="46" rx="14" strokeOpacity="0.4" fill={c} fillOpacity="0.04" />
      <path d="M230 155 H278" stroke="#D4D4D4" strokeOpacity="0.4" strokeWidth="6" />
    </g>
  )
}

function Nature({ c }) {
  return (
    <g fill="none" stroke={c} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="272" cy="90" r="26" fill={c} fillOpacity="0.14" stroke={c} strokeOpacity="0.5" strokeWidth="2" />
      <path d="M60 192 Q 150 128 205 156 T 340 150 L340 205 L60 205 Z" fill={c} fillOpacity="0.09" stroke={c} strokeOpacity="0.35" strokeWidth="2" />
      <path d="M60 205 Q 140 168 220 182 T 340 176 L340 210 L60 210 Z" fill={c} fillOpacity="0.16" stroke="none" />
      <path d="M150 158 C 150 122 182 108 210 108 C 210 144 178 158 150 158 Z" fill={c} fillOpacity="0.12" stroke={c} strokeOpacity="0.5" strokeWidth="2" />
      <path d="M158 150 C 172 138 190 126 206 116" stroke={c} strokeOpacity="0.5" strokeWidth="2" fill="none" />
    </g>
  )
}

function Wellness({ c }) {
  return (
    <g fill="none" stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
      <circle cx="200" cy="124" r="52" stroke={c} strokeOpacity="0.35" fill={c} fillOpacity="0.03" />
      <path d="M200 150 C 200 116 174 100 148 100 C 148 134 174 150 200 150 Z" fill={c} fillOpacity="0.12" strokeOpacity="0.55" />
      <path d="M200 150 C 200 116 226 100 252 100 C 252 134 226 150 200 150 Z" fill={c} fillOpacity="0.12" strokeOpacity="0.55" />
      <path d="M200 150 V96" strokeOpacity="0.55" strokeWidth="2" />
    </g>
  )
}

const GLYPHS = { delivery: Delivery, interview: Interview, business: Business, ai: Ai, nature: Nature, wellness: Wellness }

export function ProjectCover({ theme = 'business', accent = 'emerald', className }) {
  const c = HUE[accent] || HUE.emerald
  const Glyph = GLYPHS[theme] || Business
  const gid = `pc-${theme}-${accent}`
  return (
    <svg
      viewBox="0 0 400 250"
      preserveAspectRatio="xMidYMid slice"
      className={cn('h-full w-full', className)}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${gid}-glow`} cx="50%" cy="28%" r="72%">
          <stop offset="0%" stopColor={c} stopOpacity="0.22" />
          <stop offset="100%" stopColor={c} stopOpacity="0" />
        </radialGradient>
        <pattern id={`${gid}-dots`} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="#A3A3A3" fillOpacity="0.1" />
        </pattern>
      </defs>
      <rect width="400" height="250" fill="#0A0A0A" />
      <rect width="400" height="250" fill={`url(#${gid}-dots)`} />
      <rect width="400" height="250" fill={`url(#${gid}-glow)`} />
      <Glyph c={c} />
    </svg>
  )
}

export default ProjectCover

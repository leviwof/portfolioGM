/**
 * Brand icons that lucide-react does not ship. Kept as standalone components
 * so any section can import them without duplicating the SVG paths.
 */

export function GithubIcon({ size = 20, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.36-3.9-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.3-5.27-1.29-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.98 10.98 0 0 1 12 6.12c.98 0 1.95.13 2.87.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.15v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  )
}

export function LinkedinIcon({ size = 20, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M5.37 3.5a2.18 2.18 0 1 1 0 4.36 2.18 2.18 0 0 1 0-4.36ZM3.49 9.5h3.76V21H3.49V9.5Zm5.93 0h3.6v1.57h.05c.5-.95 1.73-1.96 3.56-1.96 3.81 0 4.51 2.51 4.51 5.77V21h-3.75v-5.42c0-1.29-.03-2.96-1.81-2.96-1.8 0-2.08 1.41-2.08 2.87V21H9.42V9.5Z" />
    </svg>
  )
}

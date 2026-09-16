// Line icons drawn to match the design's light, two-tone look. Keeping them
// inline avoids an icon-font dependency for eight glyphs.
const PATHS = {
  bed:    'M3 17v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 17h18M3 17v2M21 17v2M6 10V8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2',
  thermo: 'M12 14.8V6a2 2 0 1 1 4 0v8.8a4 4 0 1 1-4 0ZM8 8H4M8 12H5M8 16H4',
  route:  'M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v4a4 4 0 0 1-4 4H6',
  valet:  'M12 4a3 3 0 0 0-3 3c0 1.2 1 2 3 3 2-1 3-1.8 3-3a3 3 0 0 0-3-3Zm0 6-7 5.5V19h14v-3.5L12 10Z',
  scale:  'M12 5v14M7 19h10M5 9h14M5 9 3 14h4L5 9Zm14 0-2 5h4l-2-5Z',
  tag:    'M4 12V6a2 2 0 0 1 2-2h6l8 8-8 8-8-8Zm4-5h.01',
  air:    'M4 9h9a3 3 0 1 0-3-3M4 13h13a3 3 0 1 1-3 3M4 17h6',
  dash:   'M4 6h7v6H4V6Zm9 0h7v3h-7V6Zm0 6h7v6h-7v-6ZM4 15h7v3H4v-3Z',
}

export default function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor"
         strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name] ?? PATHS.bed} />
    </svg>
  )
}

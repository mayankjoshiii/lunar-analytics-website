import { ImageResponse } from 'next/og'

// iOS home-screen / bookmark touch icon (PNG, transparent background).
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

const moon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64"><mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64"><circle cx="27" cy="33" r="18" fill="white"/><circle cx="38" cy="26" r="16" fill="black"/></mask><rect width="64" height="64" fill="#F5C842" mask="url(#m)"/></svg>`

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={180}
          height={180}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(moon)}`}
          alt=""
        />
      </div>
    ),
    { ...size }
  )
}

import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const width = searchParams.get("width") || "800"
  const height = searchParams.get("height") || "600"
  const text = searchParams.get("text") || "Placeholder Image"
  const bgColor = searchParams.get("bgColor") || "#f3f4f6"
  const textColor = searchParams.get("textColor") || "#374151"

  // Create SVG content
  const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
  </svg>`

  // Return the SVG with appropriate headers
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
"use client"

interface DebugPanelProps {
  data: any
  show?: boolean
}

export default function DebugPanel({ data, show = false }: DebugPanelProps) {
  // Double-check we're in development mode
  const isDevelopment = process.env.NODE_ENV === "development"

  // Only show if explicitly enabled AND we're in development mode
  if (!show || !isDevelopment) return null

  return (
    <div className="fixed bottom-0 right-0 bg-black/80 text-white p-4 max-w-md max-h-64 overflow-auto text-xs font-mono z-50">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
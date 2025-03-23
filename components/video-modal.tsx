"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"

interface VideoModalProps {
  src: string
  isOpen: boolean
  onClose: () => void
  title?: string
}

export default function VideoModal({ src, isOpen, onClose, title }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "" // Restore scrolling when modal is closed
    }
  }, [isOpen, onClose])

  // Auto-play video when modal opens
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Error auto-playing video:", err)
      })
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative w-full max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-0 right-0 z-10 p-2 bg-black/50 text-white rounded-full -mt-4 -mr-4"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>

        {title && (
          <div className="bg-black/60 text-white p-2 mb-2 rounded">
            <h3 className="text-lg font-medium">{title}</h3>
          </div>
        )}

        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
          <video ref={videoRef} src={src} className="w-full h-full" controls autoPlay />
        </div>
      </div>
    </div>
  )
}
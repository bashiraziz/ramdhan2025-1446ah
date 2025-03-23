"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import type { MediaItem } from "@/lib/media-utils"

interface MediaCarouselProps {
  media: MediaItem[]
  onMediaChange?: (index: number) => void
  selectedIndex: number // Make this required, not optional
}

export default function MediaCarousel({ media, onMediaChange, selectedIndex }: MediaCarouselProps) {
  // Use the provided selectedIndex from props instead of maintaining our own state
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Reset state when the selected media changes
  useEffect(() => {
    setIsLoading(true)
    setIsPlaying(false)

    // Pause any playing video when switching
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }, [selectedIndex])

  // Handle empty media array
  if (media.length === 0) {
    return (
      <div className="relative w-full h-[480px] bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No media available</p>
      </div>
    )
  }

  const goToPrevious = () => {
    const isFirstItem = selectedIndex === 0
    const newIndex = isFirstItem ? media.length - 1 : selectedIndex - 1
    if (onMediaChange) onMediaChange(newIndex)
  }

  const goToNext = () => {
    const isLastItem = selectedIndex === media.length - 1
    const newIndex = isLastItem ? 0 : selectedIndex + 1
    if (onMediaChange) onMediaChange(newIndex)
  }

  const goToSpecificItem = (index: number) => {
    if (onMediaChange) onMediaChange(index)
  }

  const currentItem = media[selectedIndex]
  const isVideo = currentItem.type === "video"

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative w-full h-[480px] group">
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {isVideo ? (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={currentItem.src}
              poster={currentItem.poster}
              className="w-full h-full object-contain"
              onLoadedData={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              controls
            />
            {!isPlaying && !isLoading && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                onClick={handleVideoPlay}
              >
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                  <Play className="h-8 w-8 text-green-600 ml-1" />
                </div>
              </div>
            )}
          </div>
        ) : (
          <Image
            src={currentItem.src || "/placeholder.svg"}
            alt={currentItem.label || `Media item ${selectedIndex + 1}`}
            fill
            className={`object-contain transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
            onLoadingComplete={() => setIsLoading(false)}
            priority={selectedIndex === 0}
          />
        )}

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Media Caption */}
      {currentItem.label && (
        <div className="absolute bottom-16 left-0 right-0 bg-black/60 text-white p-3 text-center">
          <p className="text-sm md:text-base">{currentItem.label}</p>
        </div>
      )}

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full cursor-pointer">
        <ChevronLeft className="h-6 w-6" onClick={goToPrevious} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full cursor-pointer">
        <ChevronRight className="h-6 w-6" onClick={goToNext} />
      </div>

      {/* Media Counter */}
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {selectedIndex + 1} / {media.length}
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSpecificItem(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === selectedIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
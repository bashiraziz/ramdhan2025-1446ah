"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: string[]
  onImageChange?: (index: number) => void
}

export default function ImageCarousel({ images, onImageChange }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Reset loading state when image changes
    setIsLoading(true)
  }, [currentIndex])

  // Handle empty images array
  if (images.length === 0) {
    return (
      <div className="relative w-full h-[480px] bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    )
  }

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    if (onImageChange) onImageChange(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    if (onImageChange) onImageChange(newIndex)
  }

  const goToSpecificImage = (index: number) => {
    setCurrentIndex(index)
    if (onImageChange) onImageChange(index)
  }

  return (
    <div className="relative w-full h-[480px] group">
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <Image
          src={
            images[currentIndex].startsWith("http") ? images[currentIndex] : images[currentIndex] || "/placeholder.svg"
          }
          alt={`Distribution image ${currentIndex + 1}`}
          fill
          className={`object-cover transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
          onLoadingComplete={() => setIsLoading(false)}
          priority={currentIndex === 0}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full cursor-pointer">
        <ChevronLeft className="h-6 w-6" onClick={goToPrevious} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full cursor-pointer">
        <ChevronRight className="h-6 w-6" onClick={goToNext} />
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSpecificImage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
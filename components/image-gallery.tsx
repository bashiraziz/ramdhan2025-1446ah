"use client"

import Image from "next/image"
import type { ImageData } from "@/lib/image-utils"

interface ImageGalleryProps {
  images: ImageData[]
  onImageClick: (index: number) => void
  selectedIndex: number
}

export default function ImageGallery({ images, onImageClick, selectedIndex }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative aspect-square cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
            selectedIndex === index ? "border-green-600 scale-[0.98]" : "border-transparent hover:border-green-300"
          }`}
          onClick={() => onImageClick(index)}
        >
          <Image
            src={image.path.startsWith("http") ? image.path : image.path || "/placeholder.svg"}
            alt={image.label || `Distribution image thumbnail ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-200"></div>

          {/* Image label overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-1 text-xs text-center truncate">
            {image.label || `Image ${index + 1}`}
          </div>
        </div>
      ))}
    </div>
  )
}
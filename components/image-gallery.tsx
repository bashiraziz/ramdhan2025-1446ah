"use client"

import Image from "next/image"

interface ImageGalleryProps {
  images: string[]
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
            src={image.startsWith("http") ? image : image || "/placeholder.svg"}
            alt={`Distribution image thumbnail ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
        </div>
      ))}
    </div>
  )
}
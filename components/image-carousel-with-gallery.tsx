"use client"

import { useState } from "react"
import ImageCarousel from "./image-carousel"
import ImageGallery from "./image-gallery"
import type { ImageData } from "@/lib/image-utils"

interface ImageCarouselWithGalleryProps {
  images: ImageData[]
}

export default function ImageCarouselWithGallery({ images }: ImageCarouselWithGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index)
  }

  const handleCarouselChange = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <div>
      <ImageCarousel images={images} onImageChange={handleCarouselChange} />

      <ImageGallery images={images} onImageClick={handleThumbnailClick} selectedIndex={selectedIndex} />
    </div>
  )
}
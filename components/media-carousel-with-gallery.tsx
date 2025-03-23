"use client"

import { useState } from "react"
import MediaCarousel from "./media-carousel"
import MediaGallery from "./media-gallery"
import type { MediaItem } from "@/lib/media-utils"

interface MediaCarouselWithGalleryProps {
  media: MediaItem[]
}

export default function MediaCarouselWithGallery({ media }: MediaCarouselWithGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Handle thumbnail click - select the media item
  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index)
  }

  // Handle carousel change - keep the selection in sync
  const handleCarouselChange = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <div>
      <MediaCarousel media={media} onMediaChange={handleCarouselChange} selectedIndex={selectedIndex} />
      <MediaGallery media={media} onMediaClick={handleThumbnailClick} selectedIndex={selectedIndex} />
    </div>
  )
}
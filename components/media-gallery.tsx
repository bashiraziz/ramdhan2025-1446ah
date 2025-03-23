"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import type { MediaItem } from "@/lib/media-utils"
import VideoModal from "@/components/video-modal" // Use absolute import path

interface MediaGalleryProps {
  media: MediaItem[]
  onMediaClick: (index: number) => void
  selectedIndex: number
}

export default function MediaGallery({ media, onMediaClick, selectedIndex }: MediaGalleryProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null)

  const handleItemClick = (item: MediaItem, index: number) => {
    if (item.type === "video") {
      // For videos, open the modal
      setSelectedVideo(item)
      setVideoModalOpen(true)
    } else {
      // For images, just select in the carousel
      onMediaClick(index)
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
        {media.map((item, index) => (
          <div
            key={index}
            className={`relative aspect-square cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
              selectedIndex === index ? "border-green-600 scale-[0.98]" : "border-transparent hover:border-green-300"
            }`}
            onClick={() => handleItemClick(item, index)}
          >
            <Image
              src={item.type === "video" && item.poster ? item.poster : item.src}
              alt={item.label || `Media thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />

            {/* Play button overlay for videos */}
            {item.type === "video" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center mb-1">
                  <Play className="h-6 w-6 text-green-600 ml-0.5" />
                </div>
                <span className="text-xs bg-black/60 text-white px-2 py-0.5 rounded">Video</span>
              </div>
            )}

            {/* Media label overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-1 text-xs text-center truncate">
              {item.label || (item.type === "video" ? `Video ${index + 1}` : `Image ${index + 1}`)}
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          src={selectedVideo.src}
          title={selectedVideo.label}
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
        />
      )}
    </>
  )
}
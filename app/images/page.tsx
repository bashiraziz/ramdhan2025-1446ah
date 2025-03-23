import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { getMediaFromDirectory } from "@/lib/media-utils"
import MediaCarouselWithGallery from "@/components/media-carousel-with-gallery"
import DebugPanel from "@/components/debug-panel"

export default function MediaGallery() {
  // Get all media (images and videos) from the images directory
  const media = getMediaFromDirectory("images")

  // Determine if we're in development mode
  const isDev = process.env.NODE_ENV === "development"

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/" className="text-green-600 hover:underline inline-flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
      </div>

      <div className="bg-green-50 py-12 mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Media Gallery</h1>
        <p className="text-gray-700">
          Images and videos from our Ramadan food distribution efforts across Uganda, serving over 800 households.
        </p>
      </div>

      {media.length > 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <MediaCarouselWithGallery media={media} />

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Showing {media.length} media items from our distribution efforts.</p>
          </div>

          {/* Debug panel - only shown in development */}
          {isDev && (
            <DebugPanel data={{ mediaCount: media.length, mediaTypes: media.map((m) => m.type) }} show={true} />
          )}
        </div>
      ) : (
        <div className="bg-gray-100 rounded-lg p-12 text-center">
          <p className="text-gray-500">
            No media available. Place image and video files in the /public/images folder to display them here.
          </p>
        </div>
      )}
    </div>
  )
}
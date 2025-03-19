import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { getImagesFromDirectory } from "@/lib/image-utils"
import ImageCarouselWithGallery from "@/components/image-carousel-with-gallery"

export default function Images() {
  // Get all images from the images directory
  const images = getImagesFromDirectory("images")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/" className="text-green-600 hover:underline inline-flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
      </div>

      <div className="bg-green-50 py-12 mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Distribution Gallery</h1>
        <p className="text-gray-700">
          Images from our Ramadan food distribution efforts across Uganda, serving over 800 households.
        </p>
      </div>

      {images.length > 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <ImageCarouselWithGallery images={images} />

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Showing {images.length} images from our distribution efforts.</p>
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 rounded-lg p-12 text-center">
          <p className="text-gray-500">
            No images available. Place image files in the /public/images folder to display them here.
          </p>
        </div>
      )}
    </div>
  )
}
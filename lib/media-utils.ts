import fs from "fs"
import path from "path"
import { getImageLabels } from "./image-utils"
import { createDefaultVideoThumbnail } from "./video-thumbnail"

export interface MediaItem {
  src: string
  type: "image" | "video"
  label?: string
  poster?: string
}

// Format a filename into a readable label
function formatFilenameToLabel(filename: string): string {
  // Remove file extension
  const nameWithoutExt = path.basename(filename, path.extname(filename))

  // Replace underscores and hyphens with spaces
  let label = nameWithoutExt.replace(/[_-]/g, " ")

  // Capitalize first letter of each word
  label = label.replace(/\b\w/g, (c) => c.toUpperCase())

  return label
}

// Get all media files (images and videos) from a directory
export function getMediaFromDirectory(directoryPath: string): MediaItem[] {
  try {
    const fullPath = path.join(process.cwd(), "public", directoryPath)
    console.log(`Looking for media in: ${fullPath}`)

    // Check if directory exists
    if (!fs.existsSync(fullPath)) {
      console.warn(`Directory not found: ${fullPath}`)
      return []
    }

    // Get all files in the directory
    const files = fs.readdirSync(fullPath)

    // Define file extensions
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]
    const videoExtensions = [".mp4", ".webm", ".ogg"]

    // Get image labels
    const imageLabels = getImageLabels()

    // Process each file
    const mediaItems: MediaItem[] = []

    files.forEach((file) => {
      const ext = path.extname(file).toLowerCase()
      const filePath = `/${directoryPath}/${file}`
      const fileName = path.basename(file)
      // Use metadata if available, otherwise format the filename as a label
      const label = imageLabels[fileName] || formatFilenameToLabel(fileName)

      if (imageExtensions.includes(ext)) {
        mediaItems.push({
          src: filePath,
          type: "image",
          label,
        })
      } else if (videoExtensions.includes(ext)) {
        // For videos, we'll try to find a poster image
        const fileNameWithoutExt = file.substring(0, file.lastIndexOf("."))
        const possiblePosters = [
          `/${directoryPath}/${fileNameWithoutExt}.jpg`,
          `/${directoryPath}/${fileNameWithoutExt}.jpeg`,
          `/${directoryPath}/${fileNameWithoutExt}.png`,
          `/${directoryPath}/${fileNameWithoutExt}-poster.jpg`,
          `/${directoryPath}/${fileNameWithoutExt}-poster.png`,
          `/${directoryPath}/${fileNameWithoutExt}-thumbnail.jpg`,
          `/${directoryPath}/${fileNameWithoutExt}-thumbnail.png`,
        ]

        // Check if any poster exists
        let poster = undefined
        for (const possiblePoster of possiblePosters) {
          const posterPath = path.join(process.cwd(), "public", possiblePoster.substring(1))
          if (fs.existsSync(posterPath)) {
            poster = possiblePoster
            break
          }
        }

        // If no poster found, use a default video thumbnail
        if (!poster) {
          const videoName = path.basename(fileNameWithoutExt)
          poster = createDefaultVideoThumbnail(videoName)
        }

        mediaItems.push({
          src: filePath,
          type: "video",
          label,
          poster,
        })
      }
    })

    return mediaItems
  } catch (error) {
    console.error("Error reading media directory:", error)
    return []
  }
}
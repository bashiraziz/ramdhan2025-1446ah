import fs from "fs"
import path from "path"

// Define an interface for image data
export interface ImageData {
  path: string
  label: string
}

// Get image labels from the metadata file
export function getImageLabels(): Record<string, string> {
  try {
    // Check if metadata file exists
    const metadataPath = path.join(process.cwd(), "data", "image-labels.json")
    let metadata: Record<string, string> = {}

    if (fs.existsSync(metadataPath)) {
      try {
        const metadataContent = fs.readFileSync(metadataPath, "utf8")
        metadata = JSON.parse(metadataContent)
      } catch (error) {
        console.error("Error reading image metadata:", error)
      }
    }

    return metadata
  } catch (error) {
    console.error("Error getting image labels:", error)
    return {}
  }
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

// Get all image files from a directory with labels
export function getImagesFromDirectory(directoryPath: string): ImageData[] {
  try {
    const fullPath = path.join(process.cwd(), "public", directoryPath)
    console.log(`Looking for images in: ${fullPath}`)

    // Check if directory exists
    if (!fs.existsSync(fullPath)) {
      console.warn(`Directory not found: ${fullPath}`)
      return []
    }

    // Get image labels
    const metadata = getImageLabels()

    // Get all files in the directory
    const files = fs.readdirSync(fullPath)

    // Filter for image files
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase()
      return imageExtensions.includes(ext)
    })

    // Return paths and labels
    return imageFiles.map((file) => {
      const imagePath = `/${directoryPath}/${file}`
      // Use metadata if available, otherwise format the filename as a label
      const label = metadata[file] || formatFilenameToLabel(file)
      return {
        path: imagePath,
        label: label,
      }
    })
  } catch (error) {
    console.error("Error reading image directory:", error)
    return []
  }
}
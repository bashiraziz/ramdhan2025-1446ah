import fs from "fs"
import path from "path"

// Get all image files from a directory
export function getImagesFromDirectory(directoryPath: string): string[] {
  try {
    const fullPath = path.join(process.cwd(), "public", directoryPath)
    console.log(`Looking for images in: ${fullPath}`)

    // Check if directory exists
    if (!fs.existsSync(fullPath)) {
      console.warn(`Directory not found: ${fullPath}`)
      return []
    }

    // Get all files in the directory
    const files = fs.readdirSync(fullPath)

    // Filter for image files
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase()
      return imageExtensions.includes(ext)
    })

    // Return paths relative to public directory
    return imageFiles.map((file) => `/${directoryPath}/${file}`)
  } catch (error) {
    console.error("Error reading image directory:", error)
    return []
  }
}
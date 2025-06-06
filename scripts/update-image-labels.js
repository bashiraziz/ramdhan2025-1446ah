const fs = require("fs")
const path = require("path")

// Path to the image directory and metadata file
const imageDir = path.join(process.cwd(), "public", "images")
const metadataPath = path.join(process.cwd(), "data", "image-labels.json")

// Ensure data directory exists
if (!fs.existsSync(path.join(process.cwd(), "data"))) {
  fs.mkdirSync(path.join(process.cwd(), "data"))
}

// Format a filename into a readable label
function formatFilenameToLabel(filename) {
  // Remove file extension
  const nameWithoutExt = path.basename(filename, path.extname(filename))

  // Replace underscores and hyphens with spaces
  let label = nameWithoutExt.replace(/[_-]/g, " ")

  // Capitalize first letter of each word
  label = label.replace(/\b\w/g, (c) => c.toUpperCase())

  return label
}

// Function to update image labels
async function updateImageLabels() {
  try {
    // Check if image directory exists
    if (!fs.existsSync(imageDir)) {
      console.error("Image directory not found:", imageDir)
      return
    }

    // Get all image files
    const files = fs.readdirSync(imageDir)
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase()
      return imageExtensions.includes(ext)
    })

    // Load existing metadata if it exists
    let metadata = {}
    if (fs.existsSync(metadataPath)) {
      const metadataContent = fs.readFileSync(metadataPath, "utf8")
      metadata = JSON.parse(metadataContent)
    }

    // Add entries for new images
    let updated = false
    for (const file of imageFiles) {
      if (!metadata[file]) {
        // Create a properly formatted label from the filename
        const formattedLabel = formatFilenameToLabel(file)

        metadata[file] = formattedLabel
        updated = true
        console.log(`Added label for ${file}: "${formattedLabel}"`)
      }
    }

    // Remove entries for images that no longer exist
    for (const file in metadata) {
      if (!imageFiles.includes(file)) {
        delete metadata[file]
        updated = true
        console.log(`Removed label for non-existent image: ${file}`)
      }
    }

    // Save the updated metadata
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2))

    if (updated) {
      console.log("Image labels updated successfully!")
    } else {
      console.log("No changes needed to image labels.")
    }

    console.log(`Total images: ${imageFiles.length}`)
  } catch (error) {
    console.error("Error updating image labels:", error)
  }
}

// Run the function
updateImageLabels()
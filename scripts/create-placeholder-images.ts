import fs from "fs"
import path from "path"

// Create directories if they don't exist
const createDirectories = () => {
  const directories = [
    path.join(process.cwd(), "public"),
    path.join(process.cwd(), "public", "images"),
    path.join(process.cwd(), "public", "receipts"),
    path.join(process.cwd(), "public", "locations"),
    path.join(process.cwd(), "public", "utils"),
  ]

  directories.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
      console.log(`Created directory: ${dir}`)
    } else {
      console.log(`Directory already exists: ${dir}`)
    }
  })
}

// Create a simple SVG placeholder
const createPlaceholderSVG = (
  text: string,
  width: number,
  height: number,
  bgColor = "#f3f4f6",
  textColor = "#374151",
) => {
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
  </svg>`
}

// Create placeholder images
const createPlaceholderImages = () => {
  const placeholders = [
    { name: "placeholder.svg", text: "Placeholder Image", width: 800, height: 600, bgColor: "#f3f4f6" },
    { name: "distribution-1.svg", text: "Food Distribution", width: 800, height: 600, bgColor: "#e0f2fe" },
    { name: "distribution-2.svg", text: "Community Gathering", width: 800, height: 600, bgColor: "#dcfce7" },
    { name: "distribution-3.svg", text: "Food Packages", width: 800, height: 600, bgColor: "#fef3c7" },
    { name: "distribution-4.svg", text: "Volunteers", width: 800, height: 600, bgColor: "#fce7f3" },
    { name: "distribution-5.svg", text: "Ramadan Celebration", width: 800, height: 600, bgColor: "#dbeafe" },
  ]

  placeholders.forEach(({ name, text, width, height, bgColor }) => {
    const filePath = path.join(process.cwd(), "public", "images", name)
    const svg = createPlaceholderSVG(text, width, height, bgColor)

    fs.writeFileSync(filePath, svg)
    console.log(`Created placeholder image: ${filePath}`)
  })
}

// Create a README file with instructions
const createReadme = () => {
  const readmePath = path.join(process.cwd(), "public", "README.md")
  const content = `# Public Directory Structure

This directory contains static files served by Next.js:

- \`/images\`: Store distribution images here
- \`/receipts\`: Store receipt images here
- \`/locations\`: Store location-related files here
- \`/utils\`: Store utility files here

Images placed in these directories will be automatically available in the application.
`

  fs.writeFileSync(readmePath, content)
  console.log(`Created README: ${readmePath}`)
}

// Run the setup
const setup = () => {
  try {
    createDirectories()
    createPlaceholderImages()
    createReadme()
    console.log("Setup completed successfully!")
  } catch (error) {
    console.error("Error during setup:", error)
  }
}

setup()


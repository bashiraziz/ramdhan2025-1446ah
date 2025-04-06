const fs = require("fs")
const path = require("path")

// Path to the receipts directory and data file
const receiptsDir = path.join(process.cwd(), "public", "receipts")
const dataFile = path.join(process.cwd(), "data", "receipts.json")

// Generate a unique ID
function generateId() {
  return Date.now().toString() + Math.random().toString(36).substring(2, 9)
}

// Read existing receipts data
let receiptsData = []
try {
  const data = fs.readFileSync(dataFile, "utf8")
  receiptsData = JSON.parse(data)
  console.log(`Loaded ${receiptsData.length} existing receipts`)
} catch (error) {
  console.error("Error reading receipts data:", error)
  // Create an empty array if file doesn't exist
  receiptsData = []
}

// Get all files in the receipts directory
const files = fs.readdirSync(receiptsDir)

// Filter for image files
const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"]
const imageFiles = files.filter((file) => {
  const ext = path.extname(file).toLowerCase()
  return imageExtensions.includes(ext)
})

console.log(`Found ${imageFiles.length} image files in receipts directory`)

// Check which images are not yet in the receipts data
const existingPaths = receiptsData.map((receipt) => {
  // Extract just the filename from the path
  if (!receipt.imagePath) return ""
  return path.basename(receipt.imagePath)
})

const newImages = imageFiles.filter((file) => !existingPaths.includes(file))
console.log(`Found ${newImages.length} new images to add`)

// Add new entries for each new image
newImages.forEach((file) => {
  // Extract receipt number from filename (if possible)
  let receiptNumber = file.split(".")[0]
  // Remove any 'receipt-' prefix
  receiptNumber = receiptNumber.replace("receipt-", "")

  const newReceipt = {
    id: generateId(),
    receiptNumber: receiptNumber,
    date: new Date().toISOString().split("T")[0], // Today's date
    vendor: "Please update vendor name",
    amount: 0, // Default amount, please update
    description: "Please update description",
    category: "Food Supplies", // Default category
    imagePath: `/receipts/${file}`,
    createdAt: new Date().toISOString(),
  }

  receiptsData.push(newReceipt)
  console.log(`Added new receipt: ${file}`)
})

// Save the updated data
if (newImages.length > 0) {
  fs.writeFileSync(dataFile, JSON.stringify(receiptsData, null, 2))
  console.log("Receipts data updated successfully!")
} else {
  console.log("No new receipts to add.")
}


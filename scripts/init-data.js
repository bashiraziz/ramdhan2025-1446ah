const fs = require("fs")
const path = require("path")

// Define paths
const dataDir = path.join(process.cwd(), "data")
const receiptsFile = path.join(dataDir, "receipts.json")

// Sample receipt data
const sampleReceipts = [
  {
    id: "1",
    receiptNumber: "475",
    date: "2025-02-25",
    vendor: "MTU Best Miller",
    amount: 3990000,
    description: "Posho 2100 kg",
    category: "Food Supplies",
    imagePath: "/receipts/receipt-placeholder.svg",
    createdAt: "2025-02-25T10:30:00Z",
  },
  {
    id: "2",
    receiptNumber: "571",
    date: "2025-03-05",
    vendor: "MTU Best Miller",
    amount: 6930000,
    description: "Rice 2100 kg",
    category: "Food Supplies",
    imagePath: "/receipts/receipt-placeholder.svg",
    createdAt: "2025-03-05T11:15:00Z",
  },
  {
    id: "3",
    receiptNumber: "LE-52423",
    date: "2025-02-26",
    vendor: "Sagar Trading",
    amount: 8745000,
    description: "Sugar 700 kg, Cooking Oil, Bags",
    category: "Food Supplies",
    imagePath: "/receipts/receipt-placeholder.svg",
    createdAt: "2025-02-26T14:20:00Z",
  },
]

// Create data directory if it doesn't exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
  console.log(`Created data directory: ${dataDir}`)
}

// Create receipts.json if it doesn't exist
if (!fs.existsSync(receiptsFile)) {
  fs.writeFileSync(receiptsFile, JSON.stringify(sampleReceipts, null, 2), "utf8")
  console.log(`Created receipts.json with sample data: ${receiptsFile}`)
} else {
  console.log(`receipts.json already exists: ${receiptsFile}`)
}

console.log("Data initialization complete!")
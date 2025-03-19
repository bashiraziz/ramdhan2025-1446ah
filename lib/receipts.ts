import fs from "fs/promises"
import path from "path"

// Define the receipts data file path
const RECEIPTS_DATA_FILE = path.join(process.cwd(), "data", "receipts.json")

// Define receipt type
export interface Receipt {
  id: string
  receiptNumber: string
  date: string
  vendor: string
  amount: number
  description: string
  category: string
  imagePath: string | null
  createdAt: string
}

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data")
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Get all receipts
export async function getReceipts(): Promise<Receipt[]> {
  await ensureDataDir()

  try {
    const data = await fs.readFile(RECEIPTS_DATA_FILE, "utf8")
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, return empty array
    return []
  }
}

// Get a single receipt by ID
export async function getReceiptById(id: string): Promise<Receipt | null> {
  const receipts = await getReceipts()
  return receipts.find((receipt) => receipt.id === id) || null
}

// Add a new receipt
export async function addReceipt(receiptData: Omit<Receipt, "id" | "createdAt">): Promise<Receipt> {
  await ensureDataDir()

  const receipts = await getReceipts()

  const newReceipt: Receipt = {
    id: Date.now().toString(),
    ...receiptData,
    createdAt: new Date().toISOString(),
  }

  receipts.push(newReceipt)

  await fs.writeFile(RECEIPTS_DATA_FILE, JSON.stringify(receipts, null, 2))
  return newReceipt
}

// Delete a receipt
export async function deleteReceipt(id: string): Promise<boolean> {
  const receipts = await getReceipts()
  const initialLength = receipts.length

  const filteredReceipts = receipts.filter((receipt) => receipt.id !== id)

  if (filteredReceipts.length === initialLength) {
    return false // Receipt not found
  }

  await fs.writeFile(RECEIPTS_DATA_FILE, JSON.stringify(filteredReceipts, null, 2))

  // If receipt has an image, delete it too
  const receipt = receipts.find((r) => r.id === id)
  if (receipt?.imagePath) {
    try {
      const imagePath = path.join(process.cwd(), "public", receipt.imagePath)
      await fs.unlink(imagePath)
    } catch (error) {
      console.error("Failed to delete receipt image:", error)
      // Continue even if image deletion fails
    }
  }

  return true
}


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

// Simple function to generate a unique ID without external dependencies
function generateId(): string {
  return Date.now().toString() + Math.random().toString(36).substring(2, 9)
}

// Get all receipts
export async function getReceipts(): Promise<Receipt[]> {
  try {
    await ensureDataDir()

    try {
      const data = await fs.readFile(RECEIPTS_DATA_FILE, "utf8")
      return JSON.parse(data)
    } catch (error) {
      console.error("Error reading receipts:", error)

      // Create an empty receipts file if it doesn't exist
      const initialData = [
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
      ]

      try {
        await fs.writeFile(RECEIPTS_DATA_FILE, JSON.stringify(initialData, null, 2), "utf8")
        return initialData
      } catch (writeError) {
        console.error("Error creating receipts file:", writeError)
        return []
      }
    }
  } catch (error) {
    console.error("Unexpected error in getReceipts:", error)
    return []
  }
}

// Get a single receipt by ID
export async function getReceiptById(id: string): Promise<Receipt | null> {
  try {
    const receipts = await getReceipts()
    return receipts.find((receipt) => receipt.id === id) || null
  } catch (error) {
    console.error("Error in getReceiptById:", error)
    return null
  }
}

// Add a new receipt
export async function addReceipt(receiptData: Omit<Receipt, "id" | "createdAt">): Promise<Receipt> {
  try {
    await ensureDataDir()

    const receipts = await getReceipts()
    const newReceipt: Receipt = {
      id: generateId(),
      createdAt: new Date().toISOString(),
      ...receiptData,
    }
    receipts.push(newReceipt)

    await fs.writeFile(RECEIPTS_DATA_FILE, JSON.stringify(receipts, null, 2), "utf8")
    return newReceipt
  } catch (error) {
    console.error("Error in addReceipt:", error)
    throw new Error("Failed to add receipt")
  }
}

// Delete a receipt by ID
export async function deleteReceipt(id: string): Promise<void> {
  try {
    await ensureDataDir()

    let receipts = await getReceipts()
    receipts = receipts.filter((receipt) => receipt.id !== id)

    await fs.writeFile(RECEIPTS_DATA_FILE, JSON.stringify(receipts, null, 2), "utf8")
  } catch (error) {
    console.error("Error in deleteReceipt:", error)
    throw new Error("Failed to delete receipt")
  }
}


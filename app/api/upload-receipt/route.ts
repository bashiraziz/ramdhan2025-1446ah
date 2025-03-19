import { NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import path from "path"

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
  }

  // Convert file to buffer
  const buffer = Buffer.from(await file.arrayBuffer())

  // Create receipts directory if it doesn't exist
  const receiptsDir = path.join(process.cwd(), "public", "receipts")
  await mkdir(receiptsDir, { recursive: true })

  // Generate unique filename
  const uniqueFilename = `receipt-${Date.now()}-${file.name.replace(/\s+/g, "-")}`
  const filePath = path.join(receiptsDir, uniqueFilename)

  // Write file to disk
  await writeFile(filePath, buffer)

  // Return the relative path to be stored in the database
  const relativePath = `/receipts/${uniqueFilename}`

  return NextResponse.json({
    success: true,
    path: relativePath,
  })
}


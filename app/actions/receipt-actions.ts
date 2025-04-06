"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { addReceipt, deleteReceipt } from "@/lib/receipts"
import { headers } from "next/headers"

// Helper function to get the base URL
async function getBaseUrl() {
  // Check for the x-forwarded-host header first (for Vercel deployments)
  const headersList = await headers()
  const host = headersList.get("host") || "localhost:3000"
  const protocol = host.includes("localhost") ? "http" : "https"
  return `${protocol}://${host}`
}

export async function uploadReceiptAction(formData: FormData) {
  try {
    // Get form data
    const receiptNumber = formData.get("receiptNumber") as string
    const date = formData.get("date") as string
    const vendor = formData.get("vendor") as string
    const amount = Number.parseFloat(formData.get("amount") as string)
    const description = (formData.get("description") as string) || ""
    const category = formData.get("category") as string
    const file = formData.get("file") as File

    // Upload image if provided
    let imagePath = null
    if (file && file.size > 0) {
      // Create a new FormData object with just the file
      const imageFormData = new FormData()
      imageFormData.append("file", file)

      // Get the base URL for the API endpoint
      const baseUrl = await getBaseUrl()
      const apiUrl = `${baseUrl}/api/upload-receipt`

      // Upload to local storage with absolute URL
      const uploadResponse = await fetch(apiUrl, {
        method: "POST",
        body: imageFormData,
      })

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload image")
      }

      const { path } = await uploadResponse.json()
      imagePath = path
    }

    // Store receipt data
    await addReceipt({
      receiptNumber,
      date,
      vendor,
      amount,
      description,
      category,
      imagePath,
    })

    // Revalidate the receipts page to show the new receipt
    revalidatePath("/accounting/receipts")

    // Redirect to the receipts page
    redirect("/accounting/receipts")
  } catch (error) {
    console.error("Error uploading receipt:", error)
    return { success: false, error: "Failed to upload receipt" }
  }
}

export async function deleteReceiptAction(id: string) {
  try {
    await deleteReceipt(id)
    revalidatePath("/accounting/receipts")
    return { success: true }
  } catch (error) {
    console.error("Error deleting receipt:", error)
    return { success: false, error: "Failed to delete receipt" }
  }
}
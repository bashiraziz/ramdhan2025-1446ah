import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { getReceiptById } from "@/lib/receipts"
import { notFound } from "next/navigation"
import ReceiptActions from "@/components/receipt-actions"

export default async function ReceiptDetails({ params }: { params: { id: string } }) {
  // Find the receipt with the matching ID
  const receipt = await getReceiptById(params.id)

  if (!receipt) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/accounting/receipts" className="text-green-600 hover:underline inline-flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Receipts
        </Link>
      </div>

      <div className="bg-green-50 py-8 mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Receipt Details</h1>
        <p className="text-gray-700">Receipt #{receipt.receiptNumber}</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Receipt #{receipt.receiptNumber}</h2>
              <p className="text-gray-600">Date: {new Date(receipt.date).toLocaleDateString()}</p>
            </div>
            <ReceiptActions receiptNumber={receipt.receiptNumber} imagePath={receipt.imagePath} />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Vendor</h3>
                <p className="text-lg font-medium">{receipt.vendor}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Total Amount</h3>
                <p className="text-lg font-medium text-green-700">UGX {receipt.amount.toLocaleString()}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
              <p className="text-base">{receipt.description || "No description provided"}</p>
            </div>

            {/* Receipt Image */}
            {receipt.imagePath ? (
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 text-center mb-6">
                <p className="text-gray-500 mb-2">Receipt Image</p>
                <div className="relative h-96 w-full">
                  <Image
                    src={receipt.imagePath || "/placeholder.svg"}
                    alt={`Receipt ${receipt.receiptNumber}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              </div>
            ) : (
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 text-center mb-6">
                <p className="text-gray-500">No receipt image available</p>
              </div>
            )}

            {/* Additional Details */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-medium text-gray-800 mb-4">Additional Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p>{receipt.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Paid
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Created At</p>
                  <p>{new Date(receipt.createdAt).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
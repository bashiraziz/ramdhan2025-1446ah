import Link from "next/link"
import { ChevronLeft, AlertTriangle } from "lucide-react"

export default function ReceiptNotFound() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/accounting/receipts" className="text-green-600 hover:underline inline-flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Receipts
        </Link>
      </div>

      <div className="max-w-md mx-auto mt-12 text-center">
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Receipt Not Found</h1>
        <p className="text-gray-600 mb-6">The receipt you are looking for does not exist or has been deleted.</p>
        <Link
          href="/accounting/receipts"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
        >
          View All Receipts
        </Link>
      </div>
    </div>
  )
}
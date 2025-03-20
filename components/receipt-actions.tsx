"use client"

import Link from "next/link"
import { Download, Printer } from "lucide-react"

interface ReceiptActionsProps {
  receiptNumber: string
  imagePath: string | null
}

export default function ReceiptActions({ receiptNumber, imagePath }: ReceiptActionsProps) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={handlePrint}
        className="flex items-center gap-1 px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100"
      >
        <Printer className="h-4 w-4" />
        Print
      </button>
      {imagePath && (
        <Link
          href={imagePath}
          download={`receipt-${receiptNumber}.jpg`}
          className="flex items-center gap-1 px-3 py-2 bg-green-50 text-green-700 rounded-md hover:bg-green-100"
        >
          <Download className="h-4 w-4" />
          Download
        </Link>
      )}
    </div>
  )
}
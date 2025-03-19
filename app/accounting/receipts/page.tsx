import Link from "next/link"
import Image from "next/image"
import { Search, Filter, Plus } from "lucide-react"
import { getReceipts } from "@/lib/receipts"

export default async function Receipts() {
  // Get all receipts
  const receipts = await getReceipts()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-green-50 py-12 mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Receipts</h1>
        <p className="text-gray-700">View and manage all receipts for Ramadan food distribution expenses.</p>
      </div>

      <div className="mb-8">
        <ul className="flex border-b">
          <li className="mr-1">
            <Link href="/accounting" className="inline-block py-2 px-4 text-gray-600 hover:text-green-600 font-medium">
              Overview
            </Link>
          </li>
          <li className="mr-1">
            <Link
              href="/accounting/receipts"
              className="bg-white inline-block py-2 px-4 text-green-600 font-medium border-l border-t border-r rounded-t"
            >
              Receipts
            </Link>
          </li>
          <li className="mr-1">
            <Link
              href="/accounting/upload"
              className="inline-block py-2 px-4 text-gray-600 hover:text-green-600 font-medium"
            >
              Upload Receipt
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-between mb-4">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search receipts..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filter
          </button>

          <Link
            href="/accounting/upload"
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <Plus className="h-4 w-4" />
            Add Receipt
          </Link>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-green-800 mb-4">All Receipts</h2>

        {receipts.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <p className="text-gray-500 mb-4">No receipts found</p>
            <Link
              href="/accounting/upload"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              <Plus className="h-4 w-4" />
              Upload Your First Receipt
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Receipt #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vendor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount (UGX)
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {receipts.map((receipt) => (
                    <tr key={receipt.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {receipt.receiptNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{receipt.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{receipt.vendor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{receipt.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                        {receipt.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        {receipt.imagePath ? (
                          <div className="relative h-10 w-10 mx-auto">
                            <Image
                              src={receipt.imagePath || "/placeholder.svg"}
                              alt={`Receipt ${receipt.receiptNumber}`}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        <Link
                          href={`/accounting/receipts/details/${receipt.id}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          View Receipt
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


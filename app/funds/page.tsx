import Link from "next/link"
import { ChevronLeft } from "lucide-react"

// Updated data for funds
const inflows = [
  { id: 1, donor: "Rashid 1", date: "February 10, 2025", amount: 500 },
  { id: 2, donor: "Rashid 2", date: "February 10, 2025", amount: 500 },
  { id: 3, donor: "Rashid 3", date: "February 10, 2025", amount: 250 },
  { id: 4, donor: "Rashid 4", date: "February 10, 2025", amount: 5000 },
  { id: 5, donor: "Donor 5", date: "February 10, 2025", amount: 1000 },
  { id: 6, donor: "Donor 6", date: "February 11, 2025", amount: 2000 },
  { id: 7, donor: "Donor 7", date: "February 11, 2025", amount: 501 },
  { id: 8, donor: "Donor 8", date: "February 12, 2025", amount: 3000 },
  { id: 9, donor: "Donor 9", date: "February 11, 2025", amount: 250 },
  { id: 10, donor: "Donor 10", date: "February 11, 2025", amount: 100 },
  { id: 11, donor: "Donor 11", date: "February 19, 2025", amount: 1000 },
  { id: 12, donor: "Donor 12", date: "February 22, 2025", amount: 2000 },
  { id: 13, donor: "Rashid 5", date: "February 28, 2025", amount: 500 },
]

// Updated disbursements with new entries
const disbursements = [
  // New disbursement added on March 21, 2025
  { id: 7, date: "3/21/2025", location: "Kampala", amountUGX: 1783930, amountUSD: 500 },
  // Existing disbursements
  { id: 1, date: "2/24/2025", location: "Lira", amountUGX: 25100000, amountUSD: 7025 },
  { id: 2, date: "2/24/2025", location: "Kampala", amountUGX: 1968170, amountUSD: 550 },
  { id: 3, date: "3/9/2025", location: "Kampala", amountUGX: 2500000, amountUSD: 700 },
  { id: 4, date: "3/10/2025", location: "Lira", amountUGX: 24100922, amountUSD: 6825 },
  { id: 5, date: "3/17/2025", location: "Rehmant ul Yateem", amountUGX: 1070331, amountUSD: 300 },
  { id: 6, date: "3/17/2025", location: "SISU Orphanage", amountUGX: 1070331, amountUSD: 300 },
]

export default function Funds() {
  // Calculate totals
  const totalInflowsUSD = inflows.reduce((sum, item) => sum + item.amount, 0)
  const totalOutflowsUGX = disbursements.reduce((sum, item) => sum + item.amountUGX, 0)
  const totalOutflowsUSD = disbursements.reduce((sum, item) => sum + item.amountUSD, 0)

  // Calculate remaining balance in USD only
  const remainingBalanceUSD = totalInflowsUSD - totalOutflowsUSD

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/" className="text-green-600 hover:underline inline-flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
      </div>

      <div className="bg-green-50 py-12 mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Funds Status</h1>
        <p className="text-gray-700">
          Overview of donations received and funds disbursed for our Ramadan food distribution initiative.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Total Inflows</h3>
          <p className="text-sm text-gray-600 mb-4">All donations received</p>
          <p className="text-2xl font-bold text-green-700">USD {totalInflowsUSD.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">From {inflows.length} donations</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Total Outflows</h3>
          <p className="text-sm text-gray-600 mb-4">All distribution costs</p>
          <p className="text-2xl font-bold text-red-600">USD {totalOutflowsUSD.toLocaleString()}</p>
          <p className="text-md text-red-600">UGX {totalOutflowsUGX.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">Across {disbursements.length} transactions</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Remaining Balance</h3>
          <p className="text-sm text-gray-600 mb-4">Available funds</p>
          <p className="text-2xl font-bold text-green-700">USD {remainingBalanceUSD.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">For ongoing distribution</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-green-800">Donors</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Donor
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount (USD)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {inflows.map((inflow) => (
                  <tr key={inflow.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inflow.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{inflow.donor}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {inflow.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-medium">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Total</td>
                  <td></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {totalInflowsUSD.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-green-800">Disbursements</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount (USD)
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount (UGX)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Sort disbursements by date (most recent first) */}
                {[...disbursements]
                  .sort((a, b) => {
                    // Convert dates to comparable format (most recent first)
                    const dateA = new Date(a.date).getTime()
                    const dateB = new Date(b.date).getTime()
                    return dateB - dateA
                  })
                  .map((disbursement) => (
                    <tr key={disbursement.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disbursement.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {disbursement.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        {disbursement.amountUSD.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        {disbursement.amountUGX.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                <tr className="bg-gray-50 font-medium">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Total</td>
                  <td></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {totalOutflowsUSD.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {totalOutflowsUGX.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter } from "lucide-react"
import FinancialCharts from "@/components/financial-charts"

// Detailed outflow data from the provided image
const outflowData = [
  // New disbursements added on March 18, 2025
  {
    id: 20,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "1803202501014",
    description: "Rice 100 kg",
    category: "Food Supplies",
    amount: 340000,
  },
  {
    id: 21,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "1803202501014",
    description: "Sugar 100 kg",
    category: "Food Supplies",
    amount: 352000,
  },
  {
    id: 22,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "1803202501014",
    description: "Posho 100 kg",
    category: "Food Supplies",
    amount: 200000,
  },
  {
    id: 23,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "1803202501014",
    description: "Green Bags",
    category: "Packing Supplies",
    amount: 18000,
  },
  {
    id: 24,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "1803202501014",
    description: "White Bags",
    category: "Packing Supplies",
    amount: 4000,
  },
  {
    id: 25,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "1803202501014",
    description: "Cooking Oil 3 boxes",
    category: "Food Supplies",
    amount: 258000,
  },
  {
    id: 26,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "15032025010115",
    description: "Rice 100 kg",
    category: "Food Supplies",
    amount: 340000,
  },
  {
    id: 27,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "15032025010115",
    description: "Sugar 100 kg",
    category: "Food Supplies",
    amount: 358000,
  },
  {
    id: 28,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "15032025010115",
    description: "Posho 100 kg",
    category: "Food Supplies",
    amount: 200000,
  },
  {
    id: 29,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "15032025010115",
    description: "Cooking Oil 5 boxes",
    category: "Food Supplies",
    amount: 430000,
  },
  // Original outflow data
  {
    id: 1,
    date: "02/25/2025",
    vendor: "MTU Best Miller",
    receipt: "475",
    description: "Posho 2100 kg",
    category: "Food Supplies",
    amount: 3990000,
  },
  {
    id: 2,
    date: "03/05/2025",
    vendor: "MTU Best Miller",
    receipt: "571",
    description: "Rice 2100 kg",
    category: "Food Supplies",
    amount: 6930000,
  },
  {
    id: 3,
    date: "02/26/2025",
    vendor: "Sagar Trading",
    receipt: "LE-52423",
    description: "Sugar 700 kg",
    category: "Food Supplies",
    amount: 3010000,
  },
  {
    id: 4,
    date: "02/26/2025",
    vendor: "Sagar Trading",
    receipt: "LE-52423",
    description: "Cooking Oil",
    category: "Food Supplies",
    amount: 5600000,
  },
  {
    id: 5,
    date: "02/26/2025",
    vendor: "Sagar Trading",
    receipt: "LE-52423",
    description: "Black bags",
    category: "Packing Supplies",
    amount: 50000,
  },
  {
    id: 6,
    date: "02/26/2025",
    vendor: "Sagar Trading",
    receipt: "LE-52423",
    description: "Green Bags",
    category: "Packing Supplies",
    amount: 85000,
  },
  {
    id: 7,
    date: "3/5/2025",
    vendor: "Jamiru Mutto",
    receipt: "27808",
    description: "Sugar 100 kg",
    category: "Food Supplies",
    amount: 360000,
  },
  {
    id: 8,
    date: "3/5/2025",
    vendor: "Jamiru Mutto",
    receipt: "27808",
    description: "Azam Floor 5 Carton",
    category: "Food Supplies",
    amount: 365000,
  },
  {
    id: 9,
    date: "3/5/2025",
    vendor: "Jamiru Mutto",
    receipt: "27808",
    description: "Cooking Oil 4 boxes",
    category: "Food Supplies",
    amount: 344000,
  },
  {
    id: 10,
    date: "3/5/2025",
    vendor: "Jamiru Mutto",
    receipt: "27808",
    description: "Rice 100 kg",
    category: "Food Supplies",
    amount: 360000,
  },
  {
    id: 11,
    date: "3/5/2025",
    vendor: "Jamiru Mutto",
    receipt: "27808",
    description: "Green Bags",
    category: "Packing Supplies",
    amount: 12000,
  },
  {
    id: 12,
    date: "3/5/2025",
    vendor: "Jamiru Mutto",
    receipt: "27808",
    description: "White Bags",
    category: "Packing Supplies",
    amount: 2500,
  },
  {
    id: 13,
    date: "3/6/2025",
    vendor: "Jamiru Mutto",
    receipt: "27812",
    description: "Sugar 50 kg",
    category: "Food Supplies",
    amount: 180000,
  },
  {
    id: 14,
    date: "3/6/2025",
    vendor: "Jamiru Mutto",
    receipt: "27812",
    description: "Rice 50 kg",
    category: "Food Supplies",
    amount: 180000,
  },
  {
    id: 15,
    date: "3/6/2025",
    vendor: "Jamiru Mutto",
    receipt: "27812",
    description: "Cooking Oil 4 boxes",
    category: "Food Supplies",
    amount: 86000,
  },
  {
    id: 16,
    date: "3/6/2025",
    vendor: "Jamiru Mutto",
    receipt: "27812",
    description: "Green Bags",
    category: "Packing Supplies",
    amount: 6000,
  },
  {
    id: 17,
    date: "3/6/2025",
    vendor: "Jamiru Mutto",
    receipt: "27812",
    description: "White Bags",
    category: "Packing Supplies",
    amount: 2500,
  },
  {
    id: 18,
    date: "3/6/2025",
    vendor: "Jamiru Mutto",
    receipt: "NA",
    description: "Transportation",
    category: "Transportation",
    amount: 100000,
  },
  {
    id: 19,
    date: "3/6/2025",
    vendor: "Jamiru Mutto",
    receipt: "NA",
    description: "Packaging Labor",
    category: "Labor",
    amount: 100000,
  },
]

// Detailed inflow data from the provided image
const inflowData = [
  { id: 1, date: "2/24/2025", location: "Lira", amount: 25100000, status: "Received" },
  { id: 2, date: "2/24/2025", location: "Kampala", amount: 1968170, status: "Received" },
  // New inflow entries
  { id: 4, date: "3/9/2025", location: "Kampala", amount: 2500000, status: "Received", usdAmount: 700 },
  { id: 3, date: "3/10/2025", location: "Lira", amount: 24100922, status: "Received" },
  { id: 5, date: "3/17/2025", location: "Rehmant ul Yateem", amount: 1070331, status: "Received", usdAmount: 300 },
  { id: 6, date: "3/17/2025", location: "SISU Orphanage", amount: 1070331, status: "Received", usdAmount: 300 },
]

export default function Accounting() {
  // Calculate totals
  const totalOutflows = outflowData.reduce((sum, item) => sum + item.amount, 0)
  const totalInflows = inflowData.reduce((sum, item) => sum + item.amount, 0)
  const remainingBalance = totalInflows - totalOutflows

  // State for active tab
  const [activeTab, setActiveTab] = useState("inflows") // Default to inflows tab

  // Summary cards component to reuse across tabs
  const SummaryCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-green-50 p-6 rounded-lg border border-green-100">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Total Inflows</h3>
        <p className="text-sm text-gray-600 mb-4">All disbursements received</p>
        <p className="text-2xl font-bold text-green-700">UGX {totalInflows.toLocaleString()}</p>
        <p className="text-xs text-gray-500 mt-1">From {inflowData.length} disbursements</p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-100">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Total Outflows</h3>
        <p className="text-sm text-gray-600 mb-4">All distribution costs</p>
        <p className="text-2xl font-bold text-red-600">UGX {totalOutflows.toLocaleString()}</p>
        <p className="text-xs text-gray-500 mt-1">Across {outflowData.length} transactions</p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-100">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Remaining Balance</h3>
        <p className="text-sm text-gray-600 mb-4">Available funds</p>
        <p className="text-2xl font-bold text-green-700">UGX {remainingBalance.toLocaleString()}</p>
        <p className="text-xs text-gray-500 mt-1">For ongoing distribution</p>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-green-50 py-12 mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Financial Accounting</h1>
        <p className="text-gray-700">Transparent financial records for our Ramadan food distribution initiative.</p>
      </div>

      <div className="mb-8">
        <ul className="flex border-b">
          <li className="mr-1">
            <Link
              href="/accounting"
              className="bg-white inline-block py-2 px-4 text-green-600 font-medium border-l border-t border-r rounded-t"
            >
              Overview
            </Link>
          </li>
          <li className="mr-1">
            <Link
              href="/accounting/receipts"
              className="inline-block py-2 px-4 text-gray-600 hover:text-green-600 font-medium"
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

      {/* Summary Cards - shown on all tabs */}
      <SummaryCards />

      {/* Financial Visualization - Always visible */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-8 overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-green-50">
          <h2 className="text-xl font-bold text-green-800">Financial Dashboard</h2>
          <p className="text-gray-600">Visual overview of all financial activities for Ramadan 1446 AH</p>
        </div>
        <div className="p-6">
          <FinancialCharts outflowData={outflowData} inflowData={inflowData} className="bg-white" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-green-800 mb-4">Financial Records</h2>
        <p className="text-gray-600 mb-4">Complete financial records for Ramadan 1446 AH food distribution.</p>

        <div className="flex justify-between mb-4">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search transactions..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>

        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            className={`px-4 py-2 text-sm font-medium ${activeTab === "inflows" ? "bg-green-50 text-green-700 border border-green-200" : "bg-white text-gray-700 border-t border-b border-l border-gray-200 hover:bg-gray-100"} rounded-l-lg`}
            onClick={() => setActiveTab("inflows")}
          >
            Inflows
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${activeTab === "outflows" ? "bg-green-50 text-green-700 border-t border-b border-r border-green-200" : "bg-white text-gray-700 border-t border-b border-gray-200 hover:bg-gray-100"}`}
            onClick={() => setActiveTab("outflows")}
          >
            Outflows
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${activeTab === "summary" ? "bg-green-50 text-green-700 border border-green-200" : "bg-white text-gray-700 border-t border-b border-r border-gray-200 hover:bg-gray-100"} rounded-r-lg`}
            onClick={() => setActiveTab("summary")}
          >
            Summary
          </button>
        </div>
      </div>

      {/* Summary Tab Content */}
      {activeTab === "summary" && (
        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-4">Expense Breakdown</h2>
          <p className="text-gray-600 mb-4">Overview of expenses by category</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h4 className="font-medium text-gray-700 mb-2">Food Supplies</h4>
              <p className="text-xl font-bold text-green-700">
                UGX{" "}
                {outflowData
                  .filter((item) => item.category === "Food Supplies")
                  .reduce((sum, item) => sum + item.amount, 0)
                  .toLocaleString()}
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h4 className="font-medium text-gray-700 mb-2">Packing Supplies</h4>
              <p className="text-xl font-bold text-green-700">
                UGX{" "}
                {outflowData
                  .filter((item) => item.category === "Packing Supplies")
                  .reduce((sum, item) => sum + item.amount, 0)
                  .toLocaleString()}
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h4 className="font-medium text-gray-700 mb-2">Transportation</h4>
              <p className="text-xl font-bold text-green-700">
                UGX{" "}
                {outflowData
                  .filter((item) => item.category === "Transportation")
                  .reduce((sum, item) => sum + item.amount, 0)
                  .toLocaleString()}
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h4 className="font-medium text-gray-700 mb-2">Labor</h4>
              <p className="text-xl font-bold text-green-700">
                UGX{" "}
                {outflowData
                  .filter((item) => item.category === "Labor")
                  .reduce((sum, item) => sum + item.amount, 0)
                  .toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Inflows Tab Content */}
      {activeTab === "inflows" && (
        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-4">Fund Disbursements (Inflows)</h2>
          <p className="text-gray-600 mb-4">All disbursements received for Ramadan 1446 AH</p>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
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
                      Amount (UGX)
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount (USD)
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Sort inflow data by date (earliest first) */}
                  {[...inflowData]
                    .sort((a, b) => {
                      // Convert dates to comparable format (earliest first)
                      const dateA = new Date(a.date).getTime()
                      const dateB = new Date(b.date).getTime()
                      return dateA - dateB
                    })
                    .map((inflow) => (
                      <tr key={inflow.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inflow.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {inflow.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                          {inflow.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                          {inflow.usdAmount ? inflow.usdAmount.toLocaleString() : "—"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            {inflow.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  <tr className="bg-green-50 font-medium">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Total</td>
                    <td></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      {totalInflows.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      {inflowData.reduce((sum, item) => sum + (item.usdAmount || 0), 0).toLocaleString()}
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Outflows Tab Content */}
      {activeTab === "outflows" && (
        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-4">Distribution Expenses (Outflows)</h2>
          <p className="text-gray-600 mb-4">All expenses for Ramadan 1446 AH food distribution</p>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vendor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Receipt #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount (UGX)
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Sort outflow data by date (earliest first) */}
                  {[...outflowData]
                    .sort((a, b) => {
                      // Convert dates to comparable format (earliest first)
                      const dateA = new Date(a.date).getTime()
                      const dateB = new Date(b.date).getTime()
                      return dateA - dateB
                    })
                    .map((outflow) => (
                      <tr key={outflow.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{outflow.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {outflow.vendor}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{outflow.receipt}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{outflow.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{outflow.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                          {outflow.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                            Paid
                          </span>
                        </td>
                      </tr>
                    ))}
                  <tr className="bg-green-50 font-medium">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Total</td>
                    <td colSpan={4}></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      {totalOutflows.toLocaleString()}
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
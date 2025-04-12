"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, FileText } from "lucide-react"
import FinancialCharts from "@/components/financial-charts"

// Detailed outflow data from the provided image
const outflowData = [
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
    description: "Cooking Oil 700 kg",
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
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "1803202501014",
    description: "Rice 100 kg",
    category: "Food Supplies",
    amount: 340000,
  },
  {
    id: 19,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "1803202501014",
    description: "Sugar 100 kg",
    category: "Food Supplies",
    amount: 352000,
  },
  {
    id: 20,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "1803202501014",
    description: "Posho 100 kg",
    category: "Food Supplies",
    amount: 200000,
  },
  {
    id: 21,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "1803202501014",
    description: "Green Bags",
    category: "Packing Supplies",
    amount: 18000,
  },
  {
    id: 22,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "1803202501014",
    description: "White Bags",
    category: "Packing Supplies",
    amount: 4000,
  },
  {
    id: 23,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "1803202501014",
    description: "Cooking Oil 3 boxes",
    category: "Food Supplies",
    amount: 258000,
  },
  {
    id: 24,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "15032025010115",
    description: "Rice 100 kg",
    category: "Food Supplies",
    amount: 340000,
  },
  {
    id: 25,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "15032025010115",
    description: "Sugar 100 kg",
    category: "Food Supplies",
    amount: 358000,
  },
  {
    id: 26,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "15032025010115",
    description: "Posho 100 kg",
    category: "Food Supplies",
    amount: 200000,
  },
  {
    id: 27,
    date: "3/18/2025",
    vendor: "Trend Shoppers",
    receipt: "15032025010115",
    description: "Cooking Oil 5 boxes",
    category: "Food Supplies",
    amount: 430000,
  },
  {
    id: 28,
    date: "3/26/2025",
    vendor: "Umar Kanjule",
    receipt: "151",
    description: "Auto Rental",
    category: "Transportation",
    amount: 500000,
  },
  {
    id: 29,
    date: "3/28/2025",
    vendor: "Golden Gas Ltd",
    receipt: "6517",
    description: "50 Liter Fuel",
    category: "Transportation",
    amount: 250000,
  },
  {
    id: 30,
    date: "3/28/2025",
    vendor: "Golden Gas Ltd",
    receipt: "6518",
    description: "30 Liter Fuel",
    category: "Transportation",
    amount: 150000,
  },
  {
    id: 31,
    date: "3/26/2025",
    vendor: "Munsur Suwod",
    receipt: "472247",
    description: "Auto Rental",
    category: "Transportation",
    amount: 700000,
  },
  {
    id: 32,
    date: "3/17/2025",
    vendor: "Munsur Suwod",
    receipt: "472247-2",
    description: "Auto Rental",
    category: "Transportation",
    amount: 500000,
  },
  {
    id: 33,
    date: "03/13/2025",
    vendor: "Hayat Quality Rice",
    receipt: "142",
    description: "Rice 3600 kg",
    category: "Food Supplies",
    amount: 11520000,
  },
  {
    id: 34,
    date: "3/13/2025",
    vendor: "MTU Best Miller",
    receipt: "495",
    description: "Posho 3600 kg",
    category: "Food Supplies",
    amount: 6840000,
  },
  {
    id: 35,
    date: "3/13/2025",
    vendor: "Pamoja Enterprises",
    receipt: "123",
    description: "Sugar 450 Kg",
    category: "Food Supplies",
    amount: 1620000,
  },
  {
    id: 36,
    date: "3/13/2025",
    vendor: "Pamoja Enterprises",
    receipt: "123",
    description: "Cooking Oil 450 Liter",
    category: "Food Supplies",
    amount: 3915000,
  },
  {
    id: 37,
    date: "02/27/2025",
    vendor: "Jamorra Traders",
    receipt: "260",
    description: "White Bags",
    category: "Packing Supplies",
    amount: 21000,
  },
  {
    id: 38,
    date: "3/13/2025",
    vendor: "Jamorra Traders",
    receipt: "263",
    description: "White Bags",
    category: "Packing Supplies",
    amount: 21000,
  },
  {
    id: 39,
    date: "3/13/2025",
    vendor: "Jamorra Traders",
    receipt: "263",
    description: "Green Bags",
    category: "Packing Supplies",
    amount: 85000,
  },
  {
    id: 40,
    date: "3/13/2025",
    vendor: "Jamorra Traders",
    receipt: "263",
    description: "Black bags",
    category: "Packing Supplies",
    amount: 50000,
  },
  {
    id: 41,
    date: "3/13/2025",
    vendor: "Golden Gas Ltd",
    receipt: "6518",
    description: "67 Liter Fuel",
    category: "Transportation",
    amount: 336000,
  },
  {
    id: 42,
    date: "3/26/2025",
    vendor: "Packing Labor",
    receipt: "LB1",
    description: "Labor",
    category: "Labor",
    amount: 300000,
  },
  {
    id: 43,
    date: "3/26/2025",
    vendor: "Packing Labor",
    receipt: "LB2",
    description: "Labor",
    category: "Labor",
    amount: 150000,
  },
  {
    id: 44,
    date: "2/25/2025",
    vendor: "Umar Kanjule",
    receipt: "NA2",
    description: "Bank Charges",
    category: "Bank Charges",
    amount: 22800,
  },
  {
    id: 45,
    date: "2/25/2025",
    vendor: "Umar Kanjule",
    receipt: "NA3",
    description: "Air Time",
    category: "Air Time",
    amount: 40000,
  },
  {
    id: 46,
    date: "2/25/2025",
    vendor: "Umar Kanjule",
    receipt: "NA4",
    description: "Transportation",
    category: "Transportation",
    amount: 10000,
  },
  {
    id: 47,
    date: "3/6/2025",
    vendor: "Packing Labor",
    receipt: "LB3",
    description: "Labor",
    category: "Labor",
    amount: 200000,
  },
  {
    id: 48,
    date: "3/13/2025",
    vendor: "Umar Kanjule",
    receipt: "NA5",
    description: "Transportation",
    category: "Transportation",
    amount: 20000,
  },
  {
    id: 49,
    date: "3/15/2025",
    vendor: "Umar Kanjule",
    receipt: "NA6",
    description: "Air Time",
    category: "Air Time",
    amount: 20000,
  },
  {
    id: 50,
    date: "3/17/2025",
    vendor: "Rehmant ul Yateem",
    receipt: "8",
    description: "Food Ration for Ramdhan",
    category: "Food Supplies",
    amount: 1070331,
  },
  {
    id: 51,
    date: "3/17/2025",
    vendor: "SISU Orphanage",
    receipt: "008",
    description: "Food Ration for Ramdhan",
    category: "Food Supplies",
    amount: 1070331,
  },
  {
    id: 52,
    date: "3/20/2025",
    vendor: "Umar Kanjule",
    receipt: "NA",
    description: "Eid dinner",
    category: "Labor",
    amount: 300000,
  },
  {
    id: 53,
    date: "3/27/2025", // Changed from 3/18/2025
    vendor: "Trend Shoppers",
    receipt: "Kampala-3rd-2",
    description: "Rice 100kg, Sugar 100kg, Posho 100kg, Green Bags, White Bags, Cooking Oil",
    category: "Food Supplies",
    amount: 1172000,
  },
  {
    id: 54,
    date: "3/27/2025", // Changed from 3/18/2025
    vendor: "Trend Shoppers",
    receipt: "Kampala-3rd-1",
    description: "Rice 100kg, Sugar 100kg, Posho 100kg, Green Bags, White Bags",
    category: "Food Supplies",
    amount: 908000,
  },
  {
    id: 55,
    date: "3/27/2025", // Changed from 3/18/2025
    vendor: "Distribution Charges",
    receipt: "NA",
    description: "Misc",
    category: "Misc",
    amount: 129173, // Changed from 80000
  },
  {
    id: 56,
    date: "04/12/2025",
    vendor: "Umar Kanjule",
    receipt: "NA",
    description: "Paid to Umar for his efforts",
    category: "Labor",
    amount: 500000,
  },
]

// Detailed inflow data from the provided image
const inflowData = [
  // Existing disbursements
  { id: 1, date: "2/24/2025", location: "Lira", amount: 25100000, status: "Received", usdAmount: 7025 },
  { id: 2, date: "2/24/2025", location: "Kampala", amount: 1968170, status: "Received", usdAmount: 550 },
  { id: 3, date: "3/9/2025", location: "Kampala", amount: 2500000, status: "Received", usdAmount: 700 },
  { id: 4, date: "3/10/2025", location: "Lira", amount: 24100922, status: "Received", usdAmount: 6825 },
  { id: 5, date: "3/17/2025", location: "Rehmant ul Yateem", amount: 1070331, status: "Received", usdAmount: 300 },
  { id: 6, date: "3/17/2025", location: "SISU Orphanage", amount: 1070331, status: "Received", usdAmount: 300 },
  { id: 7, date: "3/21/2025", location: "Kampala", amount: 2160000, status: "Received", usdAmount: 600 },
  { id: 8, date: "3/30/2025", location: "Lira", amount: 300003, status: "Received", usdAmount: 84 },
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

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link
          href="/accounting/receipts"
          className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">View Receipts</h3>
            <p className="text-gray-600 text-sm">Browse all receipts for expenses</p>
          </div>
        </Link>
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
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h4 className="font-medium text-gray-700 mb-2">Bank Charges</h4>
              <p className="text-xl font-bold text-green-700">
                UGX{" "}
                {outflowData
                  .filter((item) => item.category === "Bank Charges")
                  .reduce((sum, item) => sum + item.amount, 0)
                  .toLocaleString()}
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h4 className="font-medium text-gray-700 mb-2">Air Time</h4>
              <p className="text-xl font-bold text-green-700">
                UGX{" "}
                {outflowData
                  .filter((item) => item.category === "Air Time")
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
                  {/* Sort inflow data by date (most recent first) */}
                  {[...inflowData]
                    .sort((a, b) => {
                      // Convert dates to comparable format (most recent first)
                      const dateA = new Date(a.date).getTime()
                      const dateB = new Date(b.date).getTime()
                      return dateB - dateA
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
                  {/* Sort outflow data by date (most recent first) */}
                  {[...outflowData]
                    .sort((a, b) => {
                      // Convert dates to comparable format (most recent first)
                      const dateA = new Date(a.date).getTime()
                      const dateB = new Date(b.date).getTime()
                      return dateB - dateA
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

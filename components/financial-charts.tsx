"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

// Types for our chart data
interface CategoryData {
  name: string
  value: number
  color: string
}

interface TimeSeriesData {
  date: string
  inflows: number
  outflows: number
}

interface FinancialChartsProps {
  outflowData: any[]
  inflowData: any[]
}

export default function FinancialCharts({ outflowData, inflowData }: FinancialChartsProps) {
  const [chartType, setChartType] = useState<"category" | "timeline">("category")

  // Process data for category breakdown chart
  const categoryData: CategoryData[] = [
    {
      name: "Food Supplies",
      value: outflowData
        .filter((item) => item.category === "Food Supplies")
        .reduce((sum, item) => sum + item.amount, 0),
      color: "#10b981", // green-500
    },
    {
      name: "Packing Supplies",
      value: outflowData
        .filter((item) => item.category === "Packing Supplies")
        .reduce((sum, item) => sum + item.amount, 0),
      color: "#3b82f6", // blue-500
    },
    {
      name: "Transportation",
      value: outflowData
        .filter((item) => item.category === "Transportation")
        .reduce((sum, item) => sum + item.amount, 0),
      color: "#f59e0b", // amber-500
    },
    {
      name: "Labor",
      value: outflowData.filter((item) => item.category === "Labor").reduce((sum, item) => sum + item.amount, 0),
      color: "#8b5cf6", // violet-500
    },
  ]

  // Process data for timeline chart
  // Group by month and aggregate
  const timelineData: TimeSeriesData[] = []

  // Helper function to get month from date string
  const getMonthFromDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleString("default", { month: "short" })
  }

  // Create a map to aggregate by month
  const inflowsByMonth = new Map<string, number>()
  const outflowsByMonth = new Map<string, number>()

  // Aggregate inflows by month
  inflowData.forEach((item) => {
    const month = getMonthFromDate(item.date)
    const currentAmount = inflowsByMonth.get(month) || 0
    inflowsByMonth.set(month, currentAmount + item.amount)
  })

  // Aggregate outflows by month
  outflowData.forEach((item) => {
    const month = getMonthFromDate(item.date)
    const currentAmount = outflowsByMonth.get(month) || 0
    outflowsByMonth.set(month, currentAmount + item.amount)
  })

  // Combine into timeline data
  const allMonths = new Set([...inflowsByMonth.keys(), ...outflowsByMonth.keys()])
  allMonths.forEach((month) => {
    timelineData.push({
      date: month,
      inflows: inflowsByMonth.get(month) || 0,
      outflows: outflowsByMonth.get(month) || 0,
    })
  })

  // Sort by month
  timelineData.sort((a, b) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months.indexOf(a.date) - months.indexOf(b.date)
  })

  // Format large numbers for tooltips
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-green-800">Financial Visualization</h3>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            className={`px-4 py-2 text-sm font-medium ${chartType === "category" ? "bg-green-50 text-green-700 border border-green-200" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"} rounded-l-lg`}
            onClick={() => setChartType("category")}
          >
            Category Breakdown
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${chartType === "timeline" ? "bg-green-50 text-green-700 border border-green-200" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"} rounded-r-lg`}
            onClick={() => setChartType("timeline")}
          >
            Monthly Timeline
          </button>
        </div>
      </div>

      <div className="h-80">
        {chartType === "category" ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`UGX ${formatNumber(value)}`, "Amount"]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={timelineData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip formatter={(value: number) => [`UGX ${formatNumber(value)}`, ""]} />
              <Legend />
              <Bar dataKey="inflows" name="Inflows" fill="#10b981" />
              <Bar dataKey="outflows" name="Outflows" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-500 text-center">
        {chartType === "category"
          ? "Distribution of expenses by category"
          : "Monthly comparison of inflows and outflows"}
      </div>
    </div>
  )
}


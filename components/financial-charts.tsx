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
  LabelList,
  Sector,
  Area,
  ComposedChart,
} from "recharts"

// Types for our chart data
interface CategoryData {
  name: string
  value: number
  color: string
  percentage: string
}

interface TimeSeriesData {
  date: string
  inflows: number
  outflows: number
}

interface FinancialChartsProps {
  outflowData: any[]
  inflowData: any[]
  className?: string
}

// Custom tooltip component for better formatting
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-sm">
        <p className="font-medium text-gray-900">{payload[0].name}</p>
        <p className="text-green-600 font-medium">UGX {payload[0].value.toLocaleString()}</p>
        <p className="text-xs text-gray-500 mt-1">{payload[0].payload.percentage}% of total</p>
      </div>
    )
  }
  return null
}

// Custom active shape for donut chart
const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props

  return (
    <g>
      <text x={cx} y={cy} dy={-20} textAnchor="middle" fill="#333" className="text-lg font-medium">
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#333">
        UGX {value.toLocaleString()}
      </text>
      <text x={cx} y={cy} dy={25} textAnchor="middle" fill="#666" className="text-sm">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius - 5}
        outerRadius={outerRadius}
        fill={fill}
      />
    </g>
  )
}

export default function FinancialCharts({ outflowData, inflowData, className = "" }: FinancialChartsProps) {
  const [chartType, setChartType] = useState<"category" | "timeline">("category")
  const [activeIndex, setActiveIndex] = useState(0)

  // Process data for category breakdown chart
  const calculateCategoryData = () => {
    // Get total outflows
    const totalOutflows = outflowData.reduce((sum, item) => sum + item.amount, 0)

    // Group by category and calculate totals
    const categoryTotals: Record<string, number> = {}
    outflowData.forEach((item) => {
      const category = item.category || "Uncategorized"
      categoryTotals[category] = (categoryTotals[category] || 0) + item.amount
    })

    // Create data array with colors and percentages
    const colors = {
      "Food Supplies": "#10b981", // green-500
      "Packing Supplies": "#3b82f6", // blue-500
      Transportation: "#f59e0b", // amber-500
      Labor: "#8b5cf6", // violet-500
      Uncategorized: "#9ca3af", // gray-400
    }

    return Object.entries(categoryTotals)
      .map(([name, value]) => ({
        name,
        value,
        color: (colors as any)[name] || "#9ca3af",
        percentage: ((value / totalOutflows) * 100).toFixed(1),
      }))
      .sort((a, b) => b.value - a.value) // Sort by value descending
  }

  // Process data for timeline chart
  const processTimelineData = () => {
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
    const timelineData: TimeSeriesData[] = []
    const allMonths = new Set([...inflowsByMonth.keys(), ...outflowsByMonth.keys()])

    allMonths.forEach((month) => {
      timelineData.push({
        date: month,
        inflows: inflowsByMonth.get(month) || 0,
        outflows: outflowsByMonth.get(month) || 0,
      })
    })

    // Sort by month
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return timelineData.sort((a, b) => months.indexOf(a.date) - months.indexOf(b.date))
  }

  const categoryData = calculateCategoryData()
  const timelineData = processTimelineData()

  // Render category breakdown chart
  const renderCategoryChart = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={categoryData} margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" tickFormatter={(value) => `UGX ${(value / 1000000).toFixed(1)}M`} />
          <YAxis type="category" dataKey="name" width={90} />
          <Tooltip
            formatter={(value: number) => [`UGX ${value.toLocaleString()}`, "Amount"]}
            labelFormatter={(label) => `Category: ${label}`}
          />
          <Bar dataKey="value">
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList
              dataKey="percentage"
              position="right"
              formatter={(value: string) => `${value}%`}
              style={{ fill: "#333", fontWeight: 500 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Donut Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={categoryData}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={(_, index) => setActiveIndex(index)}
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )

  // Render timeline chart
  const renderTimelineChart = () => (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={timelineData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="date" tick={{ fill: "#666" }} axisLine={{ stroke: "#ccc" }} tickLine={{ stroke: "#ccc" }} />
        <YAxis
          tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
          tick={{ fill: "#666" }}
          axisLine={{ stroke: "#ccc" }}
          tickLine={{ stroke: "#ccc" }}
        />
        <Tooltip
          formatter={(value: number) => [`UGX ${value.toLocaleString()}`, ""]}
          labelFormatter={(label) => `Month: ${label}`}
          contentStyle={{ borderRadius: "4px", border: "1px solid #ddd" }}
        />
        <Legend verticalAlign="top" height={36} wrapperStyle={{ paddingTop: "10px" }} />
        <Area
          type="monotone"
          dataKey="inflows"
          name="Inflows"
          fill="rgba(16, 185, 129, 0.2)"
          stroke="#10b981"
          strokeWidth={2}
        />
        <Bar dataKey="outflows" name="Outflows" fill="#ef4444" barSize={20} radius={[4, 4, 0, 0]} />
      </ComposedChart>
    </ResponsiveContainer>
  )

  // Render category data table
  const renderCategoryTable = () => (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount (UGX)
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Percentage
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {categoryData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                </div>
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-right">
                {item.value.toLocaleString()}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-right">{item.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className={className}>
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-green-800">Financial Visualization</h3>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              chartType === "category"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            } rounded-l-lg`}
            onClick={() => setChartType("category")}
          >
            Category Breakdown
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              chartType === "timeline"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            } rounded-r-lg`}
            onClick={() => setChartType("timeline")}
          >
            Monthly Timeline
          </button>
        </div>
      </div>

      <div className="h-80 mb-6">{chartType === "category" ? renderCategoryChart() : renderTimelineChart()}</div>

      {chartType === "category" && renderCategoryTable()}

      <div className="mt-4 text-sm text-gray-500 text-center">
        {chartType === "category"
          ? "Distribution of expenses by category"
          : "Monthly comparison of inflows and outflows"}
      </div>
    </div>
  )
}
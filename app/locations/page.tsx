import Link from "next/link"
import { ChevronLeft } from "lucide-react"

// Updated comprehensive list of locations
const locations = [
  { id: 1, name: "Akalo", households: 55 },
  { id: 2, name: "Abeli", households: 20 },
  { id: 3, name: "Anai", households: 70 },
  { id: 4, name: "Te-Ilwa", households: 30 },
  { id: 5, name: "Aduku", households: 35 },
  { id: 6, name: "Ageri Nono", households: 25 },
  { id: 7, name: "Abwang", households: 40 },
  { id: 8, name: "Olidur", households: 45 },
  { id: 9, name: "Aderolongo", households: 25 },
  { id: 10, name: "Inomo", households: 39 },
  { id: 11, name: "Angolowelo Abongomola", households: 28 },
  { id: 12, name: "Olilo", households: 61 },
  { id: 13, name: "Opem", households: 65 },
  { id: 14, name: "Aduku", households: 35 },
  { id: 15, name: "Telela", households: 45 },
  { id: 16, name: "Zambia", households: 42 },
  { id: 17, name: "Cam Kwani", households: 40 },
  { id: 18, name: "Kampala", households: 20 },
  { id: 19, name: "Kyampisi", households: 60 },
]

// Calculate total households
const totalHouseholds = locations.reduce((sum, location) => sum + location.households, 0)

export default function Locations() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/" className="text-green-600 hover:underline inline-flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
      </div>

      <div className="bg-green-50 py-12 mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Distribution Locations</h1>
        <p className="text-gray-700">
          Serving {totalHouseholds} households across Uganda during the blessed month of Ramadan 1446 AH.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-green-800">Distribution Locations</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location Name
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Number of Households
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {locations.map((location) => (
                <tr key={location.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{location.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                    {location.households}
                  </td>
                </tr>
              ))}
              <tr className="bg-green-50 font-medium">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Total Households</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 text-right">
                  {totalHouseholds}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


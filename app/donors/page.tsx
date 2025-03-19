import Link from "next/link"
import { ChevronLeft, Heart } from "lucide-react"

// Update the donors array to remove actual names except for Rashid's donors
const donors = [
  {
    id: 1,
    name: "Rashid Donor 1",
    location: "Houston, USA",
    amount: 500,
    date: "February 10, 2025",
  },
  {
    id: 2,
    name: "Rashid Donor 2",
    location: "Houston, USA",
    amount: 500,
    date: "February 10, 2025",
  },
  {
    id: 3,
    name: "Rashid Donor 3",
    location: "Houston, USA",
    amount: 250,
    date: "February 10, 2025",
  },
  {
    id: 4,
    name: "Rashid Donor 4",
    location: "Houston, USA",
    amount: 5000,
    date: "February 10, 2025",
  },
  {
    id: 5,
    name: "Donor 5",
    location: "Houston, USA",
    amount: 1000,
    date: "February 10, 2025",
  },
  {
    id: 6,
    name: "Donor 6",
    location: "Marietta, USA",
    amount: 2000,
    date: "February 11, 2025",
  },
  {
    id: 7,
    name: "Donor 7",
    location: "Houston, USA",
    amount: 501,
    date: "February 11, 2025",
  },
  {
    id: 8,
    name: "Donor 8",
    location: "Marietta, USA",
    amount: 3000,
    date: "February 12, 2025",
  },
  {
    id: 9,
    name: "Donor 9",
    location: "California, USA",
    amount: 250,
    date: "February 11, 2025",
  },
  {
    id: 10,
    name: "Donor 10",
    location: "USA",
    amount: 100,
    date: "February 11, 2025",
  },
  {
    id: 11,
    name: "Donor 11",
    location: "Karachi, Pakistan",
    amount: 1000,
    date: "February 19, 2025",
  },
  {
    id: 12,
    name: "Donor 12",
    location: "Houston, TX",
    amount: 2000,
    date: "February 22, 2025",
  },
  {
    id: 13,
    name: "Rashid Donor 13",
    location: "Houston, USA",
    amount: 500,
    date: "February 28, 2025",
  },
]

// Calculate total donations
const totalDonations = donors.reduce((sum, donor) => sum + donor.amount, 0)

export default function Donors() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/" className="text-green-600 hover:underline inline-flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
      </div>

      <div className="bg-green-50 py-12 mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Our Generous Donors</h1>
        <p className="text-gray-700">
          Thank you to all individuals who have contributed to our Ramadan food distribution initiative.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {donors.map((donor) => (
          <div key={donor.id} className="border border-green-100 rounded-lg overflow-hidden bg-green-50">
            <div className="p-4">
              <h3 className="font-bold text-green-800">{donor.name}</h3>
              <p className="text-sm text-gray-600">From {donor.location}</p>

              <div className="mt-4 flex items-center text-green-700">
                <Heart className="h-5 w-5 mr-2 fill-green-600 stroke-green-600" />
                <span className="font-bold">${donor.amount.toLocaleString()}</span>
              </div>

              <p className="mt-2 text-sm text-gray-600">Donated on {donor.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-block bg-green-100 px-6 py-3 rounded-lg border border-green-200">
          <p className="text-lg text-green-800">
            Total Donations: <span className="font-bold">${totalDonations.toLocaleString()}</span>
          </p>
        </div>
      </div>
    </div>
  )
}


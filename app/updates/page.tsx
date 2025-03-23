import Link from "next/link"
import { ChevronLeft } from "lucide-react"

// Mock data for updates
const updates = [
  {
    id: 8,
    title: "Umar Kanjule Recovers from Minor Accident",
    date: "3/19/2025",
    content:
      "We're grateful to report that Umar Kanjule is safe following a minor accident. He had been working tirelessly on purchasing supplies, packing rations, and distributing food to various masjids and remote villages. Due to fatigue and lack of sleep, he momentarily dozed off while driving. The car veered off the road and ended up in wetlands adjacent to the roadway. Fortunately, the vehicle did not overturn, and Umar is unharmed. We ask for your continued prayers for his well-being as he continues this important work.",
  },
  {
    id: 7,
    title: "Distribution in Kyampisi",
    date: "3/18/2025",
    content: "Distribution was conducted today in Kyampisi. About 60 households benefited.",
  },
  {
    id: 6,
    title: "Additional Second Purchase Done Today",
    date: "3/18/2025",
    content: "Additional second purchase done today in Lira.",
  },
  {
    id: 1,
    title: "Food Ration Purchases Complete",
    date: "3/3/2025",
    content: "Food ration purchases for the first distribution complete. Packing on the packages in process.",
  },
  {
    id: 2,
    title: "First Distribution Completed",
    date: "3/12/2025",
    content:
      "One distribution in various nothern Uganda Lira locations and Kampala have been completed. More than 800 beneficiaries in 27 locations served.",
  },
  {
    id: 3,
    title: "Reaching Hard-to-Reach Areas",
    date: "3/14/2025",
    content:
      "May you and all the donors be rewarded abundantly as I have reached in some hard to reach areas where the beneficiaries are saying it's their first time to receive Ramadan iftar ever since. Jazakallah khayran.",
  },
  {
    id: 4,
    title: "Second Distribution Planning",
    date: "3/18/2025",
    content: "Planning for the second distribution is underway. We aim to reach more families in additional locations.",
  },
  {
    id: 5,
    title: "Additional Funds Received",
    date: "3/20/2025",
    content:
      "We've received additional funds from generous donors. This will help us expand our reach for the upcoming distributions.",
  },
]

export default function Updates() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/" className="text-green-600 hover:underline inline-flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
      </div>

      <div className="bg-green-50 py-12 mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Recent Updates</h1>
        <p className="text-gray-700">
          Stay informed about our Ramadan food distribution efforts and impact across Uganda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {updates.map((update) => (
          <div key={update.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-green-50">
              <h3 className="font-bold">{update.title}</h3>
              <p className="text-sm text-gray-500">{update.date}</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700">{update.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
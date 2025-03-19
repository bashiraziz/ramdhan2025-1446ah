import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 text-green-600 font-semibold mb-2">
            <Heart className="h-5 w-5 fill-green-600" />
            <span>Ramadan Food Distribution</span>
          </div>
          <p className="text-gray-600 text-sm">
            Providing essential food supplies to families in need across Uganda during Ramadan 1446 AH.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/updates" className="text-gray-600 hover:text-green-600">
                Updates
              </Link>
            </li>
            <li>
              <Link href="/donors" className="text-gray-600 hover:text-green-600">
                Donors
              </Link>
            </li>
            <li>
              <Link href="/locations" className="text-gray-600 hover:text-green-600">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/images" className="text-gray-600 hover:text-green-600">
                Images
              </Link>
            </li>
            <li>
              <Link href="/funds" className="text-gray-600 hover:text-green-600">
                Funds
              </Link>
            </li>
            <li>
              <Link href="/accounting" className="text-gray-600 hover:text-green-600">
                Accounting
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Email: bashiraziz@yahoo.com</li>
            <li>Phone: +1 404 825 8545</li>
            <li>Address: Marietta GA USA</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}


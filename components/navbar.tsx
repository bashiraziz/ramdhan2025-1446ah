import Link from "next/link"
import { Heart } from "lucide-react"

export default function Navbar() {
  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold mb-2 sm:mb-0">
          <Heart className="h-5 w-5 fill-white" />
          <span>Ramadan Food Distribution</span>
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/updates" className="hover:underline">
                Updates
              </Link>
            </li>
            <li>
              <Link href="/donors" className="hover:underline">
                Donors
              </Link>
            </li>
            <li>
              <Link href="/locations" className="hover:underline">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/images" className="hover:underline">
                Images
              </Link>
            </li>
            <li>
              <Link href="/funds" className="hover:underline">
                Funds
              </Link>
            </li>
            <li>
              <Link href="/accounting" className="hover:underline">
                Accounting
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
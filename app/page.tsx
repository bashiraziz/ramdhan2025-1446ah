import Link from "next/link"
import Image from "next/image"
import { Users, MapPin, Package, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Ramadan Food Distribution 1446 AH</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Providing essential food supplies to families in need across Uganda during the blessed month of Ramadan.
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative w-full h-[381px] md:h-[508px] rounded-lg overflow-hidden">
          <Image
            src="/images/hero-image.jpeg"
            alt="Ramadan food distribution in Uganda"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
            <h2 className="text-xl font-bold">Serving Communities Across Uganda</h2>
            <p>Distributing food packages to families in need during Ramadan</p>
          </div>
        </div>
        <div className="text-right mt-2">
          <Link href="/images" className="text-green-600 hover:underline inline-flex items-center">
            View more photos <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Over 800+ Families</h3>
              <p className="text-gray-600">Supported with food packages</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Over 28 Locations</h3>
              <p className="text-gray-600">Across Uganda</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">6050+ kg</h3>
              <p className="text-gray-600">of Rice distributed</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">1500+ kg</h3>
              <p className="text-gray-600">of Sugar distributed</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">5900+ kg</h3>
              <p className="text-gray-600">of Posho distributed</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">1280+ Liter</h3>
              <p className="text-gray-600">of Cooking Oil distributed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donors Link Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w3xl mx-auto border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Our Generous Donors</h2>
          <p className="text-gray-600 mb-6">
            We are grateful to all individuals who have contributed to our Ramadan food distribution initiative.
          </p>
          <Link
            href="/donors"
            className="inline-flex items-center px-6 py-3 border border-green-600 text-green-600 bg-white rounded-md font-medium hover:bg-green-50 transition-colors"
          >
            View All Donors
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-800">Recent Updates</h2>
          <Link href="/updates" className="text-green-600 hover:underline inline-flex items-center">
            View all updates <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-green-50">
              <h3 className="font-bold">Door to Door Distribution Started</h3>
              <p className="text-sm text-gray-500">3/25/2025</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700">
                Door to door distribution started today after delivery aboke masjid share.
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-green-50">
              <h3 className="font-bold">Distribution in Kyampisi</h3>
              <p className="text-sm text-gray-500">3/18/2025</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700">
                Distribution was conducted today in Kyampisi. About 60 households benefited.
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-green-50">
              <h3 className="font-bold">Additional Second Purchase Done Today</h3>
              <p className="text-sm text-gray-500">3/18/2025</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700">Additional second purchase done today in Lira.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Dashboard Preview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800">Financial Dashboard</h2>
            <Link href="/accounting" className="text-green-600 hover:underline inline-flex items-center">
              View full dashboard <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h3 className="text-base font-semibold text-green-800 mb-1">Total Donations</h3>
                <p className="text-xl font-bold text-green-700">$16,601</p>
                <p className="text-xs text-gray-500 mt-1">From 13 donors</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h3 className="text-base font-semibold text-green-800 mb-1">Total Expenses</h3>
                <p className="text-xl font-bold text-red-600">UGX 55,809,754</p>
                <p className="text-xs text-gray-500 mt-1">Across 29 transactions</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h3 className="text-base font-semibold text-green-800 mb-1">Remaining Balance</h3>
                <p className="text-xl font-bold text-green-700">$901</p>
                <p className="text-xs text-gray-500 mt-1">For ongoing distribution</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/accounting"
                className="inline-flex items-center px-6 py-3 border border-green-600 text-green-600 bg-white rounded-md font-medium hover:bg-green-50 transition-colors"
              >
                View Financial Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
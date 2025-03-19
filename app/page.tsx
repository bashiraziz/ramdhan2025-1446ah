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
        <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Ramadan food distribution in Uganda"
            fill
            className="object-cover"
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
              <h3 className="text-xl font-bold text-gray-800">780+ Families</h3>
              <p className="text-gray-600">Supported with food packages</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">28 Locations</h3>
              <p className="text-gray-600">Across Uganda</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">2,450+ kg</h3>
              <p className="text-gray-600">of Rice distributed</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">1,050+ kg</h3>
              <p className="text-gray-600">of Sugar distributed</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">2,300+ kg</h3>
              <p className="text-gray-600">of Posho distributed</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">830+ Liter</h3>
              <p className="text-gray-600">of Cooking Oil distributed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donors Link Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto border-t border-gray-200 pt-8">
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

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-green-50">
              <h3 className="font-bold">Reaching Hard-to-Reach Areas</h3>
              <p className="text-sm text-gray-500">3/14/2025</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700">
                May you and all the donors be rewarded abundantly as I have reached in some hard to reach areas where
                the beneficiaries are saying it's their first time to receive Ramadan iftar ever since. Jazakallah
                khayran.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


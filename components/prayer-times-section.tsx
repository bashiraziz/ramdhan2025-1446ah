"use client"

import { useState } from "react"
import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for prayer times
const prayerTimesData = {
  "New York": {
    fajr: "4:32 AM",
    sunrise: "5:58 AM",
    dhuhr: "12:15 PM",
    asr: "3:45 PM",
    maghrib: "6:45 PM",
    isha: "8:15 PM",
  },
  London: {
    fajr: "3:45 AM",
    sunrise: "5:15 AM",
    dhuhr: "12:00 PM",
    asr: "3:30 PM",
    maghrib: "7:00 PM",
    isha: "8:45 PM",
  },
  Dubai: {
    fajr: "4:15 AM",
    sunrise: "5:35 AM",
    dhuhr: "12:20 PM",
    asr: "3:50 PM",
    maghrib: "6:55 PM",
    isha: "8:25 PM",
  },
  "Kuala Lumpur": {
    fajr: "5:45 AM",
    sunrise: "7:05 AM",
    dhuhr: "1:15 PM",
    asr: "4:30 PM",
    maghrib: "7:20 PM",
    isha: "8:40 PM",
  },
}

export default function PrayerTimesSection() {
  const [selectedCity, setSelectedCity] = useState("New York")
  const prayerTimes = prayerTimesData[selectedCity as keyof typeof prayerTimesData]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#1a1f36]">Prayer Times</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Check accurate prayer times for your location during the holy month of Ramadan.
          </p>
        </div>

        <div className="mx-auto mb-8 max-w-xs">
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="New York">New York</SelectItem>
              <SelectItem value="London">London</SelectItem>
              <SelectItem value="Dubai">Dubai</SelectItem>
              <SelectItem value="Kuala Lumpur">Kuala Lumpur</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <PrayerTimeCard title="Fajr" time={prayerTimes.fajr} />
          <PrayerTimeCard title="Sunrise" time={prayerTimes.sunrise} />
          <PrayerTimeCard title="Dhuhr" time={prayerTimes.dhuhr} />
          <PrayerTimeCard title="Asr" time={prayerTimes.asr} />
          <PrayerTimeCard title="Maghrib" time={prayerTimes.maghrib} />
          <PrayerTimeCard title="Isha" time={prayerTimes.isha} />
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Prayer times are calculated based on geographical coordinates and may vary slightly.</p>
          <p>Times shown are for {selectedCity} on March 11, 2024.</p>
        </div>
      </div>
    </section>
  )
}

function PrayerTimeCard({ title, time }: { title: string; time: string }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-[#1a1f36]">
          <Clock className="h-5 w-5 text-[#f8c156]" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{time}</p>
      </CardContent>
    </Card>
  )
}


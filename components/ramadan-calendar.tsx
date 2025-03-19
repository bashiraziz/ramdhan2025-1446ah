"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for Ramadan 2024 (approximate dates)
const ramadanData = [
  { day: 1, date: "Mar 11", suhoor: "4:32 AM", iftar: "6:45 PM", gregorianDate: "March 11, 2024" },
  { day: 2, date: "Mar 12", suhoor: "4:31 AM", iftar: "6:46 PM", gregorianDate: "March 12, 2024" },
  { day: 3, date: "Mar 13", suhoor: "4:30 AM", iftar: "6:47 PM", gregorianDate: "March 13, 2024" },
  { day: 4, date: "Mar 14", suhoor: "4:29 AM", iftar: "6:48 PM", gregorianDate: "March 14, 2024" },
  { day: 5, date: "Mar 15", suhoor: "4:28 AM", iftar: "6:49 PM", gregorianDate: "March 15, 2024" },
  { day: 6, date: "Mar 16", suhoor: "4:27 AM", iftar: "6:50 PM", gregorianDate: "March 16, 2024" },
  { day: 7, date: "Mar 17", suhoor: "4:26 AM", iftar: "6:51 PM", gregorianDate: "March 17, 2024" },
  { day: 8, date: "Mar 18", suhoor: "4:25 AM", iftar: "6:52 PM", gregorianDate: "March 18, 2024" },
  { day: 9, date: "Mar 19", suhoor: "4:24 AM", iftar: "6:53 PM", gregorianDate: "March 19, 2024" },
  { day: 10, date: "Mar 20", suhoor: "4:23 AM", iftar: "6:54 PM", gregorianDate: "March 20, 2024" },
  { day: 11, date: "Mar 21", suhoor: "4:22 AM", iftar: "6:55 PM", gregorianDate: "March 21, 2024" },
  { day: 12, date: "Mar 22", suhoor: "4:21 AM", iftar: "6:56 PM", gregorianDate: "March 22, 2024" },
  { day: 13, date: "Mar 23", suhoor: "4:20 AM", iftar: "6:57 PM", gregorianDate: "March 23, 2024" },
  { day: 14, date: "Mar 24", suhoor: "4:19 AM", iftar: "6:58 PM", gregorianDate: "March 24, 2024" },
  { day: 15, date: "Mar 25", suhoor: "4:18 AM", iftar: "6:59 PM", gregorianDate: "March 25, 2024" },
  { day: 16, date: "Mar 26", suhoor: "4:17 AM", iftar: "7:00 PM", gregorianDate: "March 26, 2024" },
  { day: 17, date: "Mar 27", suhoor: "4:16 AM", iftar: "7:01 PM", gregorianDate: "March 27, 2024" },
  { day: 18, date: "Mar 28", suhoor: "4:15 AM", iftar: "7:02 PM", gregorianDate: "March 28, 2024" },
  { day: 19, date: "Mar 29", suhoor: "4:14 AM", iftar: "7:03 PM", gregorianDate: "March 29, 2024" },
  { day: 20, date: "Mar 30", suhoor: "4:13 AM", iftar: "7:04 PM", gregorianDate: "March 30, 2024" },
  { day: 21, date: "Mar 31", suhoor: "4:12 AM", iftar: "7:05 PM", gregorianDate: "March 31, 2024" },
  { day: 22, date: "Apr 1", suhoor: "4:11 AM", iftar: "7:06 PM", gregorianDate: "April 1, 2024" },
  { day: 23, date: "Apr 2", suhoor: "4:10 AM", iftar: "7:07 PM", gregorianDate: "April 2, 2024" },
  { day: 24, date: "Apr 3", suhoor: "4:09 AM", iftar: "7:08 PM", gregorianDate: "April 3, 2024" },
  { day: 25, date: "Apr 4", suhoor: "4:08 AM", iftar: "7:09 PM", gregorianDate: "April 4, 2024" },
  { day: 26, date: "Apr 5", suhoor: "4:07 AM", iftar: "7:10 PM", gregorianDate: "April 5, 2024" },
  { day: 27, date: "Apr 6", suhoor: "4:06 AM", iftar: "7:11 PM", gregorianDate: "April 6, 2024" },
  { day: 28, date: "Apr 7", suhoor: "4:05 AM", iftar: "7:12 PM", gregorianDate: "April 7, 2024" },
  { day: 29, date: "Apr 8", suhoor: "4:04 AM", iftar: "7:13 PM", gregorianDate: "April 8, 2024" },
  { day: 30, date: "Apr 9", suhoor: "4:03 AM", iftar: "7:14 PM", gregorianDate: "April 9, 2024" },
]

export default function RamadanCalendar() {
  const [page, setPage] = useState(0)
  const itemsPerPage = 7
  const totalPages = Math.ceil(ramadanData.length / itemsPerPage)

  const paginatedData = ramadanData.slice(page * itemsPerPage, (page + 1) * itemsPerPage)

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1)
    }
  }

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#1a1f36] text-white">
                <TableHead className="text-center font-medium text-white">Day</TableHead>
                <TableHead className="text-center font-medium text-white">Date</TableHead>
                <TableHead className="text-center font-medium text-white">Suhoor Ends</TableHead>
                <TableHead className="text-center font-medium text-white">Iftar Begins</TableHead>
                <TableHead className="text-center font-medium text-white">Gregorian Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((day) => (
                <TableRow key={day.day} className="hover:bg-gray-50">
                  <TableCell className="text-center font-medium">{day.day}</TableCell>
                  <TableCell className="text-center">{day.date}</TableCell>
                  <TableCell className="text-center">{day.suhoor}</TableCell>
                  <TableCell className="text-center">{day.iftar}</TableCell>
                  <TableCell className="text-center">{day.gregorianDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between border-t p-4">
          <Button variant="outline" size="sm" onClick={prevPage} disabled={page === 0} className="gap-1">
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <span className="text-sm text-gray-500">
            Page {page + 1} of {totalPages}
          </span>
          <Button variant="outline" size="sm" onClick={nextPage} disabled={page === totalPages - 1} className="gap-1">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}


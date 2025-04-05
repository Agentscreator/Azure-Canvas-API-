"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { BottomNav } from "@/components/bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { AvailabilityChart } from "@/components/availability-chart"
import { BookingForm } from "@/components/booking-form"
import { format } from "date-fns"
import { Wifi, Power, Coffee, Printer, Monitor, Tv } from "lucide-react"

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [location, setLocation] = useState("lib")

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-6 pb-20">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Schedule</h1>
          <p className="text-muted-foreground">View availability and book study spaces</p>
        </div>

        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Date</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lib">Library (LIB)</SelectItem>
                    <SelectItem value="enb">Engineering II (ENB)</SelectItem>
                    <SelectItem value="bsn">Business (BSN)</SelectItem>
                    <SelectItem value="mdn">College of Nursing (MDN)</SelectItem>
                    <SelectItem value="msc">Marshall Student Center (MSC)</SelectItem>
                  </SelectContent>
                </Select>

                <div>
                  <h3 className="mb-2 text-sm font-medium">Quick Filters</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                      Individual
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                      Group Rooms
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                      Quiet Zone
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                      Computers
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Library (LIB)</CardTitle>
                    <CardDescription>4101 USF Apple Drive, Tampa, FL 33620</CardDescription>
                  </div>
                  <Badge className="bg-green-500 hover:bg-green-600">High Availability</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="mb-4 font-medium">
                  Current Availability for {date ? format(date, "MMMM d, yyyy") : "Today"}
                </h3>

                <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="text-sm text-muted-foreground">Individual</div>
                      <div className="text-lg font-semibold text-green-600 dark:text-green-400">15/20</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="text-sm text-muted-foreground">Group Rooms</div>
                      <div className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">4/8</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="text-sm text-muted-foreground">Quiet Zone</div>
                      <div className="text-lg font-semibold text-green-600 dark:text-green-400">5/5</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="text-sm text-muted-foreground">Computers</div>
                      <div className="text-lg font-semibold text-red-600 dark:text-red-400">0/12</div>
                    </CardContent>
                  </Card>
                </div>

                <Tabs defaultValue="forecast">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="forecast">Availability Forecast</TabsTrigger>
                    <TabsTrigger value="booking">Book a Room</TabsTrigger>
                  </TabsList>
                  <TabsContent value="forecast" className="mt-4">
                    <AvailabilityChart />
                  </TabsContent>
                  <TabsContent value="booking" className="mt-4">
                    <BookingForm />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {amenities.map((amenity) => (
                    <div key={amenity.name} className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-usf-green/10">
                        {amenity.icon}
                      </div>
                      <span className="text-sm">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

const amenities = [
  { name: "Free Wi-Fi", icon: <Wifi className="h-4 w-4 text-usf-green" /> },
  { name: "Power Outlets", icon: <Power className="h-4 w-4 text-usf-green" /> },
  { name: "Café Nearby", icon: <Coffee className="h-4 w-4 text-usf-green" /> },
  { name: "Printing Services", icon: <Printer className="h-4 w-4 text-usf-green" /> },
  { name: "Computer Stations", icon: <Monitor className="h-4 w-4 text-usf-green" /> },
  { name: "Display Screens", icon: <Tv className="h-4 w-4 text-usf-green" /> },
]


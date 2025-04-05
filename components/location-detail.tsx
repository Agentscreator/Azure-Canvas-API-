"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Wifi, Power, Coffee, Printer, Monitor, Tv } from "lucide-react"

export function LocationDetail() {
  const [isVisible, setIsVisible] = useState(false)

  // Add a data attribute to make it easier to find this component
  return (
    <Card
      className="mb-8 overflow-hidden transition-all duration-300"
      style={{ display: isVisible ? "block" : "none" }}
      data-location-detail
    >
      <CardHeader className="flex flex-row items-start justify-between p-5">
        <div>
          <h2 className="text-2xl font-bold">Library (LIB)</h2>
          <p className="text-muted-foreground">4101 USF Apple Drive, Tampa, FL 33620</p>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsVisible(false)}>
          <X className="h-5 w-5" />
        </Button>
      </CardHeader>

      <CardContent className="p-5 pt-0">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Left column - Availability info */}
          <div className="md:w-1/2">
            <div className="mb-5">
              <h3 className="mb-2 font-medium text-foreground">Current Availability</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-muted p-3">
                  <div className="text-sm text-muted-foreground">Individual</div>
                  <div className="text-lg font-semibold text-green-600 dark:text-green-400">15/20</div>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <div className="text-sm text-muted-foreground">Group Rooms</div>
                  <div className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">4/8</div>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <div className="text-sm text-muted-foreground">Quiet Zone</div>
                  <div className="text-lg font-semibold text-green-600 dark:text-green-400">5/5</div>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <div className="text-sm text-muted-foreground">Computers</div>
                  <div className="text-lg font-semibold text-red-600 dark:text-red-400">0/12</div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="mb-2 font-medium text-foreground">Availability Forecast</h3>
              <div className="overflow-hidden rounded-lg bg-muted">
                <div className="border-b border-border bg-muted/50 px-4 py-3">
                  <div className="text-sm text-muted-foreground">Today, November 1</div>
                </div>
                <div className="p-4">
                  <div className="mb-2 flex space-x-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="text-sm">High availability (&gt;70%)</div>
                  </div>
                  <div className="mb-2 flex space-x-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-yellow-500"></div>
                    <div className="text-sm">Medium availability (30-70%)</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                    <div className="text-sm">Low availability (&lt;30%)</div>
                  </div>

                  <div className="mt-4 grid grid-cols-6 gap-1">
                    {["8AM", "10AM", "12PM", "2PM", "4PM", "6PM"].map((time, index) => (
                      <div key={time} className="text-center">
                        <div className="mb-1 text-xs text-muted-foreground">{time}</div>
                        <div
                          className={`h-16 rounded ${
                            index === 0 || index === 5
                              ? "bg-green-500"
                              : index === 1 || index === 4
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Booking */}
          <div className="md:w-1/2">
            <div className="mb-5 rounded-lg bg-muted p-4">
              <h3 className="mb-3 font-medium text-foreground">Book a Group Study Room</h3>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Room Type</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option>Small Group Room (2-4 people)</option>
                    <option>Medium Group Room (4-8 people)</option>
                    <option>Large Group Room (8-12 people)</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">Date</label>
                  <input
                    type="date"
                    defaultValue="2023-11-01"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">Available Time Slots</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "9:00 AM",
                      "10:00 AM",
                      "11:00 AM",
                      "12:00 PM",
                      "1:00 PM",
                      "2:00 PM",
                      "3:00 PM",
                      "4:00 PM",
                      "5:00 PM",
                    ].map((time, index) => (
                      <button
                        key={time}
                        disabled={index === 2 || index === 3 || index === 7}
                        className={`rounded-md border py-2 text-center text-sm transition-colors ${
                          index === 2 || index === 3 || index === 7
                            ? "cursor-not-allowed border-muted bg-muted text-muted-foreground"
                            : "border-input bg-background hover:bg-muted/50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">Duration</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option>1 hour</option>
                    <option>2 hours</option>
                    <option>3 hours</option>
                  </select>
                </div>

                <Button className="w-full">Book Room</Button>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-medium text-foreground">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map((amenity) => (
                  <div key={amenity.name} className="flex items-center">
                    <div className="mr-2 flex h-6 w-6 items-center justify-center text-usf-green">{amenity.icon}</div>
                    <span className="text-sm">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const amenities = [
  { name: "Free Wi-Fi", icon: <Wifi className="h-4 w-4" /> },
  { name: "Power Outlets", icon: <Power className="h-4 w-4" /> },
  { name: "Café Nearby", icon: <Coffee className="h-4 w-4" /> },
  { name: "Printing Services", icon: <Printer className="h-4 w-4" /> },
  { name: "Computer Stations", icon: <Monitor className="h-4 w-4" /> },
  { name: "Display Screens", icon: <Tv className="h-4 w-4" /> },
]


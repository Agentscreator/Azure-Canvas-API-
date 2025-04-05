"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function LocationsList() {
  // Add state to track which location detail to show
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

  // Function to handle showing location details
  const handleShowDetails = (locationId: number) => {
    // You would implement logic here to show the location detail
    // For now, we'll just log it
    console.log(`Showing details for location ${locationId}`)
    setSelectedLocation(locationId)

    // Find the LocationDetail component and make it visible
    // This would typically be done through state or context
    const detailElement = document.querySelector("[data-location-detail]")
    if (detailElement) {
      detailElement.style.display = "block"
    }
  }

  return (
    <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {locations.map((location) => (
        <Card
          key={location.id}
          className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-36">
            <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
            <div
              className={`absolute right-3 top-3 rounded-full px-2 py-1 text-xs font-bold text-white ${getAvailabilityColor(location.availabilityPercentage)}`}
            >
              {getAvailabilityText(location.availabilityPercentage)}
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="mb-1 text-lg font-semibold">
              {location.name} ({location.code})
            </h3>
            <p className="mb-3 text-sm text-muted-foreground">{location.address}</p>

            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-medium">Availability</div>
              <div className="h-2.5 w-2/3 rounded-full bg-muted">
                <div
                  className={`h-2.5 rounded-full ${getAvailabilityBarColor(location.availabilityPercentage)}`}
                  style={{ width: `${location.availabilityPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div>
                <span className={`font-semibold ${getAvailabilityTextColor(location.availabilityPercentage)}`}>
                  {location.availableSpaces}/{location.totalSpaces}
                </span>{" "}
                spaces available
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 p-0 text-usf-green dark:text-usf-gold"
                onClick={() => handleShowDetails(location.id)}
              >
                Details
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

const locations = [
  {
    id: 1,
    name: "Library",
    code: "LIB",
    address: "4101 USF Apple Drive",
    availableSpaces: 24,
    totalSpaces: 32,
    availabilityPercentage: 75,
    image: "/placeholder.svg?height=144&width=300",
  },
  {
    id: 2,
    name: "Engineering II",
    code: "ENB",
    address: "3820 USF Alumni Drive",
    availableSpaces: 9,
    totalSpaces: 20,
    availabilityPercentage: 45,
    image: "/placeholder.svg?height=144&width=300",
  },
  {
    id: 3,
    name: "Business",
    code: "BSN",
    address: "12212 USF Genshaft Drive",
    availableSpaces: 3,
    totalSpaces: 25,
    availabilityPercentage: 12,
    image: "/placeholder.svg?height=144&width=300",
  },
  {
    id: 4,
    name: "College of Nursing",
    code: "MDN",
    address: "12912 USF Health Drive",
    availableSpaces: 12,
    totalSpaces: 15,
    availabilityPercentage: 80,
    image: "/placeholder.svg?height=144&width=300",
  },
]

function getAvailabilityColor(percentage: number) {
  if (percentage >= 60) return "bg-green-500"
  if (percentage >= 30) return "bg-yellow-500"
  return "bg-red-500"
}

function getAvailabilityBarColor(percentage: number) {
  if (percentage >= 60) return "bg-green-500"
  if (percentage >= 30) return "bg-yellow-500"
  return "bg-red-500"
}

function getAvailabilityTextColor(percentage: number) {
  if (percentage >= 60) return "text-green-600 dark:text-green-400"
  if (percentage >= 30) return "text-yellow-600 dark:text-yellow-400"
  return "text-red-600 dark:text-red-400"
}

function getAvailabilityText(percentage: number) {
  if (percentage >= 60) return "High Availability"
  if (percentage >= 30) return "Medium Availability"
  return "Low Availability"
}


"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function LocationsList() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const handleShowDetails = (locationId: number) => {
    console.log(`Showing details for location ${locationId}`);
    setSelectedLocation(locationId);
  };

  return (
    <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {locations.map((location) => (
        <Card
          key={location.id}
          className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-36 w-full">
            <Image
              src={location.image}
              alt={location.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
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
  );
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
    image: "https://lh3.googleusercontent.com/p/AF1QipNVELo6-qBtV29rZbx8cvt8GgkI-aYO4F9kYekg=s1360-w1360-h1020",
  },
  {
    id: 2,
    name: "Engineering II",
    code: "ENB",
    address: "3820 USF Alumni Drive",
    availableSpaces: 9,
    totalSpaces: 20,
    availabilityPercentage: 45,
    image: "https://i.redd.it/3n3j0ttqf2751.jpg",
  },
  {
    id: 3,
    name: "Business",
    code: "BSN",
    address: "12212 USF Genshaft Drive",
    availableSpaces: 3,
    totalSpaces: 25,
    availabilityPercentage: 12,
    image: "https://stpetecatalyst.com/wp-content/uploads/2024/08/USFSP-School-of-Business-scaled.jpg", // Direct image URL
  },
  {
    id: 4,
    name: "College of Nursing",
    code: "MDN",
    address: "12912 USF Health Drive",
    availableSpaces: 12,
    totalSpaces: 15,
    availabilityPercentage: 80,
    image: "https://hscweb3.hsc.usf.edu/nursingnews/files/2023/01/Screen-Shot-2023-01-27-at-4.57.12-PM.png",
  },
];

// Utility functions remain unchanged
function getAvailabilityColor(percentage: number) {
  if (percentage >= 60) return "bg-green-500";
  if (percentage >= 30) return "bg-yellow-500";
  return "bg-red-500";
}

function getAvailabilityBarColor(percentage: number) {
  if (percentage >= 60) return "bg-green-500";
  if (percentage >= 30) return "bg-yellow-500";
  return "bg-red-500";
}

function getAvailabilityTextColor(percentage: number) {
  if (percentage >= 60) return "text-green-600 dark:text-green-400";
  if (percentage >= 30) return "text-yellow-600 dark:text-yellow-400";
  return "text-red-600 dark:text-red-400";
}

function getAvailabilityText(percentage: number) {
  if (percentage >= 60) return "High Availability";
  if (percentage >= 30) return "Medium Availability";
  return "Low Availability";
}

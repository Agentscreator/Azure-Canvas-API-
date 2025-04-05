"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ZoomIn, ZoomOut, MapPin } from "lucide-react"

export function CampusMap() {
  const [zoom, setZoom] = useState(1)
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null)

  const handleZoomIn = () => {
    if (zoom < 1.5) setZoom(zoom + 0.1)
  }

  const handleZoomOut = () => {
    if (zoom > 0.8) setZoom(zoom - 0.1)
  }

  return (
    <div className="relative">
      <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
        <Button variant="secondary" size="icon" onClick={handleZoomIn}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={handleZoomOut}>
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>

      <div className="relative h-[600px] overflow-auto rounded-lg border">
        <div
          className="relative h-[1200px] w-[1200px] transform transition-transform duration-300"
          style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
        >
          <Image src="/placeholder.svg?height=1200&width=1200" alt="USF Campus Map" fill className="object-contain" />

          {/* Map pins for study locations */}
          <div className="absolute left-[400px] top-[300px] cursor-pointer" onClick={() => setSelectedBuilding("lib")}>
            <MapPin
              className={`h-8 w-8 ${selectedBuilding === "lib" ? "text-usf-green" : "text-gray-500"}`}
              fill={selectedBuilding === "lib" ? "currentColor" : "none"}
            />
          </div>

          <div className="absolute left-[600px] top-[450px] cursor-pointer" onClick={() => setSelectedBuilding("enb")}>
            <MapPin
              className={`h-8 w-8 ${selectedBuilding === "enb" ? "text-usf-green" : "text-gray-500"}`}
              fill={selectedBuilding === "enb" ? "currentColor" : "none"}
            />
          </div>

          <div className="absolute left-[300px] top-[500px] cursor-pointer" onClick={() => setSelectedBuilding("bsn")}>
            <MapPin
              className={`h-8 w-8 ${selectedBuilding === "bsn" ? "text-usf-green" : "text-gray-500"}`}
              fill={selectedBuilding === "bsn" ? "currentColor" : "none"}
            />
          </div>

          <div className="absolute left-[800px] top-[350px] cursor-pointer" onClick={() => setSelectedBuilding("mdn")}>
            <MapPin
              className={`h-8 w-8 ${selectedBuilding === "mdn" ? "text-usf-green" : "text-gray-500"}`}
              fill={selectedBuilding === "mdn" ? "currentColor" : "none"}
            />
          </div>
        </div>
      </div>

      {selectedBuilding && (
        <Card className="mt-4">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  {selectedBuilding === "lib" && "Library (LIB)"}
                  {selectedBuilding === "enb" && "Engineering II (ENB)"}
                  {selectedBuilding === "bsn" && "Business (BSN)"}
                  {selectedBuilding === "mdn" && "College of Nursing (MDN)"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedBuilding === "lib" && "4101 USF Apple Drive, Tampa, FL 33620"}
                  {selectedBuilding === "enb" && "3820 USF Alumni Drive"}
                  {selectedBuilding === "bsn" && "12212 USF Genshaft Drive"}
                  {selectedBuilding === "mdn" && "12912 USF Health Drive"}
                </p>
              </div>
              <Badge
                className={
                  selectedBuilding === "lib" || selectedBuilding === "mdn"
                    ? "bg-green-500 hover:bg-green-600"
                    : selectedBuilding === "enb"
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-red-500 hover:bg-red-600"
                }
              >
                {selectedBuilding === "lib" || selectedBuilding === "mdn"
                  ? "High Availability"
                  : selectedBuilding === "enb"
                    ? "Medium Availability"
                    : "Low Availability"}
              </Badge>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <div className="rounded-md bg-muted p-2 text-center">
                <div className="text-xs text-muted-foreground">Individual</div>
                <div className="font-medium">
                  {selectedBuilding === "lib" && "15/20"}
                  {selectedBuilding === "enb" && "6/12"}
                  {selectedBuilding === "bsn" && "2/15"}
                  {selectedBuilding === "mdn" && "8/10"}
                </div>
              </div>
              <div className="rounded-md bg-muted p-2 text-center">
                <div className="text-xs text-muted-foreground">Group Rooms</div>
                <div className="font-medium">
                  {selectedBuilding === "lib" && "4/8"}
                  {selectedBuilding === "enb" && "2/5"}
                  {selectedBuilding === "bsn" && "1/6"}
                  {selectedBuilding === "mdn" && "3/3"}
                </div>
              </div>
              <div className="rounded-md bg-muted p-2 text-center">
                <div className="text-xs text-muted-foreground">Quiet Zone</div>
                <div className="font-medium">
                  {selectedBuilding === "lib" && "5/5"}
                  {selectedBuilding === "enb" && "1/3"}
                  {selectedBuilding === "bsn" && "0/4"}
                  {selectedBuilding === "mdn" && "1/2"}
                </div>
              </div>
              <div className="rounded-md bg-muted p-2 text-center">
                <div className="text-xs text-muted-foreground">Computers</div>
                <div className="font-medium">
                  {selectedBuilding === "lib" && "0/12"}
                  {selectedBuilding === "enb" && "3/8"}
                  {selectedBuilding === "bsn" && "0/6"}
                  {selectedBuilding === "mdn" && "4/5"}
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button size="sm">View Details</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Camera, Upload, X, Check, AlertCircle } from "lucide-react"

export function PhotoUploader() {
  const { toast } = useToast()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [location, setLocation] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [prediction, setPrediction] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)

      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setPreview(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)

      // Reset prediction
      setPrediction(null)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile || !location) {
      toast({
        title: "Missing information",
        description: "Please select a location and upload an image",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    try {
      // Simulate the Azure function call
      // In a real app, you would call the actual Azure function
      // const result = await predictOccupancy(selectedFile)

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate random prediction for demo
      const results = ["Empty", "Medium", "Full"]
      const randomPrediction = results[Math.floor(Math.random() * results.length)]

      setPrediction(randomPrediction)

      toast({
        title: "Upload successful",
        description: `The study area is predicted to be: ${randomPrediction}`,
      })
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error processing your image",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const clearSelection = () => {
    setSelectedFile(null)
    setPreview(null)
    setPrediction(null)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Study Area Photo</CardTitle>
          <CardDescription>Take a photo of a study area to help others see its current occupancy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="location">Location</Label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger id="location">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lib">Library (LIB)</SelectItem>
                <SelectItem value="lib-1">Library - 1st Floor</SelectItem>
                <SelectItem value="lib-2">Library - 2nd Floor</SelectItem>
                <SelectItem value="lib-3">Library - 3rd Floor</SelectItem>
                <SelectItem value="lib-4">Library - 4th Floor</SelectItem>
                <SelectItem value="lib-5">Library - 5th Floor</SelectItem>
                <SelectItem value="enb">Engineering II (ENB)</SelectItem>
                <SelectItem value="bsn">Business (BSN)</SelectItem>
                <SelectItem value="mdn">College of Nursing (MDN)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="photo">Photo</Label>
            <div className="mt-2">
              {!preview ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-6 dark:border-gray-600">
                  <Camera className="mb-2 h-8 w-8 text-muted-foreground" />
                  <div className="space-y-1 text-center">
                    <p className="text-sm text-muted-foreground">Upload a photo of the study area</p>
                    <div className="flex justify-center">
                      <Label
                        htmlFor="file-upload"
                        className="cursor-pointer rounded-md bg-usf-green px-3 py-2 text-sm font-semibold text-white hover:bg-usf-green/90"
                      >
                        <span>Select photo</span>
                        <Input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </Label>
                    </div>
                    <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              ) : (
                <div className="relative rounded-lg border border-gray-200 dark:border-gray-700">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8 rounded-full bg-gray-900/50 text-white hover:bg-gray-900/70"
                    onClick={clearSelection}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <img
                    src={preview || "/placeholder.svg"}
                    alt="Preview"
                    className="mx-auto max-h-[300px] rounded-lg object-contain"
                  />
                  {prediction && (
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-2 text-center text-white ${
                        prediction === "Empty"
                          ? "bg-green-500"
                          : prediction === "Medium"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1 text-sm font-medium">
                        {prediction === "Empty" ? (
                          <Check className="h-4 w-4" />
                        ) : prediction === "Full" ? (
                          <AlertCircle className="h-4 w-4" />
                        ) : null}
                        {prediction}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full gap-2" onClick={handleUpload} disabled={!selectedFile || !location || isUploading}>
            {isUploading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                Processing...
              </>
            ) : (
              <>
                <Upload className="h-4 w-4" />
                Upload Photo
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>Your recently uploaded study area photos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {recentUploads.map((upload) => (
              <div key={upload.id} className="overflow-hidden rounded-lg border">
                <div className="relative aspect-video">
                  <img
                    src={upload.image || "/placeholder.svg"}
                    alt={upload.location}
                    className="h-full w-full object-cover"
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-1 text-center text-xs font-medium text-white ${
                      upload.status === "Empty"
                        ? "bg-green-500"
                        : upload.status === "Medium"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                  >
                    {upload.status}
                  </div>
                </div>
                <div className="p-2">
                  <div className="text-sm font-medium">{upload.location}</div>
                  <div className="text-xs text-muted-foreground">{upload.date}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const recentUploads = [
  {
    id: 1,
    location: "Library - 1st Floor",
    status: "Medium",
    date: "Today, 2:30 PM",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 2,
    location: "Engineering II - Lobby",
    status: "Empty",
    date: "Today, 10:15 AM",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 3,
    location: "Business - Study Room 3",
    status: "Full",
    date: "Yesterday, 4:45 PM",
    image: "/placeholder.svg?height=120&width=200",
  },
]


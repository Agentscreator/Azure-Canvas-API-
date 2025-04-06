"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Camera, Upload, X, Check, AlertCircle } from "lucide-react";

export function PhotoUploader() {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [location, setLocation] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);

      setPrediction(null); // Reset prediction on new file selection
    }
  };

  const predictOccupancy = async (imageFile: File) => {
    const predictionKey = "55e3fad970d743ce9cd4cf8bf3f24a4f";
    const endpoint = "https://southcentralus.api.cognitive.microsoft.com/";
    const projectId = "3858b3b0-e70f-4d55-b09b-d06cfa3872a5";
    const iterationName = "josh_study_density"; // Ensure this matches your Custom Vision iteration

    const url = `${endpoint}/customvision/v3.0/Prediction/${projectId}/classify/iterations/${iterationName}/image`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Prediction-Key": predictionKey,
          "Content-Type": "application/octet-stream",
        },
        body: imageFile,
      });

      if (!response.ok) {
        throw new Error("API call failed: " + response.statusText);
      }

      const result = await response.json();
      console.log("Prediction Result:", result);

      // Find the most confident prediction among relevant tags
      const relevantTags = ["Empty", "Medium", "Full"];
      const prediction = result.predictions
        .filter((p: any) => relevantTags.includes(p.tagName))
        .sort((a: any, b: any) => b.probability - a.probability)[0];

      if (prediction) {
        return prediction.tagName;
      } else {
        throw new Error("No relevant prediction found");
      }
    } catch (error) {
      console.error("Prediction error:", error);
      throw error;
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !location) {
      toast({
        title: "Missing information",
        description: "Please select a location and upload an image",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      const result = await predictOccupancy(selectedFile);
      setPrediction(result);

      toast({
        title: "Upload successful",
        description: `The study area is predicted to be: ${result}`,
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error processing your image",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreview(null);
    setPrediction(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Study Area Photo</CardTitle>
          <CardDescription>
            Take a photo of a study area to help others see its current occupancy
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Location Selector */}
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

          {/* Photo Upload Area */}
          <div className="space-y-1">
            <Label htmlFor="photo">Photo</Label>
            <div className="mt-2">
              {!preview ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-6 dark:border-gray-600">
                  <Camera className="mb-2 h-8 w-8 text-muted-foreground" />
                  <div className="space-y-1 text-center">
                    <p className="text-sm text-muted-foreground">
                      Upload a photo of the study area
                    </p>
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
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG, GIF up to 10MB
                    </p>
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
          <Button
            className="w-full gap-2"
            onClick={handleUpload}
            disabled={!selectedFile || !location || isUploading}
          >
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
    </div>
  );
}

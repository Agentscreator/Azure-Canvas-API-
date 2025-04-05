/**
 * Predicts the occupancy level of a study area based on an image
 * @param imageFile The image file to analyze (Blob or File object)
 * @returns Promise<string> The predicted occupancy level: "Empty", "Medium", or "Full"
 */
export async function predictOccupancy(imageFile: Blob | File): Promise<string> {
  const predictionKey = "55e3fad970d743ce9cd4cf8bf3f24a4f" // Use your prediction key
  const endpoint = "https://southcentralus.api.cognitive.microsoft.com/"
  const projectId = "3858b3b0-e70f-4d55-b09b-d06cfa3872a5" // Your Project ID
  const iterationName = "v1" // Name of your iteration (e.g., "v1")

  const url = `${endpoint}/customvision/v3.0/Prediction/${projectId}/classify/iterations/${iterationName}/image`

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Prediction-Key": predictionKey,
        "Content-Type": "application/octet-stream",
      },
      body: imageFile, // the image file (Blob or File object)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const result = await response.json()
    console.log("Prediction Result:", result)

    // Return the predicted tag (Empty, Medium, Full)
    return result.predictions[0].tagName // returns "Empty", "Medium", or "Full"
  } catch (error) {
    console.error("Error predicting occupancy:", error)
    throw error
  }
}


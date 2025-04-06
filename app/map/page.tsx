import { Navbar } from "@/components/navbar"
import { BottomNav } from "@/components/bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-6 pb-20">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Campus Map</h1>
          <p className="text-muted-foreground">Find study spaces across campus</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>USF Tampa Campus</CardTitle>
            <CardDescription>Navigate the campus to find your ideal study location</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="map" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
                <TabsTrigger value="map">Map View</TabsTrigger>
                <TabsTrigger value="list">Building List</TabsTrigger>
              </TabsList>
              <TabsContent value="map" className="mt-6">
                <CampusMap />
              </TabsContent>
              <TabsContent value="list" className="mt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {buildingsList.map((building) => (
                    <Card key={building.code} className="overflow-hidden">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">
                          {building.name} ({building.code})
                        </CardTitle>
                        <CardDescription className="text-xs">{building.address}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex justify-between text-sm">
                          <span>Study Spaces:</span>
                          <span className="font-medium">{building.spaces}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      <BottomNav />
    </div>
  )
}

const buildingsList = [
  {
    name: "Library",
    code: "LIB",
    address: "4101 USF Apple Drive, Tampa, FL 33620",
    spaces: 32,
  },
  {
    name: "Engineering II",
    code: "ENB",
    address: "3820 USF Alumni Drive",
    spaces: 20,
  },
  {
    name: "Business",
    code: "BSN",
    address: "12212 USF Genshaft Drive",
    spaces: 25,
  },
  {
    name: "College of Nursing",
    code: "MDN",
    address: "12912 USF Health Drive",
    spaces: 15,
  },
  {
    name: "Marshall Student Center",
    code: "MSC",
    address: "4103 USF Cedar Drive",
    spaces: 40,
  },
  {
    name: "Interdisciplinary Sciences",
    code: "ISA",
    address: "4202 E Fowler Ave",
    spaces: 18,
  },
]

// CampusMap Component
const CampusMap = () => {
  return (
    <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
      <iframe
        src="https://docs.google.com/viewer?url=https://www.usf.edu/administrative-services/parking/documents/campus-map-directory.pdf&embedded=true"
        width="100%"
        height="100%"
        title="USF Campus Map"
      ></iframe>
    </div>
  );
};

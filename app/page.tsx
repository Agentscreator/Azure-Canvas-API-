import { Navbar } from "@/components/navbar"
import { BottomNav } from "@/components/bottom-nav"
import { DashboardStats } from "@/components/dashboard-stats"
import { FilterSection } from "@/components/filter-section"
import { LocationsList } from "@/components/locations-list"
import { LocationDetail } from "@/components/location-detail"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-6 pb-20">
        <DashboardStats />
        <FilterSection />
        <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-800 dark:text-white">
          <span className="mr-2 inline-block h-3 w-3 animate-pulse rounded-full bg-usf-green"></span>
          Live Availability
        </h2>
        <LocationsList />
        <LocationDetail />
      </main>
      <BottomNav />
    </div>
  )
}


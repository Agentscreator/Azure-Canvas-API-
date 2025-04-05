import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, CalendarCheck } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="overflow-hidden">
        <CardContent className="p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Available Now</p>
              <h2 className="mt-1 text-3xl font-bold text-usf-green dark:text-usf-gold">42 Spaces</h2>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <Check className="h-5 w-5 text-green-500" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm text-muted-foreground">Most Available at</div>
            <div className="font-medium">Library (24 spaces)</div>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardContent className="p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Recommended Time</p>
              <h2 className="mt-1 text-3xl font-bold text-blue-600 dark:text-blue-400">2:00 PM</h2>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <Clock className="h-5 w-5 text-blue-500" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm text-muted-foreground">Based on your schedule</div>
            <div className="font-medium">Between CSE101 and ENG202</div>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardContent className="p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Your Upcoming Booking</p>
              <h2 className="mt-1 text-3xl font-bold text-purple-600 dark:text-purple-400">4:30 PM</h2>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
              <CalendarCheck className="h-5 w-5 text-purple-500" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm text-muted-foreground">Group Study Room</div>
            <div className="font-medium">ENB 234 - Room 12</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


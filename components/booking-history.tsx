import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, X } from "lucide-react"

export function BookingHistory() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Bookings</CardTitle>
          <CardDescription>Your scheduled study space reservations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex flex-col rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="mb-4 sm:mb-0">
                  <div className="mb-1 flex items-center">
                    <h3 className="font-medium">{booking.room}</h3>
                    <Badge
                      variant="outline"
                      className="ml-2 bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400"
                    >
                      Confirmed
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{booking.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{booking.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      <span>{booking.people}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Modify
                  </Button>
                  <Button variant="destructive" size="sm">
                    <X className="mr-1 h-3.5 w-3.5" />
                    Cancel
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Past Bookings</CardTitle>
          <CardDescription>Your previous study space reservations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pastBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex flex-col rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="mb-4 sm:mb-0">
                  <div className="mb-1 flex items-center">
                    <h3 className="font-medium">{booking.room}</h3>
                    <Badge
                      variant="outline"
                      className={`ml-2 ${
                        booking.status === "Completed"
                          ? "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                          : "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400"
                      }`}
                    >
                      {booking.status}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{booking.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{booking.time}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    Book Again
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const upcomingBookings = [
  {
    id: 1,
    room: "Group Study Room 12",
    location: "ENB 234",
    date: "Today, November 1, 2023",
    time: "4:30 PM - 5:30 PM",
    people: "4 people",
    status: "Confirmed",
  },
  {
    id: 2,
    room: "Quiet Zone Desk 5",
    location: "Library - 4th Floor",
    date: "Tomorrow, November 2, 2023",
    time: "10:00 AM - 12:00 PM",
    people: "1 person",
    status: "Confirmed",
  },
]

const pastBookings = [
  {
    id: 1,
    room: "Group Study Room 8",
    location: "Library - 3rd Floor",
    date: "October 28, 2023",
    time: "2:00 PM - 4:00 PM",
    status: "Completed",
  },
  {
    id: 2,
    room: "Computer Lab Station 3",
    location: "ENB 120",
    date: "October 25, 2023",
    time: "11:00 AM - 1:00 PM",
    status: "Completed",
  },
  {
    id: 3,
    room: "Group Study Room 4",
    location: "Business Building",
    date: "October 20, 2023",
    time: "3:00 PM - 5:00 PM",
    status: "Cancelled",
  },
]


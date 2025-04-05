"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Calendar, Clock, Users } from "lucide-react"

export function BookingForm() {
  const { toast } = useToast()
  const [roomType, setRoomType] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [duration, setDuration] = useState("")

  const handleBooking = () => {
    if (!roomType || !time || !duration) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Booking confirmed!",
      description: `You've booked a ${roomType} for ${date || "today"} at ${time} for ${duration}`,
    })
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="room-type">Room Type</Label>
        <Select value={roomType} onValueChange={setRoomType}>
          <SelectTrigger id="room-type" className="w-full">
            <SelectValue placeholder="Select room type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small Group Room (2-4 people)</SelectItem>
            <SelectItem value="medium">Medium Group Room (4-8 people)</SelectItem>
            <SelectItem value="large">Large Group Room (8-12 people)</SelectItem>
            <SelectItem value="quiet">Quiet Zone Desk</SelectItem>
            <SelectItem value="computer">Computer Station</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Select value={date} onValueChange={setDate}>
          <SelectTrigger id="date" className="w-full">
            <SelectValue placeholder="Select date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today (November 1, 2023)</SelectItem>
            <SelectItem value="tomorrow">Tomorrow (November 2, 2023)</SelectItem>
            <SelectItem value="day-after">November 3, 2023</SelectItem>
            <SelectItem value="custom">Custom Date</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Available Time Slots</Label>
        <div className="grid grid-cols-3 gap-2">
          {availableTimeSlots.map((slot) => (
            <Button
              key={slot.value}
              variant={time === slot.value ? "default" : "outline"}
              className={slot.available ? "" : "cursor-not-allowed opacity-50"}
              disabled={!slot.available}
              onClick={() => setTime(slot.value)}
            >
              {slot.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="duration">Duration</Label>
        <Select value={duration} onValueChange={setDuration}>
          <SelectTrigger id="duration" className="w-full">
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1hour">1 hour</SelectItem>
            <SelectItem value="2hours">2 hours</SelectItem>
            <SelectItem value="3hours">3 hours</SelectItem>
            <SelectItem value="4hours">4 hours</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg bg-muted p-4">
        <h4 className="mb-2 text-sm font-medium">Booking Summary</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{roomType ? getRoomTypeLabel(roomType) : "Select a room type"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{date ? getDateLabel(date) : "Today (November 1, 2023)"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{time ? getTimeLabel(time) : "Select a time slot"}</span>
            {duration && <span>for {getDurationLabel(duration)}</span>}
          </div>
        </div>
      </div>

      <Button className="w-full" onClick={handleBooking}>
        Book Room
      </Button>
    </div>
  )
}

const availableTimeSlots = [
  { label: "9:00 AM", value: "9am", available: true },
  { label: "10:00 AM", value: "10am", available: true },
  { label: "11:00 AM", value: "11am", available: false },
  { label: "12:00 PM", value: "12pm", available: false },
  { label: "1:00 PM", value: "1pm", available: true },
  { label: "2:00 PM", value: "2pm", available: true },
  { label: "3:00 PM", value: "3pm", available: true },
  { label: "4:00 PM", value: "4pm", available: false },
  { label: "5:00 PM", value: "5pm", available: true },
]

function getRoomTypeLabel(value: string) {
  switch (value) {
    case "small":
      return "Small Group Room (2-4 people)"
    case "medium":
      return "Medium Group Room (4-8 people)"
    case "large":
      return "Large Group Room (8-12 people)"
    case "quiet":
      return "Quiet Zone Desk"
    case "computer":
      return "Computer Station"
    default:
      return "Select a room type"
  }
}

function getDateLabel(value: string) {
  switch (value) {
    case "today":
      return "Today (November 1, 2023)"
    case "tomorrow":
      return "Tomorrow (November 2, 2023)"
    case "day-after":
      return "November 3, 2023"
    case "custom":
      return "Custom Date"
    default:
      return "Today (November 1, 2023)"
  }
}

function getTimeLabel(value: string) {
  const slot = availableTimeSlots.find((slot) => slot.value === value)
  return slot ? slot.label : "Select a time slot"
}

function getDurationLabel(value: string) {
  switch (value) {
    case "1hour":
      return "1 hour"
    case "2hours":
      return "2 hours"
    case "3hours":
      return "3 hours"
    case "4hours":
      return "4 hours"
    default:
      return "Select duration"
  }
}


"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function AvailabilityChart() {
  const hourlyData = [
    { time: "8AM", percentage: 85 },
    { time: "9AM", percentage: 65 },
    { time: "10AM", percentage: 45 },
    { time: "11AM", percentage: 30 },
    { time: "12PM", percentage: 20 },
    { time: "1PM", percentage: 15 },
    { time: "2PM", percentage: 25 },
    { time: "3PM", percentage: 35 },
    { time: "4PM", percentage: 55 },
    { time: "5PM", percentage: 70 },
    { time: "6PM", percentage: 80 },
    { time: "7PM", percentage: 90 },
  ]

  const weeklyData = [
    { day: "Mon", percentage: 45 },
    { day: "Tue", percentage: 55 },
    { day: "Wed", percentage: 25 },
    { day: "Thu", percentage: 65 },
    { day: "Fri", percentage: 75 },
    { day: "Sat", percentage: 90 },
    { day: "Sun", percentage: 85 },
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-muted p-4">
        <h3 className="mb-4 text-sm font-medium">Today, November 1</h3>

        <div className="mb-4 flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-xs">High availability (&gt;70%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <span className="text-xs">Medium availability (30-70%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <span className="text-xs">Low availability (&lt;30%)</span>
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" />
              <YAxis hide />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <p className="text-sm font-medium">{data.time}</p>
                        <p className="text-xs text-muted-foreground">{data.percentage}% Available</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar
                dataKey="percentage"
                fill="currentColor"
                className="fill-current text-green-500 data-[percentage<70]:text-yellow-500 data-[percentage<30]:text-red-500"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-lg bg-muted p-4">
        <h3 className="mb-4 text-sm font-medium">Weekly Trends</h3>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis hide />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <p className="text-sm font-medium">{data.day}</p>
                        <p className="text-xs text-muted-foreground">{data.percentage}% Available</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar
                dataKey="percentage"
                fill="currentColor"
                className="fill-current text-green-500 data-[percentage<70]:text-yellow-500 data-[percentage<30]:text-red-500"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { BottomNav } from "@/components/bottom-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { PhotoUploader } from "@/components/photo-uploader"
import { BookingHistory } from "@/components/booking-history"
import { UserSettings } from "@/components/user-settings"
import { Shield, Calendar, Clock, MapPin, BookOpen } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-6 pb-20">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Profile</h1>
          <p className="text-muted-foreground">Manage your account and settings</p>
        </div>

        <div className="grid gap-6 md:grid-cols-[250px_1fr]">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Joshua Brown" />
                  <AvatarFallback className="bg-usf-green text-white text-xl">JB</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h2 className="text-xl font-semibold">Joshua Brown</h2>
                  <p className="text-sm text-muted-foreground">U12345678</p>
                  <div className="flex justify-center pt-1">
                    <Badge className="bg-usf-green hover:bg-usf-green/80">
                      <Shield className="mr-1 h-3 w-3" /> Admin
                    </Badge>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>Computer Science</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Senior Year</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Joined Aug 2021</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Tampa Campus</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="uploads">Photo Uploads</TabsTrigger>
                <TabsTrigger value="bookings">Booking History</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="mt-6">
                <UserSettings />
              </TabsContent>
              <TabsContent value="uploads" className="mt-6">
                <PhotoUploader />
              </TabsContent>
              <TabsContent value="bookings" className="mt-6">
                <BookingHistory />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}


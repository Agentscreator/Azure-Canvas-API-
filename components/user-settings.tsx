import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function UserSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Joshua" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Brown" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="joshua.brown@usf.edu" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="(813) 555-1234" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="major">Major</Label>
            <Select defaultValue="cs">
              <SelectTrigger id="major">
                <SelectValue placeholder="Select major" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="ce">Computer Engineering</SelectItem>
                <SelectItem value="ee">Electrical Engineering</SelectItem>
                <SelectItem value="me">Mechanical Engineering</SelectItem>
                <SelectItem value="business">Business Administration</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Configure how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="booking-notifications">Booking Confirmations</Label>
              <p className="text-sm text-muted-foreground">Receive notifications about your booking confirmations</p>
            </div>
            <Switch id="booking-notifications" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="reminder-notifications">Booking Reminders</Label>
              <p className="text-sm text-muted-foreground">Receive reminders before your scheduled bookings</p>
            </div>
            <Switch id="reminder-notifications" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="availability-notifications">Availability Alerts</Label>
              <p className="text-sm text-muted-foreground">Get notified when your favorite spaces become available</p>
            </div>
            <Switch id="availability-notifications" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="marketing-notifications">Marketing & Updates</Label>
              <p className="text-sm text-muted-foreground">Receive updates about new features and campus events</p>
            </div>
            <Switch id="marketing-notifications" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Admin Settings</CardTitle>
          <CardDescription>Special settings for administrators</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="manage-locations">Manage Locations</Label>
              <p className="text-sm text-muted-foreground">Add, edit, or remove study locations</p>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="manage-users">Manage Users</Label>
              <p className="text-sm text-muted-foreground">View and modify user permissions</p>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="view-analytics">Analytics Dashboard</Label>
              <p className="text-sm text-muted-foreground">View usage statistics and reports</p>
            </div>
            <Button variant="outline" size="sm">
              View
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


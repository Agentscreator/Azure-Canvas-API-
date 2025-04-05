import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function FilterSection() {
  return (
    <Card className="mb-8 overflow-hidden">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0">
          <div className="flex-1 space-y-1">
            <Label htmlFor="location">Location</Label>
            <Select defaultValue="all">
              <SelectTrigger id="location">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="lib">Library</SelectItem>
                <SelectItem value="enb">Engineering II</SelectItem>
                <SelectItem value="bsn">Business</SelectItem>
                <SelectItem value="mdn">College of Nursing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 space-y-1">
            <Label htmlFor="type">Study Space Type</Label>
            <Select defaultValue="all">
              <SelectTrigger id="type">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="individual">Individual</SelectItem>
                <SelectItem value="group">Group Room</SelectItem>
                <SelectItem value="quiet">Quiet Zone</SelectItem>
                <SelectItem value="computer">Computer Lab</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 space-y-1">
            <Label htmlFor="date">Date</Label>
            <Select defaultValue="today">
              <SelectTrigger id="date">
                <SelectValue placeholder="Today" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Find Spaces
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { format } from "date-fns"
import { CalendarIcon, Clock, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

// Sample team data
const teams = [
  { id: 1, name: "Team Goku", color: "orange", members: 7 },
  { id: 2, name: "Team Vegeta", color: "blue", members: 5 },
  { id: 3, name: "Team Piccolo", color: "green", members: 4 },
  { id: 4, name: "Team Gohan", color: "purple", members: 6 },
]

export default function TeamEventCreation() {
  const [date, setDate] = useState<Date>()
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Create a Team Event</CardTitle>
          <CardDescription>Set up a new event for your team or challenge another team</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Event Title</label>
              <Input placeholder="Enter event title" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea placeholder="Describe your event..." className="min-h-[100px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indoor-challenge">Indoor Challenge</SelectItem>
                    <SelectItem value="outdoor-challenge">Outdoor Challenge</SelectItem>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                    <SelectItem value="exploration">Exploration</SelectItem>
                    <SelectItem value="hangout">Team Hangout</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Event Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="puzzle">Speed Puzzle Solving</SelectItem>
                    <SelectItem value="trivia">Trivia Night</SelectItem>
                    <SelectItem value="escape">Escape Room</SelectItem>
                    <SelectItem value="craft">DIY Craft Challenge</SelectItem>
                    <SelectItem value="treasure">Treasure Hunt</SelectItem>
                    <SelectItem value="volleyball">Volleyball</SelectItem>
                    <SelectItem value="soccer">Soccer</SelectItem>
                    <SelectItem value="movie">Movie Night</SelectItem>
                    <SelectItem value="boardgame">Boardgame Night</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Time</label>
                <div className="flex items-center border rounded-md">
                  <Clock className="ml-3 h-4 w-4 text-muted-foreground" />
                  <Input type="time" className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <div className="flex items-center border rounded-md">
                <MapPin className="ml-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Enter location"
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3">
          <Button className="w-full sm:w-auto">Save Event</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                Challenge a Team
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Challenge Another Team</DialogTitle>
                <DialogDescription>Select a team to challenge for this event</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {teams.map((team) => (
                  <div
                    key={team.id}
                    className={cn(
                      "flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-accent",
                      selectedTeam === team.name ? "border-primary" : "",
                    )}
                    onClick={() => setSelectedTeam(team.name)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full" style={{ backgroundColor: team.color }}></div>
                      <div>
                        <p className="font-medium">{team.name}</p>
                        <p className="text-sm text-muted-foreground">{team.members} members</p>
                      </div>
                    </div>
                    <Badge variant="outline">Select</Badge>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button type="submit" disabled={!selectedTeam}>
                  Send Challenge
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pending Team Interactions</CardTitle>
          <CardDescription>Manage challenges and collaboration requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    TV
                  </div>
                  <div>
                    <h4 className="font-semibold">Team Vegeta</h4>
                    <p className="text-sm text-muted-foreground">Challenged you to a Trivia Night</p>
                  </div>
                </div>
                <Badge>Challenge</Badge>
              </div>
              <p className="mt-3 text-sm">
                We challenge your team to a trivia battle this Friday at 7 PM. Are you up for it?
              </p>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="default">
                  Accept Challenge
                </Button>
                <Button size="sm" variant="outline">
                  Decline
                </Button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                    TP
                  </div>
                  <div>
                    <h4 className="font-semibold">Team Piccolo</h4>
                    <p className="text-sm text-muted-foreground">Wants to collaborate on a Volunteer Event</p>
                  </div>
                </div>
                <Badge variant="outline">Collaboration</Badge>
              </div>
              <p className="mt-3 text-sm">
                We're organizing a beach cleanup this Sunday. Would your team like to join forces?
              </p>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="default">
                  Accept Collaboration
                </Button>
                <Button size="sm" variant="outline">
                  Decline
                </Button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                    TG
                  </div>
                  <div>
                    <h4 className="font-semibold">Team Gohan</h4>
                    <p className="text-sm text-muted-foreground">Invited you to a Team Hangout</p>
                  </div>
                </div>
                <Badge variant="secondary">Hangout</Badge>
              </div>
              <p className="mt-3 text-sm">
                We're having a boardgame night at Central Cafe next Tuesday at 6 PM. Would your team like to join us?
              </p>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="default">
                  Accept Invitation
                </Button>
                <Button size="sm" variant="outline">
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


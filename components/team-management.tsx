"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, UserPlus, X, Mail } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample team members data
const initialTeamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Team Leader",
    avatar: "/placeholder.svg?height=40&width=40",
    matchPercentage: 95,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Member",
    avatar: "/placeholder.svg?height=40&width=40",
    matchPercentage: 88,
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Member",
    avatar: "/placeholder.svg?height=40&width=40",
    matchPercentage: 82,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Member",
    avatar: "/placeholder.svg?height=40&width=40",
    matchPercentage: 79,
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Member",
    avatar: "/placeholder.svg?height=40&width=40",
    matchPercentage: 75,
  },
]

// Sample friend suggestions
const friendSuggestions = [
  {
    id: 101,
    name: "Jessica Miller",
    mutualFriends: 4,
    avatar: "/placeholder.svg?height=40&width=40",
    matchPercentage: 91,
  },
  {
    id: 102,
    name: "Ryan Taylor",
    mutualFriends: 3,
    avatar: "/placeholder.svg?height=40&width=40",
    matchPercentage: 87,
  },
  {
    id: 103,
    name: "Olivia Martinez",
    mutualFriends: 5,
    avatar: "/placeholder.svg?height=40&width=40",
    matchPercentage: 85,
  },
  {
    id: 104,
    name: "Daniel Anderson",
    mutualFriends: 2,
    avatar: "/placeholder.svg?height=40&width=40",
    matchPercentage: 78,
  },
]

export default function TeamManagement() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [searchQuery, setSearchQuery] = useState("")
  const [inviteEmail, setInviteEmail] = useState("")

  const handleRemoveMember = (id: number) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id))
  }

  const handleAddFriend = (friend: any) => {
    if (!teamMembers.some((member) => member.id === friend.id)) {
      setTeamMembers([...teamMembers, { ...friend, role: "Member" }])
    }
  }

  const filteredSuggestions = friendSuggestions.filter(
    (friend) =>
      !teamMembers.some((member) => member.id === friend.id) &&
      friend.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage your team members and their roles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {member.role}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Progress value={member.matchPercentage} className="h-2 w-16" />
                        <span className="text-xs text-muted-foreground">{member.matchPercentage}% match</span>
                      </div>
                    </div>
                  </div>
                </div>
                {member.role !== "Team Leader" && (
                  <Button variant="ghost" size="icon" onClick={() => handleRemoveMember(member.id)}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove member</span>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Team Member
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Team Member</DialogTitle>
                <DialogDescription>Invite friends to join your team</DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="friends">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="friends">Friend Suggestions</TabsTrigger>
                  <TabsTrigger value="email">Invite by Email</TabsTrigger>
                </TabsList>

                <TabsContent value="friends" className="space-y-4 pt-4">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search friends..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="space-y-3 max-h-[300px] overflow-y-auto">
                    {filteredSuggestions.length > 0 ? (
                      filteredSuggestions.map((friend) => (
                        <div key={friend.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={friend.avatar} alt={friend.name} />
                              <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{friend.name}</p>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">
                                  {friend.mutualFriends} mutual friends
                                </span>
                                <div className="flex items-center gap-1">
                                  <Progress value={friend.matchPercentage} className="h-2 w-16" />
                                  <span className="text-xs text-muted-foreground">{friend.matchPercentage}% match</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => handleAddFriend(friend)}>
                            <UserPlus className="h-4 w-4" />
                            <span className="sr-only">Add friend</span>
                          </Button>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-muted-foreground py-4">No matching friends found</p>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="email" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="friend@example.com"
                          className="pl-8"
                          type="email"
                          value={inviteEmail}
                          onChange={(e) => setInviteEmail(e.target.value)}
                        />
                      </div>
                      <Button>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Invite
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 bg-muted/50">
                    <h4 className="font-medium mb-2">Pending Invitations</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">john.doe@example.com</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Pending
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">jane.smith@example.com</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Pending
                        </Badge>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <DialogFooter>
                <Button variant="outline" className="w-full">
                  Done
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  )
}


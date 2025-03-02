import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Trophy, Users, Star, Clock } from "lucide-react"

export default function UserProfile() {
  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>Team Goku Member</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="outline" className="bg-orange-100 dark:bg-orange-900/20">
                Team Goku
              </Badge>
              <Badge variant="outline">Active Member</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Enthusiastic team player who loves trivia nights and outdoor challenges.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-muted-foreground">Events</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs text-muted-foreground">Wins</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">4</div>
                <div className="text-xs text-muted-foreground">Badges</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Edit Profile</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Overview</CardTitle>
            <CardDescription>Your recent team activities and achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upcoming">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-10 w-10 text-primary p-2 border rounded-full" />
                    <div>
                      <h4 className="font-semibold">Trivia Night Challenge</h4>
                      <p className="text-sm text-muted-foreground">This Friday at 7:00 PM</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant="outline">Team Goku vs Team Vegeta</Badge>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-10 w-10 text-primary p-2 border rounded-full" />
                    <div>
                      <h4 className="font-semibold">Beach Cleanup Volunteer Event</h4>
                      <p className="text-sm text-muted-foreground">Next Sunday at 9:00 AM</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant="outline">Collaboration with Team Piccolo</Badge>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="past" className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-10 w-10 text-yellow-500 p-2 border rounded-full" />
                    <div>
                      <h4 className="font-semibold">Escape Room Challenge</h4>
                      <p className="text-sm text-muted-foreground">Completed in 45 minutes</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant="outline">2 weeks ago</Badge>
                    <Badge variant="secondary">Won</Badge>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-10 w-10 text-primary p-2 border rounded-full" />
                    <div>
                      <h4 className="font-semibold">International Potluck Picnic</h4>
                      <p className="text-sm text-muted-foreground">Brought homemade sushi</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant="outline">1 month ago</Badge>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-10 w-10 text-yellow-500 p-2 border rounded-full" />
                    <div>
                      <h4 className="font-semibold">Trivia Master</h4>
                      <p className="text-sm text-muted-foreground">Won 5 trivia challenges</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-10 w-10 text-green-500 p-2 border rounded-full" />
                    <div>
                      <h4 className="font-semibold">Community Hero</h4>
                      <p className="text-sm text-muted-foreground">Participated in 3 volunteer events</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-10 w-10 text-blue-500 p-2 border rounded-full" />
                    <div>
                      <h4 className="font-semibold">Team Player</h4>
                      <p className="text-sm text-muted-foreground">Collaborated with 4 different teams</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Match Analysis</CardTitle>
          <CardDescription>How well you match with different teams based on interests and activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                  TG
                </div>
                <div>
                  <h4 className="font-semibold">Team Goku</h4>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Current Team</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Match Percentage</span>
                  <span className="font-bold">95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge variant="outline" className="text-xs">
                    Trivia
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Outdoor
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Volunteer
                  </Badge>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  TV
                </div>
                <div>
                  <h4 className="font-semibold">Team Vegeta</h4>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Match Percentage</span>
                  <span className="font-bold">82%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "82%" }}></div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge variant="outline" className="text-xs">
                    Competitive
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Sports
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Strategy
                  </Badge>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                  TP
                </div>
                <div>
                  <h4 className="font-semibold">Team Piccolo</h4>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Match Percentage</span>
                  <span className="font-bold">78%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge variant="outline" className="text-xs">
                    Volunteer
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Nature
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Teamwork
                  </Badge>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                  TG
                </div>
                <div>
                  <h4 className="font-semibold">Team Gohan</h4>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Match Percentage</span>
                  <span className="font-bold">75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge variant="outline" className="text-xs">
                    Creative
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Arts
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Social
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


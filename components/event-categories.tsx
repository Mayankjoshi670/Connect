import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, Users, ArrowRight } from "lucide-react"

export default function EventCategories() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="challenges">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
          <TabsTrigger value="exploration">Exploration</TabsTrigger>
          <TabsTrigger value="hangouts">Team Hangouts</TabsTrigger>
        </TabsList>

        <TabsContent value="challenges" className="pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Indoor Challenges</CardTitle>
                <CardDescription>Mental and creative challenges for your team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">Speed Puzzle Solving and chess games  </h3>
                      <Badge>Popular</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Teams compete to solve complex puzzles in the shortest time.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Create Event</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">Trivia Night</h3>
                      <Badge variant="outline">Competitive</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Test your team's knowledge across various categories.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Create Event</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">Escape Room Challenge</h3>
                      <Badge variant="outline">Team Building</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Work together to solve puzzles and escape the room.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Create Event</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">Anime Cosplay Challenge</h3>
                      <Badge variant="outline">Creative</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Create the best cosplay based on your favorite anime characters.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Create Event</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Outdoor Challenges</CardTitle>
                <CardDescription>Physical and adventure challenges for your team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">Central Park Treasure Hunt</h3>
                      <Badge>Featured</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Navigate through Central Park following clues to find the treasure.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Central Park</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>2-3 hours</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Create Event</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">Capture the Flag</h3>
                      <Badge variant="outline">Physical</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Teams compete to capture each other's flags in this classic outdoor game.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Various Parks</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>1-2 hours</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Create Event</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">Volleyball Tournament</h3>
                      <Badge variant="outline">Sports</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Teams compete in a volleyball tournament at the beach.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Beach</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>Half day</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Create Event</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">Soccer Match</h3>
                      <Badge variant="outline">Sports</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Teams face off in a friendly soccer match.</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Local Field</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>2 hours</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Create Event</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="collaborations" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Team Collaborations</CardTitle>
              <CardDescription>Work together with other teams on meaningful projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Teach a New Skill</h3>
                    <Badge>Knowledge Sharing</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Teams collaborate to teach each other new skills like crochet, dance, or painting.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Teams Giving Back</h3>
                    <Badge variant="outline">Volunteer</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Teams collaborate on community service projects like beach cleanups or food drives.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Team Language Exchange</h3>
                    <Badge variant="outline">Cultural</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Teams with different language skills teach each other basics of their languages.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">International Potluck Picnic</h3>
                    <Badge variant="outline">Food & Culture</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Teams bring dishes from different countries to share in a cultural exchange.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exploration" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Urban Exploration</CardTitle>
              <CardDescription>Discover hidden gems and new experiences in your city</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Urban Mystery Challenge</h3>
                    <Badge>Adventure</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Find the best live Jazz music spot in the city following mysterious clues.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Hidden Restaurant Hunt</h3>
                    <Badge variant="outline">Foodie</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Teams search for the most authentic hidden ethnic restaurants in the city.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Street Art Discovery</h3>
                    <Badge variant="outline">Cultural</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Teams explore and document the best street art in different neighborhoods.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Historical Landmarks Challenge</h3>
                    <Badge variant="outline">Educational</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Teams visit and learn about historical landmarks in the city.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hangouts" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Team Hangouts</CardTitle>
              <CardDescription>Casual social events for team bonding</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Team Movie Night</h3>
                    <Badge>Relaxed</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Watch a movie together and discuss it afterward.</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Team Taco Tuesdays</h3>
                    <Badge variant="outline">Food</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Meet up for tacos and casual conversation every Tuesday.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Boardgame Night</h3>
                    <Badge variant="outline">Games</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Play various boardgames in a relaxed, non-competitive setting.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Photography Walk</h3>
                    <Badge variant="outline">Creative</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Take a walk together and capture interesting photos to share.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Food Truck Feast</h3>
                    <Badge variant="outline">Food</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Visit a food truck festival and try different cuisines together.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Dessert Crawl</h3>
                    <Badge variant="outline">Food</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Visit multiple dessert shops in one evening to try different treats.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Create Event</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Featured Events</CardTitle>
          <CardDescription>Popular events happening soon</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">City-wide Marathon Challenge</h3>
                    <p className="text-sm text-muted-foreground">
                    The ultimate endurance test where runners from across the city compete for glory in a thrilling marathon showdown
                    </p>
                  </div>
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">Featured</Badge>
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Next Saturday, 6:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Central Library, Main Hall</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>12 teams registered</span>
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                    TG
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                    TV
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                    TP
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                    TG
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold">
                    +8
                  </div>
                </div>
                <Button>
                  Register Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">Beach Cleanup Volunteer Day</h3>
                    <p className="text-sm text-muted-foreground">
                      Join forces with other teams to clean up the local beach
                    </p>
                  </div>
                  <Badge variant="outline">Volunteer</Badge>
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Sunday, 9:00 AM</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Oceanside Beach, Main Entrance</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>8 teams registered</span>
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                    TP
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                    TV
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">
                    TK
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold">
                    +5
                  </div>
                </div>
                <Button>
                  Register Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


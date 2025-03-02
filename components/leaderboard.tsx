import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, Handshake } from "lucide-react"

// Sample leaderboard data
const leaderboardData = [
  {
    id: 1,
    name: "Team Goku",
    color: "orange",
    members: 7,
    totalEngagements: 12,
    competitions: 10,
    competitionsWithTeams: 8,
    collaborations: 2,
    collaborationsWithTeams: 2,
    rank: 1,
  },
  {
    id: 2,
    name: "Team Vegeta",
    color: "blue",
    members: 5,
    totalEngagements: 10,
    competitions: 8,
    competitionsWithTeams: 6,
    collaborations: 2,
    collaborationsWithTeams: 2,
    rank: 2,
  },
  {
    id: 3,
    name: "Team Piccolo",
    color: "green",
    members: 4,
    totalEngagements: 8,
    competitions: 5,
    competitionsWithTeams: 4,
    collaborations: 3,
    collaborationsWithTeams: 3,
    rank: 3,
  },
  {
    id: 4,
    name: "Team Gohan",
    color: "purple",
    members: 6,
    totalEngagements: 7,
    competitions: 4,
    competitionsWithTeams: 3,
    collaborations: 3,
    collaborationsWithTeams: 2,
    rank: 4,
  },
  {
    id: 5,
    name: "Team Bulma",
    color: "teal",
    members: 5,
    totalEngagements: 6,
    competitions: 3,
    competitionsWithTeams: 3,
    collaborations: 3,
    collaborationsWithTeams: 2,
    rank: 5,
  },
  {
    id: 6,
    name: "Team Krillin",
    color: "red",
    members: 4,
    totalEngagements: 5,
    competitions: 3,
    competitionsWithTeams: 2,
    collaborations: 2,
    collaborationsWithTeams: 1,
    rank: 6,
  },
  {
    id: 7,
    name: "Team Trunks",
    color: "indigo",
    members: 3,
    totalEngagements: 4,
    competitions: 2,
    competitionsWithTeams: 2,
    collaborations: 2,
    collaborationsWithTeams: 1,
    rank: 7,
  },
]

export default function Leaderboard() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Team Leaderboard</CardTitle>
          <CardDescription>Rankings based on team activity and engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {leaderboardData.map((team) => (
              <div
                key={team.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted font-bold">
                    {team.rank}
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: team.color }}
                  >
                    {team.name.substring(5, 7)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{team.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{team.members} members</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="flex flex-col items-center p-2 bg-muted/50 rounded-md">
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <Calendar className="h-3 w-3" />
                      <span>Events</span>
                    </div>
                    <span className="text-lg font-bold">{team.totalEngagements}</span>
                  </div>

                  <div className="flex flex-col items-center p-2 bg-muted/50 rounded-md">
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <Trophy className="h-3 w-3" />
                      <span>Competitions</span>
                    </div>
                    <span className="text-lg font-bold">{team.competitions}</span>
                  </div>

                  <div className="flex flex-col items-center p-2 bg-muted/50 rounded-md col-span-2 sm:col-span-1">
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <Handshake className="h-3 w-3" />
                      <span>Collaborations</span>
                    </div>
                    <span className="text-lg font-bold">{team.collaborations}</span>
                  </div>
                </div>

                <div className="hidden lg:block">
                  {team.rank === 1 && (
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">
                      <Trophy className="h-3 w-3 mr-1" />
                      Top Team
                    </Badge>
                  )}
                  {team.rank === 2 && (
                    <Badge className="bg-gray-400 hover:bg-gray-500">
                      <Trophy className="h-3 w-3 mr-1" />
                      Silver
                    </Badge>
                  )}
                  {team.rank === 3 && (
                    <Badge className="bg-amber-700 hover:bg-amber-800">
                      <Trophy className="h-3 w-3 mr-1" />
                      Bronze
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
          <CardDescription>Latest team accomplishments and milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                  TG
                </div>
                <div>
                  <h4 className="font-semibold">Team Goku</h4>
                  <p className="text-sm text-muted-foreground">Won the Trivia Night Challenge</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Badge variant="outline">5 days ago</Badge>
                <Badge variant="secondary">+25 points</Badge>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  TV
                </div>
                <div>
                  <h4 className="font-semibold">Team Vegeta</h4>
                  <p className="text-sm text-muted-foreground">Organized a successful Beach Cleanup</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Badge variant="outline">1 week ago</Badge>
                <Badge variant="secondary">+20 points</Badge>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                  TP
                </div>
                <div>
                  <h4 className="font-semibold">Team Piccolo</h4>
                  <p className="text-sm text-muted-foreground">Completed the Central Park Treasure Hunt</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Badge variant="outline">2 weeks ago</Badge>
                <Badge variant="secondary">+15 points</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


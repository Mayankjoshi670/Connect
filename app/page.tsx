import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TeamSection from "@/components/team-section"
import Leaderboard from "@/components/leaderboard"
import UserProfile from "@/components/user-profile"
import NavigationBar from "@/components/navigation-bar"

export default function TeamChallengesPage() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900">
      <NavigationBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Team Challenges Platform</h1>
        <Tabs defaultValue="teams" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="teams">Teams Section</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="profile">User Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="teams">
            <TeamSection />
          </TabsContent>
          <TabsContent value="leaderboard">
            <Leaderboard />
          </TabsContent>
          <TabsContent value="profile">
            <UserProfile />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


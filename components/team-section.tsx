"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CommunityInteraction from "@/components/community-interaction"
import TeamEventCreation from "@/components/team-event-creation"
import TeamManagement from "@/components/team-management"
import EventCategories from "@/components/event-categories"

export default function TeamSection() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="community" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="events">Create Events</TabsTrigger>
          <TabsTrigger value="management">Team Management</TabsTrigger>
          <TabsTrigger value="categories">Event Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="community" className="pt-6">
          <CommunityInteraction />
        </TabsContent>
        <TabsContent value="events" className="pt-6">
          <TeamEventCreation />
        </TabsContent>
        <TabsContent value="management" className="pt-6">
          <TeamManagement />
        </TabsContent>
        <TabsContent value="categories" className="pt-6">
          <EventCategories />
        </TabsContent>
      </Tabs>
    </div>
  )
}


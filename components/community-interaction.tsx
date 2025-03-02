"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, ThumbsDown, MessageSquare, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Sample data for community suggestions
const initialSuggestions = [
  {
    id: 1,
    title: "Hackthon ",
    description:
      "A 3 days hackathon for collage students buid some cool projects and win exciting awards and goodies",
    category: "Challenges",
    author: {
      name: "Mayank",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    votes: 24,
    comments: [
      {
        author: "Raj",
        text: "This sounds amazing! Would love to participate with my team.",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
    createdAt: "2 days ago",
  },
  {
    id: 2,
    title: "International Food Festival Collaboration NY ",
    description:
      "Teams collaborate to organize an international food festival where each team prepares dishes from a different country.",
    category: "Collaborations",
    author: {
      name: "Jacob",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    votes: 18,
    comments: [],
    createdAt: "3 days ago",
  },
  {
    id: 3,
    title: "Team Trivia Night",
    description:
      "A competitive trivia night where teams battle in categories like sports, movies, history, and science.",
    category: "Hangouts",
    author: {
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    votes: 15,
    comments: [
      {
        author: "Mike T.",
        text: "My team would crush this! When are we thinking?",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        author: "Lisa R.",
        text: "Could we do this monthly? It sounds super fun!",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
    createdAt: "5 days ago",
  },
]

export default function CommunityInteraction() {
  const [suggestions, setSuggestions] = useState(initialSuggestions)
  const [newSuggestion, setNewSuggestion] = useState({
    title: "",
    description: "",
    category: "",
  })
  const [commentText, setCommentText] = useState("")
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const suggestion = {
      id: suggestions.length + 1,
      ...newSuggestion,
      author: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      votes: 0,
      comments: [],
      createdAt: "Just now",
    }
    setSuggestions([suggestion, ...suggestions])
    setNewSuggestion({ title: "", description: "", category: "" })
  }

  const handleVote = (id: number, increment: boolean) => {
    setSuggestions(
      suggestions.map((suggestion) =>
        suggestion.id === id ? { ...suggestion, votes: suggestion.votes + (increment ? 1 : -1) } : suggestion,
      ),
    )
  }

  const handleAddComment = (id: number) => {
    if (!commentText.trim()) return

    setSuggestions(
      suggestions.map((suggestion) =>
        suggestion.id === id
          ? {
              ...suggestion,
              comments: [
                ...suggestion.comments,
                {
                  author: "You",
                  text: commentText,
                  avatar: "/placeholder.svg?height=32&width=32",
                },
              ],
            }
          : suggestion,
      ),
    )
    setCommentText("")
    setActiveCommentId(null)
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Suggest a Team Event</CardTitle>
          <CardDescription>Share your ideas for team events, challenges, or collaborations</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                placeholder="Event title"
                value={newSuggestion.title}
                onChange={(e) => setNewSuggestion({ ...newSuggestion, title: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Describe your event idea..."
                className="min-h-[100px]"
                value={newSuggestion.description}
                onChange={(e) => setNewSuggestion({ ...newSuggestion, description: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Select
                onValueChange={(value) => setNewSuggestion({ ...newSuggestion, category: value })}
                value={newSuggestion.category}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Challenges">Challenges</SelectItem>
                  <SelectItem value="Collaborations">Collaborations</SelectItem>
                  <SelectItem value="Exploration">Exploration</SelectItem>
                  <SelectItem value="Hangouts">Hangouts</SelectItem>
                  <SelectItem value="Volunteer">Volunteer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button  type="submit" className="w-full  bg-black text-white hover:bg-red-600 ">
              Submit Suggestion
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Community Suggestions</h3>

        {suggestions.map((suggestion) => (
          <Card key={suggestion.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={suggestion.author.avatar} alt={suggestion.author.name} />
                    <AvatarFallback>{suggestion.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{suggestion.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{suggestion.author.name}</span>
                      <span>•</span>
                      <span>{suggestion.createdAt}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="outline">{suggestion.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <p>{suggestion.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start pt-0">
              <div className="flex items-center gap-4 w-full">
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => handleVote(suggestion.id, true)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span className="sr-only">Upvote</span>
                  </Button>
                  <span className="text-sm font-medium">{suggestion.votes}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => handleVote(suggestion.id, false)}
                  >
                    <ThumbsDown className="h-4 w-4" />
                    <span className="sr-only">Downvote</span>
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1"
                  onClick={() => setActiveCommentId(activeCommentId === suggestion.id ? null : suggestion.id)}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-sm">{suggestion.comments.length} Comments</span>
                </Button>
              </div>

              {suggestion.comments.length > 0 && (
                <div className="w-full mt-4 space-y-3">
                  <Separator />
                  {suggestion.comments.map((comment, index) => (
                    <div key={index} className="flex gap-3 pt-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.avatar} alt={comment.author} />
                        <AvatarFallback>{comment.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{comment.author}</span>
                        </div>
                        <p className="text-sm mt-1">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeCommentId === suggestion.id && (
                <div className="w-full mt-4 flex gap-2">
                  <Input
                    placeholder="Add a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="flex-1"
                  />
                  <Button size="sm" onClick={() => handleAddComment(suggestion.id)}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


import Link from "next/link"
import { Bell, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function NavigationBar() {
  return (
    <header className="  sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" bg-blue-400  text-gray-200 container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#" className="text-sm font-medium hover:underline">
                  Teams Section
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline">
                  Leaderboard
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline">
                  User Profile
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline">
                  Event Categories
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
              <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
              <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
              <path d="M14 6h0a6 6 0 0 1 6 6v3" />
            </svg>
            <span className="font-bold text-xl hidden md:inline-block">TeamUp</span>
          </Link>
        </div>
        <div className="  hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Teams Section
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Leaderboard
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              User Profile
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search teams..." className="w-[200px] pl-8 md:w-[200px] lg:w-[300px]" />
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}


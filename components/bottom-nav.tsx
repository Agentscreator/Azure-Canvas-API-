"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Map, Calendar, User } from "lucide-react"

export function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "Map",
      href: "/map",
      icon: <Map className="h-5 w-5" />,
    },
    {
      name: "Schedule",
      href: "/schedule",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: <User className="h-5 w-5" />,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-background shadow-lg dark:border-gray-700">
      <div className="flex h-16 items-center justify-around">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex w-full flex-col items-center justify-center text-sm",
              pathname === item.href
                ? "text-usf-green dark:text-usf-gold"
                : "text-muted-foreground hover:text-usf-green dark:hover:text-usf-gold",
            )}
          >
            {item.icon}
            <span className="mt-1 text-xs">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}


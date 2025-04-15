"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

type RouteChangeContextType = {
  isRouteChanging: boolean
  pathname: string | null
}

const RouteChangeContext = createContext<RouteChangeContextType>({
  isRouteChanging: false,
  pathname: null,
})

export function RouteChangeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isRouteChanging, setIsRouteChanging] = useState(false)
  const [currentPathname, setCurrentPathname] = useState<string | null>(null)

  useEffect(() => {
    setIsRouteChanging(true)

    // Store the current pathname for transition effects
    setCurrentPathname(pathname)

    // Simulate route change delay for animation
    const timeout = setTimeout(() => {
      setIsRouteChanging(false)
    }, 800)

    return () => clearTimeout(timeout)
  }, [pathname, searchParams])

  return (
    <RouteChangeContext.Provider value={{ isRouteChanging, pathname: currentPathname }}>
      {children}
    </RouteChangeContext.Provider>
  )
}

export const useRouteChange = () => useContext(RouteChangeContext)

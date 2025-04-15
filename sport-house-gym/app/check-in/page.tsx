"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { QrCode, User, KeyRound, Calendar, CheckCircle, ArrowLeft, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"

export default function CheckInPage() {
  const [activeTab, setActiveTab] = useState("qr")
  const [scanningStatus, setScanningStatus] = useState<"idle" | "scanning" | "success" | "error">("idle")
  const [memberId, setMemberId] = useState("")
  const [pin, setPin] = useState("")
  const [checkInStatus, setCheckInStatus] = useState<"idle" | "checking" | "success" | "error">("idle")
  const videoRef = useRef<HTMLVideoElement>(null)
  const scannerRef = useRef<HTMLDivElement>(null)

  // Simulate QR code scanning
  const startScanning = () => {
    setScanningStatus("scanning")

    // Simulate a successful scan after 3 seconds
    setTimeout(() => {
      setScanningStatus("success")
    }, 3000)
  }

  // Reset scanner
  const resetScanner = () => {
    setScanningStatus("idle")
  }

  // Handle manual check-in
  const handleManualCheckIn = (e: React.FormEvent) => {
    e.preventDefault()
    setCheckInStatus("checking")

    // Simulate check-in process
    setTimeout(() => {
      if (memberId === "12345" && pin === "1234") {
        setCheckInStatus("success")
      } else {
        setCheckInStatus("error")
      }
    }, 1500)
  }

  // Reset check-in form
  const resetCheckIn = () => {
    setMemberId("")
    setPin("")
    setCheckInStatus("idle")
  }

  // Animation for the scanner
  useEffect(() => {
    if (scanningStatus === "scanning") {
      const interval = setInterval(() => {
        if (scannerRef.current) {
          const randomLeft = Math.random() * 80 + 10
          const randomTop = Math.random() * 80 + 10
          scannerRef.current.style.left = `${randomLeft}%`
          scannerRef.current.style.top = `${randomTop}%`
        }
      }, 800)

      return () => clearInterval(interval)
    }
  }, [scanningStatus])

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Member Check-In</h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-[700px] mx-auto">
              Welcome to Sport House! Check in quickly using your QR code or member ID.
            </p>
          </div>
        </section>

        {/* Check-In Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-md mx-auto">
              <Link href="/" className="flex items-center text-sm mb-8 hover:text-primary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Member Check-In</CardTitle>
                  <CardDescription className="text-center">
                    Scan your QR code or enter your credentials to check in
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="qr" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="qr" disabled={scanningStatus !== "idle" && scanningStatus !== "error"}>
                        <QrCode className="h-4 w-4 mr-2" />
                        QR Code
                      </TabsTrigger>
                      <TabsTrigger value="manual" disabled={checkInStatus === "checking"}>
                        <KeyRound className="h-4 w-4 mr-2" />
                        Manual
                      </TabsTrigger>
                    </TabsList>

                    {/* QR Code Scanner Tab */}
                    <TabsContent value="qr" className="mt-4">
                      {scanningStatus === "idle" && (
                        <div className="flex flex-col items-center">
                          <div className="w-full h-64 bg-black rounded-lg mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <QrCode className="h-16 w-16 text-gray-700" />
                              <p className="absolute bottom-4 text-white text-sm">Position QR code in frame</p>
                            </div>
                          </div>
                          <Button onClick={startScanning} className="w-full">
                            Start Scanner
                          </Button>
                        </div>
                      )}

                      {scanningStatus === "scanning" && (
                        <div className="flex flex-col items-center">
                          <div className="w-full h-64 bg-black rounded-lg mb-4 relative overflow-hidden">
                            {/* Simulated camera feed */}
                            <Image
                              src="/placeholder.svg?height=256&width=384"
                              alt="Camera feed"
                              fill
                              className="object-cover opacity-70"
                            />

                            {/* Scanning animation */}
                            <div className="absolute inset-0">
                              <motion.div
                                className="absolute w-full h-1 bg-primary/70"
                                animate={{
                                  top: ["0%", "100%", "0%"],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear",
                                }}
                              />

                              {/* Scanner target */}
                              <div
                                ref={scannerRef}
                                className="absolute w-32 h-32 border-2 border-primary rounded-lg transition-all duration-500"
                                style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                              >
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
                              </div>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">
                              <p className="absolute bottom-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
                                Scanning...
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" onClick={resetScanner} className="w-full">
                            Cancel
                          </Button>
                        </div>
                      )}

                      {scanningStatus === "success" && (
                        <div className="flex flex-col items-center p-6 text-center">
                          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle className="h-10 w-10 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Check-In Successful!</h3>
                          <p className="text-muted-foreground mb-6">
                            Welcome back, John Doe!
                            <br />
                            Checked in at {new Date().toLocaleTimeString()}
                          </p>
                          <div className="flex items-center justify-center gap-2 mb-4">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span className="font-medium">
                              {new Date().toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <Button onClick={resetScanner} className="w-full">
                            Done
                          </Button>
                        </div>
                      )}

                      {scanningStatus === "error" && (
                        <div className="flex flex-col items-center p-6 text-center">
                          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                            <XCircle className="h-10 w-10 text-red-600" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Scan Failed</h3>
                          <p className="text-muted-foreground mb-6">
                            We couldn't read your QR code. Please try again or use manual check-in.
                          </p>
                          <div className="flex gap-4 w-full">
                            <Button variant="outline" onClick={resetScanner} className="flex-1">
                              Try Again
                            </Button>
                            <Button onClick={() => setActiveTab("manual")} className="flex-1">
                              Manual Check-In
                            </Button>
                          </div>
                        </div>
                      )}
                    </TabsContent>

                    {/* Manual Check-In Tab */}
                    <TabsContent value="manual" className="mt-4">
                      {checkInStatus === "idle" && (
                        <form onSubmit={handleManualCheckIn} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="memberId">Member ID</Label>
                            <Input
                              id="memberId"
                              placeholder="Enter your member ID"
                              value={memberId}
                              onChange={(e) => setMemberId(e.target.value)}
                              required
                            />
                            <p className="text-xs text-muted-foreground">For demo, use: 12345</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pin">PIN</Label>
                            <Input
                              id="pin"
                              type="password"
                              placeholder="Enter your PIN"
                              value={pin}
                              onChange={(e) => setPin(e.target.value)}
                              required
                            />
                            <p className="text-xs text-muted-foreground">For demo, use: 1234</p>
                          </div>
                          <Button type="submit" className="w-full">
                            Check In
                          </Button>
                        </form>
                      )}

                      {checkInStatus === "checking" && (
                        <div className="flex flex-col items-center p-6 text-center">
                          <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                          <p className="text-muted-foreground">Verifying your credentials...</p>
                        </div>
                      )}

                      {checkInStatus === "success" && (
                        <div className="flex flex-col items-center p-6 text-center">
                          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle className="h-10 w-10 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Check-In Successful!</h3>
                          <p className="text-muted-foreground mb-6">
                            Welcome back, John Doe!
                            <br />
                            Checked in at {new Date().toLocaleTimeString()}
                          </p>
                          <div className="flex items-center justify-center gap-2 mb-4">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span className="font-medium">
                              {new Date().toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <Button onClick={resetCheckIn} className="w-full">
                            Done
                          </Button>
                        </div>
                      )}

                      {checkInStatus === "error" && (
                        <div className="flex flex-col items-center p-6 text-center">
                          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                            <XCircle className="h-10 w-10 text-red-600" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Check-In Failed</h3>
                          <p className="text-muted-foreground mb-6">
                            Invalid member ID or PIN. Please try again or contact the front desk for assistance.
                          </p>
                          <Button onClick={resetCheckIn} className="w-full">
                            Try Again
                          </Button>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="text-sm text-muted-foreground text-center">
                    Need help? Please ask our staff at the front desk.
                  </div>
                </CardFooter>
              </Card>

              {/* Quick Help Section */}
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold">Quick Help</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2 flex items-center">
                      <User className="h-4 w-4 mr-2 text-primary" />
                      Forgot Member ID?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Visit the front desk with your photo ID to retrieve your member information.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2 flex items-center">
                      <KeyRound className="h-4 w-4 mr-2 text-primary" />
                      Reset PIN
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      You can reset your PIN at the front desk or through your online account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Benefits Reminder */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Enjoy Your Workout!</h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-[700px] mx-auto">
              Remember to take advantage of all the amenities included in your membership.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Today's Classes</h3>
                <p className="text-white/80 text-sm">
                  Check the schedule for today's fitness classes and reserve your spot.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Personal Training</h3>
                <p className="text-white/80 text-sm">
                  Book a session with one of our expert trainers to accelerate your progress.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Recovery Zone</h3>
                <p className="text-white/80 text-sm">
                  Don't forget to visit our sauna and recovery area after your workout.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

// Missing component definition
function XCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}

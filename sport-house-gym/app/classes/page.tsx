import Link from "next/link"
import Image from "next/image"
import { Clock, Users, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PageTransition from "@/components/page-transition"

// Sample class data
const fitnessClasses = [
  {
    id: 1,
    name: "High-Intensity Interval Training",
    shortName: "HIIT",
    description:
      "Push your limits with our high-intensity interval training class. Alternating between intense bursts of exercise and short recovery periods.",
    duration: 45,
    level: "Intermediate",
    trainer: "Michael Johnson",
    capacity: 20,
    image: "/placeholder.svg?height=400&width=600",
    schedule: ["Mon 6:00 AM", "Wed 6:00 AM", "Fri 6:00 AM", "Tue 7:00 PM", "Thu 7:00 PM"],
  },
  {
    id: 2,
    name: "Power Yoga",
    shortName: "Yoga",
    description:
      "A vigorous, fitness-based approach to vinyasa-style yoga that builds strength, flexibility, and concentration.",
    duration: 60,
    level: "All Levels",
    trainer: "Sarah Williams",
    capacity: 15,
    image: "/placeholder.svg?height=400&width=600",
    schedule: ["Mon 9:00 AM", "Wed 9:00 AM", "Fri 9:00 AM", "Tue 6:00 PM", "Thu 6:00 PM"],
  },
  {
    id: 3,
    name: "Spin Cycle",
    shortName: "Spin",
    description:
      "An indoor cycling workout that simulates an outdoor ride with sprints, climbs, and intervals. Great for cardio and lower body strength.",
    duration: 50,
    level: "All Levels",
    trainer: "David Martinez",
    capacity: 25,
    image: "/placeholder.svg?height=400&width=600",
    schedule: ["Tue 6:00 AM", "Thu 6:00 AM", "Sat 8:00 AM", "Mon 5:30 PM", "Wed 5:30 PM"],
  },
  {
    id: 4,
    name: "Strength & Conditioning",
    shortName: "S&C",
    description:
      "Build muscle and improve overall fitness with this comprehensive strength and conditioning class using weights, resistance bands, and bodyweight exercises.",
    duration: 55,
    level: "Intermediate",
    trainer: "James Wilson",
    capacity: 18,
    image: "/placeholder.svg?height=400&width=600",
    schedule: ["Mon 7:00 AM", "Wed 7:00 AM", "Fri 7:00 AM", "Tue 6:30 PM", "Thu 6:30 PM"],
  },
  {
    id: 5,
    name: "Boxing Fundamentals",
    shortName: "Boxing",
    description:
      "Learn boxing techniques while getting a full-body workout. Improve coordination, strength, and cardiovascular fitness.",
    duration: 60,
    level: "Beginner",
    trainer: "Alex Thompson",
    capacity: 15,
    image: "/placeholder.svg?height=400&width=600",
    schedule: ["Tue 8:00 AM", "Thu 8:00 AM", "Sat 9:00 AM", "Mon 7:30 PM", "Wed 7:30 PM"],
  },
  {
    id: 6,
    name: "Core & Abs",
    shortName: "Core",
    description:
      "Focus on strengthening your core muscles with targeted exercises for abs, obliques, and lower back. Great for improving posture and stability.",
    duration: 30,
    level: "All Levels",
    trainer: "Emma Davis",
    capacity: 25,
    image: "/placeholder.svg?height=400&width=600",
    schedule: ["Mon 12:00 PM", "Wed 12:00 PM", "Fri 12:00 PM", "Tue 5:00 PM", "Thu 5:00 PM"],
  },
  {
    id: 7,
    name: "Zumba Dance",
    shortName: "Zumba",
    description:
      "A fun, high-energy dance workout that combines Latin and international music with dance moves. Perfect for burning calories while having fun.",
    duration: 60,
    level: "All Levels",
    trainer: "Maria Rodriguez",
    capacity: 30,
    image: "/placeholder.svg?height=400&width=600",
    schedule: ["Tue 9:00 AM", "Thu 9:00 AM", "Sat 10:00 AM", "Mon 6:00 PM", "Wed 6:00 PM"],
  },
  {
    id: 8,
    name: "CrossFit Training",
    shortName: "CrossFit",
    description:
      "A high-intensity functional training program that combines weightlifting, gymnastics, and cardio for a comprehensive workout.",
    duration: 60,
    level: "Advanced",
    trainer: "Chris Parker",
    capacity: 15,
    image: "/placeholder.svg?height=400&width=600",
    schedule: ["Mon 5:00 AM", "Wed 5:00 AM", "Fri 5:00 AM", "Tue 7:30 PM", "Thu 7:30 PM"],
  },
]

export default function ClassesPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Group Fitness Classes
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-[700px] mx-auto">
              Join our energetic group classes led by expert trainers to achieve your fitness goals in a motivating
              community environment.
            </p>
          </div>
        </section>

        {/* Class Schedule Overview */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Class Offerings</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                We offer a variety of classes to suit all fitness levels and goals. From high-intensity workouts to
                mindful movement, there's something for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fitnessClasses.map((fitnessClass) => (
                <Card
                  key={fitnessClass.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={fitnessClass.image || "/placeholder.svg"}
                      alt={fitnessClass.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                      {fitnessClass.shortName}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{fitnessClass.name}</CardTitle>
                      <Badge variant="outline" className="ml-2">
                        {fitnessClass.level}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-4 text-xs">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {fitnessClass.duration} min
                      </span>
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        Max {fitnessClass.capacity}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm mb-4">{fitnessClass.description}</p>
                    <div className="mt-2">
                      <p className="text-sm font-medium mb-2">Instructor: {fitnessClass.trainer}</p>
                      <div className="flex flex-wrap gap-2">
                        {fitnessClass.schedule.slice(0, 3).map((time, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {time}
                          </Badge>
                        ))}
                        {fitnessClass.schedule.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{fitnessClass.schedule.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/memberships">Book Class</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Schedule */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Weekly Class Schedule</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                Plan your week with our comprehensive class schedule. Classes are available from early morning to
                evening to accommodate your busy lifestyle.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 text-left">Time</th>
                    <th className="p-3 text-center">Monday</th>
                    <th className="p-3 text-center">Tuesday</th>
                    <th className="p-3 text-center">Wednesday</th>
                    <th className="p-3 text-center">Thursday</th>
                    <th className="p-3 text-center">Friday</th>
                    <th className="p-3 text-center">Saturday</th>
                    <th className="p-3 text-center">Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Early Morning */}
                  <tr className="border-b">
                    <td className="p-3 font-medium">5:00 AM - 6:00 AM</td>
                    <td className="p-3 text-center bg-gray-50">CrossFit</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">CrossFit</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">CrossFit</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">6:00 AM - 7:00 AM</td>
                    <td className="p-3 text-center bg-gray-50">HIIT</td>
                    <td className="p-3 text-center">Spin Cycle</td>
                    <td className="p-3 text-center bg-gray-50">HIIT</td>
                    <td className="p-3 text-center">Spin Cycle</td>
                    <td className="p-3 text-center bg-gray-50">HIIT</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">7:00 AM - 8:00 AM</td>
                    <td className="p-3 text-center bg-gray-50">S&C</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">S&C</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">S&C</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                  </tr>
                  {/* Morning */}
                  <tr className="border-b">
                    <td className="p-3 font-medium">8:00 AM - 9:00 AM</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                    <td className="p-3 text-center">Boxing</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                    <td className="p-3 text-center">Boxing</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                    <td className="p-3 text-center">Spin Cycle</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">9:00 AM - 10:00 AM</td>
                    <td className="p-3 text-center bg-gray-50">Yoga</td>
                    <td className="p-3 text-center">Zumba</td>
                    <td className="p-3 text-center bg-gray-50">Yoga</td>
                    <td className="p-3 text-center">Zumba</td>
                    <td className="p-3 text-center bg-gray-50">Yoga</td>
                    <td className="p-3 text-center">Boxing</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                  </tr>
                  {/* Midday */}
                  <tr className="border-b">
                    <td className="p-3 font-medium">12:00 PM - 12:30 PM</td>
                    <td className="p-3 text-center bg-gray-50">Core</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">Core</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">Core</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                  </tr>
                  {/* Evening */}
                  <tr className="border-b">
                    <td className="p-3 font-medium">5:00 PM - 6:00 PM</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                    <td className="p-3 text-center">Core</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                    <td className="p-3 text-center">Core</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">6:00 PM - 7:00 PM</td>
                    <td className="p-3 text-center bg-gray-50">Zumba</td>
                    <td className="p-3 text-center">Yoga</td>
                    <td className="p-3 text-center bg-gray-50">Zumba</td>
                    <td className="p-3 text-center">Yoga</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">7:00 PM - 8:00 PM</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                    <td className="p-3 text-center">HIIT</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                    <td className="p-3 text-center">HIIT</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">7:30 PM - 8:30 PM</td>
                    <td className="p-3 text-center bg-gray-50">Boxing</td>
                    <td className="p-3 text-center">CrossFit</td>
                    <td className="p-3 text-center bg-gray-50">Boxing</td>
                    <td className="p-3 text-center">CrossFit</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                    <td className="p-3 text-center">-</td>
                    <td className="p-3 text-center bg-gray-50">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Class Policies */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">Class Policies</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Reservations</h3>
                  <p className="text-muted-foreground">
                    Classes can be booked up to 7 days in advance through our mobile app or website. We recommend
                    booking early as classes fill up quickly.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Cancellation Policy</h3>
                  <p className="text-muted-foreground">
                    Please cancel at least 2 hours before class start time to avoid a late cancellation fee. Members who
                    repeatedly no-show may have their booking privileges restricted.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Arrival Time</h3>
                  <p className="text-muted-foreground">
                    Please arrive 10-15 minutes before class starts. For safety reasons, late arrivals may not be
                    permitted to join once class has begun.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">What to Bring</h3>
                  <p className="text-muted-foreground">
                    Please bring a water bottle, towel, and appropriate workout attire. Yoga participants should bring
                    their own mat or rent one from the front desk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to join a class?</h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-[700px] mx-auto">
              Experience the energy and motivation of our group fitness classes. Join today to secure your spot!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-all duration-300" asChild>
                <Link href="/memberships">
                  Become a Member <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

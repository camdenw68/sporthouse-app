import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PageTransition from "@/components/page-transition"

// Sample trainers data
const trainers = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Head Fitness Trainer",
    specialties: ["HIIT", "Strength Training", "Nutrition"],
    bio: "Michael has over 10 years of experience in the fitness industry. He specializes in high-intensity training and has helped hundreds of clients achieve their fitness goals.",
    certifications: ["NASM Certified Personal Trainer", "CrossFit Level 2", "Precision Nutrition Level 1"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Yoga Instructor",
    specialties: ["Power Yoga", "Meditation", "Flexibility"],
    bio: "Sarah is a dedicated yoga instructor with 8 years of teaching experience. Her classes focus on building strength, improving flexibility, and finding inner peace.",
    certifications: ["200-Hour Yoga Alliance Certification", "Meditation Coach", "Flexibility Specialist"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "David Martinez",
    role: "Cycling Coach",
    specialties: ["Indoor Cycling", "Endurance Training", "Weight Loss"],
    bio: "David is an energetic cycling coach who brings enthusiasm to every class. His sessions are known for their motivating playlists and challenging hill climbs.",
    certifications: ["Schwinn Certified Cycling Instructor", "ACE Personal Trainer", "TRX Suspension Training"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Core & Pilates Specialist",
    specialties: ["Pilates", "Core Training", "Posture Correction"],
    bio: "Emma specializes in core strengthening and Pilates. Her approach focuses on building a strong foundation for overall fitness and injury prevention.",
    certifications: [
      "Balanced Body Pilates Instructor",
      "NASM Corrective Exercise Specialist",
      "Pre/Post Natal Fitness",
    ],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Strength & Conditioning Coach",
    specialties: ["Powerlifting", "Athletic Performance", "Functional Training"],
    bio: "James has worked with athletes at all levels. His strength and conditioning programs are designed to improve performance and prevent injuries.",
    certifications: [
      "CSCS Strength & Conditioning Specialist",
      "USA Weightlifting Coach",
      "Functional Movement Specialist",
    ],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 6,
    name: "Maria Rodriguez",
    role: "Zumba & Dance Instructor",
    specialties: ["Zumba", "Dance Fitness", "Aerobics"],
    bio: "Maria brings fun and energy to her dance-based fitness classes. Her Zumba sessions are popular for being both effective workouts and enjoyable experiences.",
    certifications: ["Licensed Zumba Instructor", "AFAA Group Fitness", "Rhythm & Motion Dance"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 7,
    name: "Alex Thompson",
    role: "Boxing Coach",
    specialties: ["Boxing Technique", "Cardio Boxing", "Self-Defense"],
    bio: "With a background in competitive boxing, Alex teaches proper technique while delivering a challenging workout that improves strength, speed, and coordination.",
    certifications: ["USA Boxing Coach", "NASM Personal Trainer", "First Aid & CPR"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 8,
    name: "Chris Parker",
    role: "CrossFit Coach",
    specialties: ["CrossFit", "Olympic Lifting", "Metabolic Conditioning"],
    bio: "Chris is passionate about helping members push their limits through CrossFit training. His programming focuses on building well-rounded fitness and mental toughness.",
    certifications: ["CrossFit Level 3 Trainer", "Olympic Weightlifting Coach", "Mobility Specialist"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
]

export default function TrainersPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Meet Our Expert Trainers
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-[700px] mx-auto">
              Our certified fitness professionals are dedicated to helping you achieve your goals with personalized
              guidance and motivation.
            </p>
          </div>
        </section>

        {/* Trainers Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trainers.map((trainer) => (
                <Card
                  key={trainer.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="relative h-80 w-full">
                    <Image src={trainer.image || "/placeholder.svg"} alt={trainer.name} fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{trainer.name}</CardTitle>
                    <CardDescription>{trainer.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trainer.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">{trainer.bio}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Link
                        href={trainer.social.instagram}
                        className="text-gray-500 hover:text-primary transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link
                        href={trainer.social.twitter}
                        className="text-gray-500 hover:text-primary transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href={trainer.social.linkedin}
                        className="text-gray-500 hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary" asChild>
                      <Link href={`/trainers/${trainer.id}`}>
                        View Profile
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trainer Certifications */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional Certifications</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                Our trainers hold certifications from the industry's most respected organizations, ensuring you receive
                expert guidance for safe and effective workouts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M20 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M4 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M16 12h4" />
                    <path d="M4 12h4" />
                    <path d="M12 16v4" />
                    <path d="M12 4v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Personal Training</h3>
                <p className="text-muted-foreground">
                  NASM, ACE, ACSM, and NSCA certified personal trainers with specializations in various fitness domains.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="m12 17-1 4-2-1-2 4-1-2H4l1.5-3-2-1 2-4 1.5 1L8 12l-1.5-1-2 4 2 1-1.5 3h2l1 2 2-4 2 1 1-4" />
                    <path d="m16 12 1.5 1 2-4-2-1 1.5-3h-2l-1-2-2 4-2-1-1 4 1 4 2-1 2 4 1-2h2l-1.5-3 2-1-2-4" />
                    <path d="M12 6V2l-1 1-2-2-1 2H6l1 2-2 1 2 2 1-1 2 2Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Specialized Training</h3>
                <p className="text-muted-foreground">
                  Yoga Alliance, CrossFit, USAW, Pilates, and specialized certifications for specific training
                  modalities.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Continuing Education</h3>
                <p className="text-muted-foreground">
                  Our trainers regularly update their knowledge through continuing education to bring you the latest in
                  fitness science.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Members Say</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                Hear from our members about their experiences working with our exceptional trainers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold">
                        JD
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-muted-foreground">Member for 2 years</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "Michael's HIIT classes have completely transformed my fitness level. I've lost 30 pounds and gained
                    so much strength and confidence. His motivational style keeps me coming back!"
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold">
                        AS
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Amanda Smith</p>
                      <p className="text-sm text-muted-foreground">Member for 1 year</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "Sarah's yoga classes are the highlight of my week. She creates a peaceful environment while still
                    challenging us to improve. My flexibility and stress levels have improved dramatically."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold">
                        RJ
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Robert Johnson</p>
                      <p className="text-sm text-muted-foreground">Member for 6 months</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "Chris's CrossFit coaching has helped me achieve fitness goals I never thought possible. He knows
                    when to push and when to scale back, making the workouts challenging but achievable."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to work with our trainers?</h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-[700px] mx-auto">
              Join Sport House Gym today and get access to our expert trainers who will help you achieve your fitness
              goals.
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
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

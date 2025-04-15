import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Clock, Shield, Target, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">About Sport House</h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-[700px] mx-auto">
              Our mission is to inspire and empower our community to achieve their fitness goals in a supportive and
              motivating environment.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    Sport House was founded in 2010 by fitness enthusiasts Michael and Sarah Thompson, who shared a
                    vision of creating a gym that went beyond just equipment and workouts.
                  </p>
                  <p>
                    What started as a small studio with just a few pieces of equipment has grown into a comprehensive
                    fitness center with state-of-the-art facilities, expert trainers, and a thriving community of
                    members.
                  </p>
                  <p>
                    Over the years, we've helped thousands of members transform their lives through fitness. We've
                    celebrated countless personal records, weight loss journeys, and fitness milestones with our
                    community.
                  </p>
                  <p>
                    Today, Sport House stands as a testament to our commitment to excellence in fitness. We continue to
                    evolve and grow, always keeping our members' needs and goals at the heart of everything we do.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Sport House Gym Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                These principles guide everything we do at Sport House, from how we design our facilities to how we
                interact with our members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from our facilities and equipment to our training
                  programs and customer service.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive community where members feel welcome, motivated, and inspired to achieve their
                  fitness goals together.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Results</h3>
                <p className="text-muted-foreground">
                  We are committed to helping our members achieve real, sustainable results through effective training
                  programs and expert guidance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Safety</h3>
                <p className="text-muted-foreground">
                  We prioritize the safety and well-being of our members by maintaining clean facilities, proper
                  equipment, and qualified staff.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Consistency</h3>
                <p className="text-muted-foreground">
                  We believe in the power of consistent effort and provide the support and resources our members need to
                  maintain their fitness journey.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  We are passionate about fitness and health, and we bring that enthusiasm to every class, training
                  session, and interaction with our members.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Facilities */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">State-of-the-Art Facilities</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                Our gym is equipped with the latest fitness equipment and amenities to provide you with the best workout
                experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-[250px] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Cardio Area"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">Cardio Area</h3>
                    <p className="text-white/80 text-sm">
                      Featuring treadmills, ellipticals, bikes, and rowing machines from top brands.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[250px] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Strength Training"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">Strength Training</h3>
                    <p className="text-white/80 text-sm">
                      Free weights, machines, and functional training equipment for all levels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[250px] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Group Fitness Studio"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">Group Fitness Studio</h3>
                    <p className="text-white/80 text-sm">
                      Spacious studios for yoga, HIIT, cycling, and other group classes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[250px] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Recovery Zone"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">Recovery Zone</h3>
                    <p className="text-white/80 text-sm">
                      Sauna, steam room, and stretching areas to help you recover after workouts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[250px] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Locker Rooms"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">Locker Rooms</h3>
                    <p className="text-white/80 text-sm">
                      Clean and spacious locker rooms with showers, changing areas, and amenities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[250px] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Functional Training"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">Functional Training</h3>
                    <p className="text-white/80 text-sm">
                      Dedicated area for functional movements with rigs, ropes, sleds, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Overview */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Leadership Team</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                Meet the dedicated professionals who lead Sport House and ensure we deliver the best fitness experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-[300px]">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Michael Thompson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Michael Thompson</h3>
                  <p className="text-primary font-medium mb-3">Co-Founder & CEO</p>
                  <p className="text-muted-foreground text-sm">
                    Former professional athlete with a passion for helping others achieve their fitness potential.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-[300px]">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Sarah Thompson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Sarah Thompson</h3>
                  <p className="text-primary font-medium mb-3">Co-Founder & COO</p>
                  <p className="text-muted-foreground text-sm">
                    Certified fitness expert with a background in business management and customer experience.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-[300px]">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="David Martinez"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">David Martinez</h3>
                  <p className="text-primary font-medium mb-3">Fitness Director</p>
                  <p className="text-muted-foreground text-sm">
                    Oversees all training programs and ensures the highest quality of fitness instruction.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/trainers">
                  Meet Our Full Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to join our community?</h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-[700px] mx-auto">
              Experience the Sport House difference with our state-of-the-art facilities, expert trainers, and
              supportive community.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-all duration-300" asChild>
                <Link href="/memberships">
                  Explore Memberships <ArrowRight className="ml-2 h-4 w-4" />
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

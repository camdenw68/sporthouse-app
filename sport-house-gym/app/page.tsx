import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Dumbbell, Users, Calendar, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="Gym interior"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 max-w-[640px]">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                TRAIN HARD.
                <br />
                GET RESULTS.
              </h1>
              <p className="text-xl text-gray-200 max-w-[500px]">
                Join Sport House Gym today and transform your body with our state-of-the-art facilities and expert
                trainers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" asChild>
                  <Link href="/memberships">View Memberships</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-black"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose Sport House</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-[800px]">
                We offer premium facilities, expert trainers, and a supportive community to help you achieve your
                fitness goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Modern Equipment</h3>
                <p className="text-gray-600">State-of-the-art fitness equipment for all your training needs.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
                <p className="text-gray-600">Certified personal trainers to guide you on your fitness journey.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Group Classes</h3>
                <p className="text-gray-600">Diverse range of group fitness classes for all levels.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Access</h3>
                <p className="text-gray-600">Train on your schedule with 24/7 access to our facilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Preview */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Membership Plans</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-[800px]">
                Choose the membership that fits your lifestyle and fitness goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="membership-card membership-card-basic group">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <div className="text-4xl font-bold mb-4">
                  $29<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <ul className="mb-6 space-y-2 flex-1">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Gym access
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic equipment
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Locker room access
                  </li>
                </ul>
                <Button className="group-hover:bg-primary group-hover:scale-105 transition-all duration-300" asChild>
                  <Link href="/checkout?plan=basic">Select Plan</Link>
                </Button>
              </div>
              <div className="membership-card membership-card-premium group animate-pulse-glow">
                <div className="absolute top-0 right-0 px-3 py-1 bg-yellow-400 text-black text-xs font-bold uppercase rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold mb-4">
                  $49<span className="text-lg font-normal opacity-80">/month</span>
                </div>
                <ul className="mb-6 space-y-2 flex-1">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    All Basic features
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Group classes
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Fitness assessment
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Sauna access
                  </li>
                </ul>
                <Button
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 group-hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/checkout?plan=premium">Select Plan</Link>
                </Button>
              </div>
              <div className="membership-card membership-card-elite group">
                <h3 className="text-xl font-bold mb-2">Elite</h3>
                <div className="text-4xl font-bold mb-4">
                  $79<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <ul className="mb-6 space-y-2 flex-1">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    All Premium features
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Personal training sessions
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Nutrition consultation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    VIP lounge access
                  </li>
                </ul>
                <Button className="group-hover:bg-primary group-hover:scale-105 transition-all duration-300" asChild>
                  <Link href="/checkout?plan=elite">Select Plan</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to start your fitness journey?</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-[500px]">
                  Join Sport House Gym today and take the first step towards a healthier, stronger you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/memberships">
                    Join Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

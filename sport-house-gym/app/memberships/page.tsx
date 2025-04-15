import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"

export default function MembershipsPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Choose Your Membership
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-[700px] mx-auto">
              Find the perfect membership plan that fits your fitness goals and lifestyle.
            </p>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="membership-card membership-card-basic group">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>Perfect for beginners</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    $29<span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Gym access during standard hours (6AM-10PM)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Basic fitness equipment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Locker room access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Free fitness assessment</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full group-hover:bg-primary group-hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link href="/checkout?plan=basic">Select Plan</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="membership-card membership-card-premium group animate-pulse-glow border-primary relative">
                <div className="absolute top-0 right-0 px-3 py-1 bg-yellow-400 text-black text-xs font-bold uppercase rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription className="text-primary-foreground/80">Our most popular plan</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    $49<span className="text-lg font-normal text-primary-foreground/80">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-white mr-2 shrink-0" />
                      <span>All Basic features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-white mr-2 shrink-0" />
                      <span>24/7 gym access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-white mr-2 shrink-0" />
                      <span>Unlimited group fitness classes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-white mr-2 shrink-0" />
                      <span>Sauna and steam room access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-white mr-2 shrink-0" />
                      <span>Towel service</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-primary hover:bg-gray-100 group-hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link href="/checkout?plan=premium">Select Plan</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="membership-card membership-card-elite group">
                <CardHeader>
                  <CardTitle>Elite</CardTitle>
                  <CardDescription>For serious fitness enthusiasts</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    $79<span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>All Premium features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>2 personal training sessions per month</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Nutrition consultation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>VIP lounge access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Priority class booking</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Guest passes (2 per month)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full group-hover:bg-primary group-hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link href="/checkout?plan=elite">Select Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                Find answers to common questions about our membership plans.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2">Can I cancel my membership anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your membership at any time. We require a 30-day notice for all cancellations.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2">Is there a joining fee?</h3>
                <p className="text-muted-foreground">
                  There is a one-time joining fee of $49 for all new members, which covers your access card and initial
                  fitness assessment.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2">Can I freeze my membership?</h3>
                <p className="text-muted-foreground">
                  Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended
                  travel.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2">Do you offer family discounts?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 10% discount for each additional family member who joins on any membership plan.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2">Can I upgrade my membership?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade your membership at any time. The new rate will be prorated for the remainder of
                  your billing cycle.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2">Do you offer student discounts?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 15% discount for students with a valid student ID on our Basic and Premium plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to start your fitness journey?</h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-[700px] mx-auto">
              Join Sport House Gym today and take the first step towards a healthier, stronger you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-all duration-300" asChild>
                <Link href="/checkout">Join Now</Link>
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

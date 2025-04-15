"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PageTransition from "@/components/page-transition"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [inquiryType, setInquiryType] = useState("general")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormState("success")
    }, 1500)
  }

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-[700px] mx-auto">
              Have questions or feedback? We're here to help. Reach out to our team and we'll get back to you as soon as
              possible.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Fitness Street
                    <br />
                    New York, NY 10001
                  </p>
                  <Button variant="link" className="mt-2" asChild>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Get Directions <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    Main: (123) 456-7890
                    <br />
                    Support: (123) 456-7891
                  </p>
                  <Button variant="link" className="mt-2" asChild>
                    <a href="tel:+11234567890" className="flex items-center">
                      Call Now <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    info@sporthouse.com
                    <br />
                    support@sporthouse.com
                  </p>
                  <Button variant="link" className="mt-2" asChild>
                    <a href="mailto:info@sporthouse.com" className="flex items-center">
                      Send Email <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 5:00 AM - 11:00 PM
                    <br />
                    Saturday: 6:00 AM - 10:00 PM
                    <br />
                    Sunday: 7:00 AM - 9:00 PM
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you as soon as possible. We typically respond
                  within 24 hours.
                </p>

                {formState === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700 mb-4">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                    <Button onClick={() => setFormState("idle")}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="(123) 456-7890" />
                    </div>

                    <div className="space-y-2">
                      <Label>Inquiry Type</Label>
                      <RadioGroup
                        value={inquiryType}
                        onValueChange={setInquiryType}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general">General Inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="membership" id="membership" />
                          <Label htmlFor="membership">Membership Information</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="classes" id="classes" />
                          <Label htmlFor="classes">Class Information</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="feedback" id="feedback" />
                          <Label htmlFor="feedback">Feedback</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {inquiryType === "membership" && (
                      <div className="space-y-2">
                        <Label htmlFor="membershipType">Membership Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select membership type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic</SelectItem>
                            <SelectItem value="premium">Premium</SelectItem>
                            <SelectItem value="elite">Elite</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" required />
                    </div>

                    <Button type="submit" className="w-full" disabled={formState === "submitting"}>
                      {formState === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Location</h2>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Map location" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
                      <h3 className="font-bold text-lg">Sport House Gym</h3>
                      <p className="text-muted-foreground text-sm">
                        123 Fitness Street
                        <br />
                        New York, NY 10001
                      </p>
                      <Button size="sm" className="mt-2" asChild>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Public Transportation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Subway:</span> Lines A, C, E to 14th Street Station, 2 blocks
                      east
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Bus:</span> M14, M20, and M23 all stop within 1 block
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Bike:</span> Bike racks available outside and Citi Bike station
                      nearby
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Parking</h3>
                  <p className="text-muted-foreground mb-2">
                    Limited parking is available in our underground garage for members. Several public parking garages
                    are also located within a 2-block radius.
                  </p>
                  <p className="text-muted-foreground">
                    Members with Premium and Elite memberships receive complimentary parking for up to 2 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                Find quick answers to common questions about contacting us and our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">What is your response time for inquiries?</h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, we
                  recommend calling our main line.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">How can I schedule a tour of the facility?</h3>
                <p className="text-muted-foreground">
                  You can schedule a tour by filling out the contact form, calling us directly, or stopping by during
                  our business hours. No appointment is necessary for walk-ins.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Do you offer corporate memberships?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer special rates for corporate memberships. Please contact our corporate sales team at
                  corporate@sporthouse.com for more information.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">How do I provide feedback about my experience?</h3>
                <p className="text-muted-foreground">
                  We welcome feedback through our contact form, email, or in person at the front desk. Your input helps
                  us improve our services.
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
                <Link href="/classes">View Classes</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

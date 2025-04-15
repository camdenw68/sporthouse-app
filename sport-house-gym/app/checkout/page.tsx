"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CheckoutForm } from "@/components/checkout-form"
import PageTransition from "@/components/page-transition"

const plans = {
  basic: {
    name: "Basic",
    price: 29,
    description: "Perfect for beginners",
    features: [
      "Gym access during standard hours (6AM-10PM)",
      "Basic fitness equipment",
      "Locker room access",
      "Free fitness assessment",
    ],
  },
  premium: {
    name: "Premium",
    price: 49,
    description: "Our most popular plan",
    features: [
      "24/7 gym access",
      "Unlimited group fitness classes",
      "Sauna and steam room access",
      "Towel service",
      "Free fitness assessment",
    ],
  },
  elite: {
    name: "Elite",
    price: 79,
    description: "For serious fitness enthusiasts",
    features: [
      "24/7 gym access",
      "Unlimited group fitness classes",
      "2 personal training sessions per month",
      "Nutrition consultation",
      "VIP lounge access",
      "Priority class booking",
      "Guest passes (2 per month)",
    ],
  },
}

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get("plan")
  const [selectedPlan, setSelectedPlan] = useState(
    planParam && plans[planParam as keyof typeof plans] ? planParam : "premium",
  )
  const [billingCycle, setBillingCycle] = useState("monthly")

  const currentPlan = plans[selectedPlan as keyof typeof plans]
  const joiningFee = 49
  const discount = billingCycle === "annual" ? 0.2 : 0 // 20% discount for annual
  const monthlyPrice = currentPlan.price
  const annualPrice = monthlyPrice * 12 * (1 - discount)
  const totalPrice = billingCycle === "monthly" ? monthlyPrice + joiningFee : annualPrice + joiningFee

  return (
    <PageTransition>
      <div className="container px-4 md:px-6 py-12">
        <Link href="/memberships" className="flex items-center text-sm mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Memberships
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Checkout</h1>
              <p className="text-muted-foreground">Complete your membership registration</p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">1. Select your plan</h2>
                <RadioGroup
                  value={selectedPlan}
                  onValueChange={setSelectedPlan}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {Object.entries(plans).map(([key, plan]) => (
                    <div key={key} className="relative">
                      <RadioGroupItem value={key} id={`plan-${key}`} className="sr-only" />
                      <Label
                        htmlFor={`plan-${key}`}
                        className={`flex flex-col p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedPlan === key
                            ? "border-primary bg-primary/5 ring-2 ring-primary"
                            : "hover:border-gray-400"
                        }`}
                      >
                        <span className="font-bold">{plan.name}</span>
                        <span className="text-2xl font-bold mt-1">
                          ${plan.price}
                          <span className="text-sm font-normal text-muted-foreground">/mo</span>
                        </span>
                        <span className="text-sm text-muted-foreground mt-1">{plan.description}</span>
                        {selectedPlan === key && (
                          <div className="absolute top-2 right-2 text-primary">
                            <Check className="h-5 w-5" />
                          </div>
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">2. Choose billing cycle</h2>
                <RadioGroup
                  value={billingCycle}
                  onValueChange={setBillingCycle}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="relative">
                    <RadioGroupItem value="monthly" id="billing-monthly" className="sr-only" />
                    <Label
                      htmlFor="billing-monthly"
                      className={`flex flex-col p-4 border rounded-lg cursor-pointer transition-all ${
                        billingCycle === "monthly"
                          ? "border-primary bg-primary/5 ring-2 ring-primary"
                          : "hover:border-gray-400"
                      }`}
                    >
                      <span className="font-bold">Monthly</span>
                      <span className="text-sm text-muted-foreground mt-1">Pay month-to-month</span>
                      {billingCycle === "monthly" && (
                        <div className="absolute top-2 right-2 text-primary">
                          <Check className="h-5 w-5" />
                        </div>
                      )}
                    </Label>
                  </div>
                  <div className="relative">
                    <RadioGroupItem value="annual" id="billing-annual" className="sr-only" />
                    <Label
                      htmlFor="billing-annual"
                      className={`flex flex-col p-4 border rounded-lg cursor-pointer transition-all ${
                        billingCycle === "annual"
                          ? "border-primary bg-primary/5 ring-2 ring-primary"
                          : "hover:border-gray-400"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold">Annual</span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                          Save 20%
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1">Pay for a full year</span>
                      {billingCycle === "annual" && (
                        <div className="absolute top-2 right-2 text-primary">
                          <Check className="h-5 w-5" />
                        </div>
                      )}
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">3. Enter your details</h2>
                <CheckoutForm />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Review your membership details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">{currentPlan.name} Membership</span>
                  <span>
                    ${billingCycle === "monthly" ? monthlyPrice : (annualPrice / 12).toFixed(2)}
                    <span className="text-sm text-muted-foreground">/mo</span>
                  </span>
                </div>
                {billingCycle === "annual" && (
                  <div className="flex justify-between text-green-600">
                    <span>Annual discount (20%)</span>
                    <span>-${(monthlyPrice * 12 * discount).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="font-medium">One-time joining fee</span>
                  <span>${joiningFee}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total due today</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="bg-muted p-3 rounded-lg mt-4">
                  <div className="font-medium mb-2">What's included:</div>
                  <ul className="space-y-1">
                    {currentPlan.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full" size="lg">
                  Complete Purchase
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By completing your purchase, you agree to our{" "}
                  <Link href="/terms" className="underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

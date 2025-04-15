import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"

// Sample news data
const newsArticles = [
  {
    id: 1,
    title: "New High-Intensity Training Program Launches Next Month",
    excerpt:
      "Get ready for our most challenging workout program yet, designed to push your limits and achieve maximum results in minimum time.",
    date: "May 15, 2023",
    readTime: "4 min read",
    category: "Programs",
    image: "/placeholder.svg?height=400&width=600",
    slug: "new-high-intensity-training-program",
  },
  {
    id: 2,
    title: "Meet Our New Nutrition Coach: Sarah Johnson",
    excerpt:
      "We're excited to welcome certified nutritionist Sarah Johnson to our team. Book a consultation to transform your diet and fuel your workouts.",
    date: "May 10, 2023",
    readTime: "3 min read",
    category: "Team",
    image: "/placeholder.svg?height=400&width=600",
    slug: "meet-our-new-nutrition-coach",
  },
  {
    id: 3,
    title: "Summer Fitness Challenge: 30 Days to Your Best Shape",
    excerpt:
      "Join our community-wide fitness challenge starting June 1st. Compete with fellow members, track your progress, and win amazing prizes.",
    date: "May 5, 2023",
    readTime: "5 min read",
    category: "Events",
    image: "/placeholder.svg?height=400&width=600",
    slug: "summer-fitness-challenge",
  },
  {
    id: 4,
    title: "Gym Expansion: New Equipment Coming Soon",
    excerpt:
      "We're expanding our facility with state-of-the-art equipment. Check out what's coming and how it will enhance your workout experience.",
    date: "April 28, 2023",
    readTime: "3 min read",
    category: "Facility",
    image: "/placeholder.svg?height=400&width=600",
    slug: "gym-expansion-new-equipment",
  },
  {
    id: 5,
    title: "The Science Behind Effective Recovery Techniques",
    excerpt:
      "Learn about the latest research on recovery methods and how to implement them into your routine for better results and fewer injuries.",
    date: "April 20, 2023",
    readTime: "6 min read",
    category: "Fitness Tips",
    image: "/placeholder.svg?height=400&width=600",
    slug: "science-behind-recovery-techniques",
  },
  {
    id: 6,
    title: "Member Spotlight: John's 100-Pound Weight Loss Journey",
    excerpt:
      "Read the inspiring story of John, who transformed his life and lost over 100 pounds with dedication and support from our trainers.",
    date: "April 15, 2023",
    readTime: "7 min read",
    category: "Success Stories",
    image: "/placeholder.svg?height=400&width=600",
    slug: "member-spotlight-johns-weight-loss-journey",
  },
]

export default function NewsPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Latest News & Updates
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-[700px] mx-auto">
              Stay up to date with the latest fitness trends, gym updates, and member success stories.
            </p>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <Card
                  key={article.id}
                  className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                      {article.category}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      <Link href={`/news/${article.slug}`}>{article.title}</Link>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 text-xs">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <Link href={`/news/${article.slug}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-300 mb-8">
                Get the latest fitness tips, gym updates, and exclusive offers delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="px-6">Subscribe</Button>
              </div>
              <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

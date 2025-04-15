import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"

// This would typically come from a CMS or API
const getArticleData = (slug: string) => {
  // Sample article data
  return {
    title: "New High-Intensity Training Program Launches Next Month",
    date: "May 15, 2023",
    readTime: "4 min read",
    category: "Programs",
    image: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Michael Johnson",
      role: "Head Fitness Trainer",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    content: `
      <p class="mb-4">Sport House is excited to announce the launch of our new High-Intensity Training (HIT) program starting next month. This program has been carefully designed by our expert trainers to help members achieve maximum results in minimum time.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">What is High-Intensity Training?</h2>
      
      <p class="mb-4">High-Intensity Training is a workout strategy that involves short, intense bursts of exercise followed by brief recovery periods. This approach keeps your heart rate up and burns more fat in less time compared to traditional steady-state workouts.</p>
      
      <p class="mb-4">Our new program incorporates the latest research in exercise science and has been tested with a select group of members who saw remarkable results in just 6 weeks:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Average fat loss of 3.5% body fat</li>
        <li class="mb-2">Significant increase in cardiovascular endurance</li>
        <li class="mb-2">Improved muscle definition and strength</li>
        <li class="mb-2">Reduced workout time with better results</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Program Details</h2>
      
      <p class="mb-4">The HIT program will be offered in small group sessions of no more than 8 participants to ensure personalized attention. Each session lasts 45 minutes and includes:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Dynamic warm-up (5 minutes)</li>
        <li class="mb-2">Circuit-based strength training (20 minutes)</li>
        <li class="mb-2">High-intensity cardio intervals (15 minutes)</li>
        <li class="mb-2">Recovery and mobility work (5 minutes)</li>
      </ul>
      
      <p class="mb-4">Classes will be available at various times throughout the day, including early morning, lunch hour, and evening sessions to accommodate different schedules.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Who Should Join?</h2>
      
      <p class="mb-4">This program is ideal for:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Members looking to break through fitness plateaus</li>
        <li class="mb-2">Busy individuals who want efficient, effective workouts</li>
        <li class="mb-2">Those preparing for athletic events or competitions</li>
        <li class="mb-2">Anyone seeking to accelerate their fitness results</li>
      </ul>
      
      <p class="mb-4">While the program is challenging, our trainers will provide modifications for different fitness levels, making it accessible to most members.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">How to Sign Up</h2>
      
      <p class="mb-4">Registration opens on May 20th and space is limited. Premium and Elite members will have priority registration for the first 48 hours.</p>
      
      <p class="mb-4">To secure your spot, visit the front desk or log into your member portal. The program will run for 8 weeks, and participants will receive a complimentary body composition analysis before and after to track their progress.</p>
      
      <p class="mb-8">We're excited to bring this cutting-edge training approach to our community and can't wait to see the transformations that will result!</p>
    `,
    relatedArticles: [
      {
        id: 2,
        title: "Meet Our New Nutrition Coach: Sarah Johnson",
        excerpt:
          "We're excited to welcome certified nutritionist Sarah Johnson to our team. Book a consultation to transform your diet and fuel your workouts.",
        date: "May 10, 2023",
        image: "/placeholder.svg?height=400&width=600",
        slug: "meet-our-new-nutrition-coach",
      },
      {
        id: 3,
        title: "Summer Fitness Challenge: 30 Days to Your Best Shape",
        excerpt:
          "Join our community-wide fitness challenge starting June 1st. Compete with fellow members, track your progress, and win amazing prizes.",
        date: "May 5, 2023",
        image: "/placeholder.svg?height=400&width=600",
        slug: "summer-fitness-challenge",
      },
    ],
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleData(params.slug)

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Article Header */}
        <section className="pt-8 pb-4 md:pt-12 md:pb-8">
          <div className="container px-4 md:px-6">
            <Link href="/news" className="flex items-center text-sm mb-8 hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>

            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">{article.category}</span>
                <span className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {article.date}
                </span>
                <span className="flex items-center text-muted-foreground text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">{article.title}</h1>

              <div className="flex items-center gap-4 mb-8">
                <Image
                  src={article.author.avatar || "/placeholder.svg"}
                  alt={article.author.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{article.author.name}</p>
                  <p className="text-sm text-muted-foreground">{article.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="w-full h-[400px] md:h-[500px] relative mb-8">
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" priority />
        </div>

        {/* Article Content */}
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

                {/* Share Links */}
                <div className="mt-12 pt-6 border-t">
                  <p className="font-semibold mb-4">Share this article:</p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Related Articles</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {article.relatedArticles.map((related) => (
                        <div key={related.id} className="flex gap-4">
                          <Image
                            src={related.image || "/placeholder.svg"}
                            alt={related.title}
                            width={80}
                            height={80}
                            className="rounded-md object-cover"
                          />
                          <div>
                            <h3 className="font-medium line-clamp-2 hover:text-primary transition-colors">
                              <Link href={`/news/${related.slug}`}>{related.title}</Link>
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">{related.date}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="mt-6 bg-primary text-primary-foreground">
                    <CardHeader>
                      <CardTitle>Ready to join?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Experience our new High-Intensity Training program and transform your fitness journey.
                      </p>
                      <Button variant="secondary" className="w-full" asChild>
                        <Link href="/memberships">View Membership Options</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

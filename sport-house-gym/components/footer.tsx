import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/sport-house-logo.png"
                alt="Sport House"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-4">
              Train hard. Get results. Join our community of fitness enthusiasts and transform your body and mind.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/memberships" className="hover:text-white transition-colors">
                  Memberships
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-white transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="hover:text-white transition-colors">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>7:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">123 Fitness Street</p>
              <p className="mb-2">New York, NY 10001</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p className="mb-4">Email: info@sporthouse.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Sport House Athletic Center. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

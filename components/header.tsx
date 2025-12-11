"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import Image from "next/image"
import logo from "@/public/r-h-logo.png"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="ritzy healthcare logo"
              width={40}
              height={40}
              className="h-50 w-50 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Our Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/careers" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA and More */}
          <div className="flex items-center gap-4">
            <a href="tel:01164105049" className="hidden md:inline-flex items-center gap-2 text-primary font-medium">
              <Phone className="w-4 h-4" />
              01164 105 049
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Request Assessment
            </Link>
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/services"
              className="block text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link href="/about" className="block text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link
              href="/careers"
              className="block text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="block text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

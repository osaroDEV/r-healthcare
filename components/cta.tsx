"use client"

import { Phone, Mail, Globe } from "lucide-react"
import Link from "next/link"
import AnimateOnScroll from "./animate-on-scroll"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-3xl md:text-4xl text-primary-foreground mb-6">
            <span className="font-serif italic">Need high-quality </span>
            <span className="font-bold">domiciliary care?</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="text-primary-foreground/90 text-lg mb-10 max-w-2xl mx-auto">
            Get in touch with Ritzy Healthcare today. We're here to help you find the perfect care solution for yourself
            or your loved one.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale" delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="tel:01164105049"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              0116 410 5049
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Enquire Online
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80 text-sm">
            <a
              href="mailto:info@ritzyhealthcare.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@ritzyhealthcare.com
            </a>
            <a
              href="https://www.ritzyhealthcare.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              www.ritzyhealthcare.com
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

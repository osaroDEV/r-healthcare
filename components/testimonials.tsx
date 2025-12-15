"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Link from "next/link"
import AnimateOnScroll from "./animate-on-scroll"

const testimonials = [
  {
    quote:
      "Ritzy Healthcare provided outstanding support for my mother. Their professionalism, warmth and reliability gave our family peace of mind.",
    author: "Sarah T.",
    location: "Leicester",
  },
  {
    quote: "From the first assessment, we felt listened to. The carers treat my father with dignity and patience.",
    author: "Michael R.",
    location: "Birmingham",
  },
  {
    quote:
      "The team went above and beyond to understand Dad's needs. He's so much happier with the personalised support he receives.",
    author: "Emma W.",
    location: "Nottingham",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll animation="scale">
          <Quote className="w-12 h-12 text-primary mx-auto mb-8" />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up">
          <h2 className="text-3xl md:text-4xl text-accent-foreground mb-12">
            <span className="font-serif italic">Client </span>
            <span className="font-bold">Testimonials</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="relative">
            <blockquote className="text-xl md:text-2xl text-accent-foreground/90 leading-relaxed mb-8">
              "{testimonials[current].quote}"
            </blockquote>
            <div className="text-accent-foreground font-medium">{testimonials[current].author}</div>
            <div className="text-accent-foreground/70 text-sm">{testimonials[current].location}</div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-accent-foreground/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-accent-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === current ? "bg-primary" : "bg-accent-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-accent-foreground/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-accent-foreground" />
            </button>
          </div>

          {/* <Link href="#" className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:underline">
            Read More Reviews
          </Link> */}
        </AnimateOnScroll>
      </div>
    </section>
  )
}

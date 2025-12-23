"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import AnimateOnScroll from "./animate-on-scroll"

const services = [
  {
    title: "Personal Care & Daily Living",
    description:
      "Discreet assistance with washing, dressing, grooming and toileting, delivered with respect and privacy.",
    image: "/personal-care.jpg",
    link: "/services/personal-care",
  },
  {
    title: "Companionship & Social Support",
    description: "Perfect for individuals who live alone, need emotional support or wish to stay socially active.",
    image: "/caregiver-and-elderly-person-having-tea-together.jpg",
    link: "/services/companionship-care",
  },
  {
    title: "Medication Administration",
    description: "Prompting, administering and monitoring medication compliance with professional care.",
    image: "/medication-assistance.png",
    link: "/services/medication-administration",
  },
  {
    title: "Meal Preparation & Nutrition",
    description: "Preparing fresh, culturally appropriate meals and supporting hydration and dietary needs.",
    image: "/meal-preparation.jpg",
    link: "/services/meal-preparation",
  },
  {
    title: "Respite Care for Families",
    description: "A trusted break for families and unpaid carers with flexible hours, days or short-term stays.",
    image: "/family-relaxing-while-professional-carer-helps.jpg",
    link: "/services/respite-care",
  },
  {
    title: "Hospital Discharge & Reablement",
    description: "Fast, safe and coordinated support following a hospital stay, working with healthcare teams.",
    image: "/nurse-helping-patient-after-hospital-discharge.jpg",
    link: "/services/hospital-discharge",
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-3xl md:text-4xl mb-12">
            <span className="font-serif italic">Our Home Care </span>
            <span className="font-bold">Services</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll key={index} animation="scale" delay={index * 100}>
              <Link href={service.link} className="group relative overflow-hidden rounded-2xl aspect-4/3 block">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-accent/90 via-accent/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

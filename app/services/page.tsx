import Header from "@/components/header"
import Footer from "@/components/footer"
import { Check, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Personal Care",
    description:
      "Discreet assistance with washing & bathing, dressing & grooming, toileting, continence support and oral hygiene. Always delivered with respect and privacy.",
    icon: "🛁",
    items: ["Washing & bathing", "Dressing & grooming", "Toileting", "Continence support", "Oral hygiene"],
  },
  {
    title: "Companionship Care",
    description: "Perfect for individuals who live alone, need emotional support or wish to stay socially active.",
    icon: "💬",
    items: [
      "Conversation and company",
      "Walks and outings",
      "Reading, hobbies and daily routines",
      "Support with appointments",
    ],
  },
  {
    title: "Medication Support",
    description: "Professional assistance with your medication needs to ensure compliance and safety.",
    icon: "💊",
    items: [
      "Prompting",
      "Administering (where appropriate)",
      "Monitoring compliance",
      "Reporting issues to health professionals",
    ],
  },
  {
    title: "Meal Preparation & Nutrition",
    description: "Ensuring proper nutrition and hydration with meals tailored to your preferences and needs.",
    icon: "🍽️",
    items: [
      "Preparing fresh meals",
      "Supporting hydration",
      "Culturally appropriate meals",
      "Monitoring dietary requirements",
    ],
  },
  {
    title: "Domestic Support",
    description: "Keeping your home clean, organised and comfortable so you can focus on what matters.",
    icon: "🏠",
    items: ["Cleaning", "Laundry", "Shopping", "Home organisation"],
  },
  {
    title: "Respite Care",
    description: "A trusted break for families and unpaid carers. Flexible hours, days or short-term stays.",
    icon: "🤝",
    items: [
      "Flexible scheduling",
      "Short-term or ongoing support",
      "Peace of mind for families",
      "Professional, reliable carers",
    ],
  },
  {
    title: "Hospital Discharge / Reablement",
    description:
      "Fast, safe and coordinated support following a hospital stay. We work closely with nurses, OTs and discharge teams.",
    icon: "🏥",
    items: [
      "Coordinated discharge planning",
      "Recovery support at home",
      "Collaboration with healthcare teams",
      "Reablement programmes",
    ],
  },
  {
    title: "End-of-Life Care",
    description: "Supporting individuals and families during difficult times with compassion, dignity and peace.",
    icon: "🕊️",
    items: ["Compassionate support", "Dignity and comfort", "Family liaison", "24/7 availability"],
  },
]

const processSteps = [
  { step: "1", title: "Initial Consultation", description: "Free and friendly discussion to understand your needs" },
  { step: "2", title: "Comprehensive Care Assessment", description: "Detailed evaluation of care requirements" },
  { step: "3", title: "A Tailored Care Plan", description: "Personalised plan designed around your needs" },
  { step: "4", title: "Care Commences", description: "Your matched carer begins providing support" },
  {
    step: "5",
    title: "Continuous Review & Adjustments",
    description: "Regular reviews to ensure care evolves with you",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-accent text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="font-serif italic">Our Domiciliary </span>
            <span className="font-bold">Home Care Services</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Comprehensive, person-centred care services designed to help you or your loved one live independently,
            safely and with dignity at home.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Process */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            <span className="font-serif italic">How Our </span>
            <span className="font-bold">Care Process Works</span>
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to discuss your care needs?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Our friendly team is here to help you find the right care solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Request a Care Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:01164105049"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              01164 105 049
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

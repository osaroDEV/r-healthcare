import Header from "@/components/header"
import Footer from "@/components/footer"
import { Heart, Shield, Star, Users, Target, Eye, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We care deeply about the people we support.",
  },
  {
    icon: Shield,
    title: "Respect",
    description: "Every person is valued and treated with dignity.",
  },
  {
    icon: Star,
    title: "Integrity",
    description: "We are honest, transparent and ethical.",
  },
  {
    icon: Target,
    title: "Quality",
    description: "We deliver safe, high-standard, personalised care.",
  },
  {
    icon: Users,
    title: "Accountability",
    description: "We take responsibility for every action.",
  },
]

const trustReasons = [
  "A focus on person-centred outcomes, not tasks",
  "Transparent communication with families",
  "Responsive management and fast onboarding",
  "Carers who love what they do",
  "Strong safeguarding and zero-tolerance for poor care",
  "Tailored care plans that adapt as your needs change",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-accent text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="font-serif italic">About </span>
            <span className="font-bold">Ritzy Healthcare</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            A professional domiciliary care provider committed to delivering safe, compassionate and personalised care.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">
                <span className="font-serif italic">Who </span>
                <span className="font-bold">We Are</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ritzy Healthcare Ltd is a professional domiciliary care provider committed to delivering{" "}
                <strong className="text-foreground">safe, compassionate and personalised care</strong> to individuals
                who wish to remain independent in their own homes.
              </p>
              <p className="text-lg text-muted-foreground">
                We support adults of all ages with practical daily tasks, personal care routines and emotional
                companionship.
              </p>
            </div>
            <div className="relative">
              <img
                src="/diverse-care-team-smiling-together-in-professional.jpg"
                alt="Ritzy Healthcare care team"
                className="rounded-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                To empower every individual receiving our care to live a{" "}
                <strong className="text-foreground">fulfilled, independent and dignified life</strong> in the comfort of
                their home.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg">
                To be one of the UK's most trusted and respected home care providers, recognised for{" "}
                <strong className="text-foreground">excellence, compassion and true respect</strong> for every person we
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            <span className="font-serif italic">Our </span>
            <span className="font-bold">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Trust Us */}
      <section className="py-16 md:py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-8">
                <span className="font-serif italic">Why Families </span>
                <span className="font-bold">Trust Ritzy Healthcare</span>
              </h2>
              <ul className="space-y-4">
                {trustReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-white/90">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/happy-elderly-person-with-family-and-professional-.jpg"
                alt="Family trusting Ritzy Healthcare"
                className="rounded-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            <span className="font-serif italic">Ready to </span>
            <span className="font-bold">Learn More?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact our friendly team to discuss how we can support you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary/10 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

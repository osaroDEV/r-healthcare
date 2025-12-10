import Header from "@/components/header"
import Footer from "@/components/footer"
import { Briefcase, GraduationCap, Clock, TrendingUp, Users, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

const benefits = [
  { icon: Briefcase, title: "Competitive Pay Rates", description: "We value our carers and pay accordingly" },
  { icon: Clock, title: "Flexible Shifts", description: "Work patterns that suit your lifestyle" },
  { icon: GraduationCap, title: "Full Training & Development", description: "Comprehensive training programmes" },
  { icon: Heart, title: "Paid Induction", description: "Get paid while you learn" },
  { icon: TrendingUp, title: "Career Progression", description: "Clear paths for advancement" },
  { icon: Users, title: "Supportive Management", description: "A team that has your back" },
]

const roles = [
  {
    title: "Domiciliary Care Workers",
    description: "Provide essential daily care and support to clients in their homes.",
    type: "Full-time / Part-time",
  },
  {
    title: "Senior Carers",
    description: "Lead care delivery and mentor junior team members.",
    type: "Full-time",
  },
  {
    title: "Team Leaders",
    description: "Coordinate care teams and ensure quality service delivery.",
    type: "Full-time",
  },
  {
    title: "Coordinators",
    description: "Manage scheduling, client relationships and care planning.",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-accent text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="font-serif italic">Join </span>
            <span className="font-bold">Ritzy Healthcare</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mb-8">
            We recruit people who are passionate, reliable and genuinely caring. Build a rewarding career making a real
            difference in people's lives.
          </p>
          <Link
            href="#apply"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            <span className="font-serif italic">Why Work </span>
            <span className="font-bold">With Us</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            <span className="font-serif italic">Roles We </span>
            <span className="font-bold">Recruit</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{role.title}</h3>
                  <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {role.type}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{role.description}</p>
                <Link
                  href="#apply"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Apply for this role
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">
            <span className="font-serif italic">Apply </span>
            <span className="font-bold">Now</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ready to join our team? Fill out the form below and we'll be in touch.
          </p>
          <form className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                Role You're Applying For *
              </label>
              <select
                id="role"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select a role</option>
                <option value="care-worker">Domiciliary Care Worker</option>
                <option value="senior-carer">Senior Carer</option>
                <option value="team-leader">Team Leader</option>
                <option value="coordinator">Coordinator</option>
              </select>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                Tell us about your experience
              </label>
              <textarea
                id="experience"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Share your relevant experience and why you'd like to join Ritzy Healthcare..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

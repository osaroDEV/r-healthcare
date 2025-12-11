import Header from "@/components/header"
import Footer from "@/components/footer"
import { Check, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function CompanionshipCarePage() {
  const items = [
    "Conversation and company",
    "Walks and outings",
    "Reading, hobbies and daily routines",
    "Support with appointments",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative text-white py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/elderly-woman-laughing-with-caregiver-companion-in.jpg')" }}
        />
        <div className="absolute inset-0 bg-accent/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Companionship Care</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="font-serif italic">Companionship </span>
            <span className="font-bold">Care</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Perfect for individuals who live alone, need emotional support or wish to stay socially active.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Meaningful Connection & Social Engagement</h2>
              <p className="text-muted-foreground mb-6">
                Loneliness can significantly impact health and wellbeing. Our companionship care service provides
                genuine human connection, conversation and social engagement to brighten your day and keep you active.
              </p>
              <p className="text-muted-foreground mb-8">
                Whether it's sharing a cup of tea, enjoying a walk in the park, pursuing hobbies together, or simply
                having someone to talk to, our friendly carers are here to provide the company and support you deserve.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">What We Provide</h3>
              <ul className="space-y-3 mb-8">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Request a Care Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:01164105049"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/5 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  01164 105 049
                </a>
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Benefits of Companionship Care</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Reduced Loneliness</h4>
                    <p className="text-sm text-muted-foreground">
                      Regular visits provide meaningful social interaction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Improved Mental Health</h4>
                    <p className="text-sm text-muted-foreground">Social engagement supports emotional wellbeing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Stay Active & Engaged</h4>
                    <p className="text-sm text-muted-foreground">Continue hobbies and activities you enjoy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Peace of Mind for Family</h4>
                    <p className="text-sm text-muted-foreground">Knowing your loved one has regular company.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Explore Our Other Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/services/personal-care"
              className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground">Personal Care</h3>
              <p className="text-sm text-muted-foreground mt-1">Daily personal assistance</p>
            </Link>
            <Link
              href="/services/medication-support"
              className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground">Medication Support</h3>
              <p className="text-sm text-muted-foreground mt-1">Safe medication management</p>
            </Link>
            <Link
              href="/services/respite-care"
              className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground">Respite Care</h3>
              <p className="text-sm text-muted-foreground mt-1">Relief for family carers</p>
            </Link>
            <Link
              href="/services/domestic-support"
              className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground">Domestic Support</h3>
              <p className="text-sm text-muted-foreground mt-1">Housekeeping services</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

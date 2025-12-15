"use client";

import AnimateOnScroll from "@/components/animate-on-scroll";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ArrowRight, Check, Phone } from "lucide-react";
import Link from "next/link";

export default function DomesticSupportPage() {
  const items = ["Cleaning", "Laundry", "Shopping", "Home organisation"];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/caregiver-helping-with-housework-in-bright-clean-h.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-accent/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-down">
            <nav className="text-white/60 text-sm mb-6">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Domestic Support</span>
            </nav>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="font-serif italic">Domestic </span>
              <span className="font-bold">Support</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="text-xl text-white/80 max-w-3xl">
              Keeping your home clean, organised and comfortable so you can
              focus on what matters most.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <AnimateOnScroll animation="fade-up">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  A Clean, Comfortable Home Environment
                </h2>
                <AnimateOnScroll animation="fade-up" delay={100}>
                  <p className="text-muted-foreground mb-6">
                    Maintaining a clean and tidy home can become challenging as
                    we age or when dealing with health conditions. Our domestic
                    support services help keep your home comfortable, safe and
                    welcoming.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    From light housework to laundry and shopping, our carers
                    ensure your living environment supports your wellbeing and
                    independence.
                  </p>
                </AnimateOnScroll>
              </AnimateOnScroll>
              <h3 className="text-xl font-bold text-foreground mb-4">
                What We Provide
              </h3>
              <ul className="space-y-3 mb-8">
                {items.map((item, index) => (
                  <AnimateOnScroll
                    key={index}
                    animation="fade-right"
                    delay={index * 80}
                  >
                    <li
                      key={index}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>
              <AnimateOnScroll animation="fade-up" delay={400}>
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
              </AnimateOnScroll>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8">
              <AnimateOnScroll animation="fade-up">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  How We Help at Home
                </h3>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Light Housework
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Vacuuming, dusting, tidying and general cleaning.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Laundry Services
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Washing, drying, ironing and putting away clothes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Shopping Assistance
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Grocery shopping and collecting essentials.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Home Organisation
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Keeping your home safe and clutter-free.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Explore Our Other Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/services/personal-care"
              className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground">Personal Care</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Daily personal assistance
              </p>
            </Link>
            <Link
              href="/services/meal-preparation"
              className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground">
                Meal Preparation
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Nutrition & hydration
              </p>
            </Link>
            <Link
              href="/services/companionship-care"
              className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground">
                Companionship Care
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Social support & company
              </p>
            </Link>
            <Link
              href="/services/respite-care"
              className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground">Respite Care</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Relief for family carers
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

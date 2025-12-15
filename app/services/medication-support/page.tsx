"use client";

import AnimateOnScroll from "@/components/animate-on-scroll";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ArrowRight, Check, Phone } from "lucide-react";
import Link from "next/link";

export default function MedicationSupportPage() {
  const items = [
    "Prompting",
    "Administering (where appropriate)",
    "Monitoring compliance",
    "Reporting issues to health professionals",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/caregiver-helping-elderly-person-with-medication-.jpg')",
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
              <span className="text-white">Medication Support</span>
            </nav>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="font-serif italic">Medication </span>
              <span className="font-bold">Support</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="text-xl text-white/80 max-w-3xl">
              Professional assistance with your medication needs to ensure
              compliance and safety.
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
                Safe & Reliable Medication Management
              </h2>
              <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="text-muted-foreground mb-6">
                Managing multiple medications can be challenging. Our trained
                carers provide professional medication support to ensure you
                take the right medication at the right time, every time.
              </p>
              <p className="text-muted-foreground mb-8">
                We work closely with healthcare professionals to monitor your
                medication routine and report any concerns, giving you and your
                family complete peace of mind.
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
                Our Medication Support Process
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
                      Medication Assessment
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We review your medication routine and requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Trained Carers
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      All carers receive medication handling training.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Accurate Records
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Detailed documentation of all medication support.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Healthcare Liaison
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We communicate with GPs and pharmacists as needed.
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
              href="/services/hospital-discharge"
              className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground">
                Hospital Discharge
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Recovery support at home
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import { Clock, Home, MapPin, Shield, Star, UserCheck } from "lucide-react";
import AnimateOnScroll from "./animate-on-scroll";

const features = [
  {
    icon: Star,
    title: "CQC-focused, high-quality home care",
    description:
      "Our services meet the highest standards set by the Care Quality Commission.",
  },
  {
    icon: UserCheck,
    title: "Experienced, vetted carers",
    description:
      "Fully trained, DBS-checked carers carefully selected for their compassion and expertise.",
  },
  {
    icon: Clock,
    title: "Flexible visits",
    description:
      "From 30 minutes to 24-hour support, we adapt to your schedule and needs.",
  },
  {
    icon: Home,
    title: "Promoting independence",
    description:
      "Personalised care that empowers you to live life on your own terms.",
  },
  {
    icon: MapPin,
    title: "Serving clients across the UK",
    description:
      "Local support with a national presence, wherever you need us.",
  },
  {
    icon: Shield,
    title: "Kind, safe & trustworthy",
    description:
      "Fully compliant services you can rely on, built on transparency and integrity.",
  },
];

export default function Features() {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            <span className="font-serif italic">Why Choose </span>
            <span className="font-bold">Ritzy Healthcare?</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimateOnScroll
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                  <feature.icon
                    className="w-8 h-8 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

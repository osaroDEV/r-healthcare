import Link from "next/link"
import { Phone } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/elderly-person-smiling-with-caregiver-in-bright-ho.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-transparent" />
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-16 md:h-20" preserveAspectRatio="none">
          <path d="M0,80 L0,40 Q720,100 1440,40 L1440,80 Z" className="fill-secondary" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            <span className="font-serif italic font-normal">Ritzy Healthcare</span>
            <br />
            <span className="font-sans font-bold">Compassionate, Reliable</span>
            <br />
            <span className="font-serif italic font-normal">Person-Centred Care</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
            Supporting you or your loved one to live independently, safely and with dignity at home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Request a Care Assessment
            </Link>
            <a
              href="tel:01164105049"
              className="inline-flex items-center justify-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Speak to Our Care Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

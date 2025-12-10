import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Personal Care", href: "#" },
    { label: "Companionship Care", href: "#" },
    { label: "Medication Support", href: "#" },
    { label: "Meal Preparation", href: "#" },
    { label: "Respite Care", href: "#" },
    { label: "Hospital Discharge", href: "#" },
  ],
  about: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about" },
    { label: "Our Values", href: "/about" },
    { label: "Careers", href: "/careers" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "#" },
    { label: "Request Assessment", href: "/contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Contact - Updated for Ritzy Healthcare */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                <span className="text-primary">Ritzy</span>
                <span className="text-white"> Healthcare</span>
              </span>
            </Link>
            <p className="text-accent-foreground/70 text-sm mb-4">
              Compassionate, reliable and person-centred home care services.
            </p>
            <div className="space-y-2 text-sm text-accent-foreground/70 mb-6">
              <a href="tel:01164105049" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                01164 105 049
              </a>
              <a
                href="mailto:info@ritzyhealthcare.co.uk"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@ritzyhealthcare.co.uk
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-accent-foreground/70 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-foreground/70 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-foreground/70 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-foreground/70 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-4">About Us</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-accent-foreground/70">
              <p className="font-medium text-white mb-2">Opening Hours</p>
              <p>Mon–Fri: 9am–6pm</p>
              <p>Emergency Line: 24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Updated copyright */}
        <div className="border-t border-accent-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-accent-foreground/60 text-sm">
            © {new Date().getFullYear()} Ritzy Healthcare Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-accent-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-accent-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-accent-foreground/60 hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

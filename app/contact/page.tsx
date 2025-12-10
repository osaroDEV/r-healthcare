import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, Globe, Clock, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-accent text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="font-serif italic">Get in </span>
            <span className="font-bold">Touch</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            We're here to help you choose the right care. Contact our friendly team today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl mb-8">
                <span className="font-serif italic">Contact </span>
                <span className="font-bold">Information</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <a href="tel:01164105049" className="text-muted-foreground hover:text-primary transition-colors">
                      01164 105 049
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:info@ritzyhealthcare.co.uk"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@ritzyhealthcare.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Website</h3>
                    <a
                      href="https://www.ritzyhealthcare.co.uk"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      www.ritzyhealthcare.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground">Address to be confirmed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Opening Hours</h3>
                    <p className="text-muted-foreground">Mon–Fri: 9am–6pm</p>
                    <p className="text-muted-foreground">Emergency Line: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <h2 className="text-3xl md:text-4xl mb-8">
                <span className="font-serif italic">Send an </span>
                <span className="font-bold">Enquiry</span>
              </h2>

              <form className="bg-card border border-border rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="careType" className="block text-sm font-medium text-foreground mb-2">
                    Type of Care Needed
                  </label>
                  <select
                    id="careType"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select care type</option>
                    <option value="personal-care">Personal Care</option>
                    <option value="companionship">Companionship Care</option>
                    <option value="medication">Medication Support</option>
                    <option value="meal-prep">Meal Preparation</option>
                    <option value="domestic">Domestic Support</option>
                    <option value="respite">Respite Care</option>
                    <option value="hospital-discharge">Hospital Discharge</option>
                    <option value="end-of-life">End-of-Life Care</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your care needs..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-muted/30 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Map will be displayed here once office address is confirmed</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

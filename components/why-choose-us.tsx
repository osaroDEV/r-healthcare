import { Check } from "lucide-react"
import Link from "next/link"

const reasons = [
  "Carefully selected, DBS-checked carers",
  "Trained to the highest standards",
  "Matched to each client's needs and personality",
  "Person-centred outcomes, not just tasks",
  "Transparent communication with families",
  "Strong safeguarding and zero-tolerance for poor care",
  "Tailored care plans that adapt as needs change",
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              <span className="font-serif italic">A Team </span>
              <span className="font-bold">You Can Trust</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Ritzy Healthcare, we believe everyone deserves to feel valued, respected and cared for. Our carers are
              carefully selected, trained to the highest standards and matched to each client's needs and personality.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>

            {/* <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Meet Our Care Team
            </Link> */}
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/professional-healthcare-team-smiling-together.jpg" alt="Our care team" className="w-full h-full object-cover" />
            </div>
            {/* <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg max-w-[220px]">
              <div className="text-4xl font-bold mb-1">100%</div>
              <p className="text-sm text-primary-foreground/90">commitment to safe, high-standard, personalised care</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

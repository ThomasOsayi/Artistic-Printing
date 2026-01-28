import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: '5878 West Pico Boulevard\nLos Angeles, CA 90019',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '(323) 939-8911',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@artisticprinting.com',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Monday - Friday: 8am - 6pm\nSaturday: 9am - 2pm',
  },
]

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-slate-300 max-w-2xl">
            Ready to start your project? Get a free quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">
                        First Name *
                      </label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">
                        Last Name *
                      </label>
                      <Input placeholder="Smith" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Company</label>
                    <Input placeholder="Your Company" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">
                        Email *
                      </label>
                      <Input type="email" placeholder="john@company.com" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">
                        Phone *
                      </label>
                      <Input type="tel" placeholder="(323) 555-0123" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">
                      Project Details *
                    </label>
                    <Textarea
                      placeholder="Tell us what you need printed, quantities, timeline, etc."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{item.title}</div>
                        <div className="text-slate-600 whitespace-pre-line">{item.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-slate-100 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm">Interactive Map</div>
                  <div className="text-xs">5878 W Pico Blvd, Los Angeles</div>
                </div>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                <h4 className="font-semibold text-slate-900 mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-slate-600">
                  We respond to all quote requests within 24 hours during business days. For urgent
                  projects, call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

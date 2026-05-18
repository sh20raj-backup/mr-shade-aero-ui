import Navbar from '@/components/marketing/nav'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Section } from '@/components/ui/section'

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[var(--background-landing)] text-[var(--foreground-landing)]">
      <Navbar isAuthenticated={false} />
      <Section className="py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Contact Us</h1>
            <p className="text-muted-foreground mx-auto max-w-[700px] text-lg">
              We look forward to hearing your suggestions and needs. Please fill out the form below and our team will contact you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-5 lg:gap-16">
            <div className="md:col-span-3">
              <form className="glass-1 grid gap-6 rounded-2xl p-8 shadow-lg">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Please enter your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Please enter your company name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@company.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Requirements</Label>
                  <Textarea
                    id="message"
                    placeholder="Please tell us your requirements, e.g., custom features, SSO integration, deployment needs, etc."
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" variant="default" className="w-full">
                  Submit
                </Button>
                <p className="text-muted-foreground text-center text-sm">
                  By submitting, you agree to our <a href="/privacy" className="text-brand hover:underline">Privacy Policy</a>
                </p>
              </form>
            </div>
            <div className="flex flex-col gap-8 md:col-span-2">
              <div className="glass-1 flex flex-col gap-4 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold">Enterprise Custom Services</h3>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2">
                    <div className="text-brand h-5 w-5 shrink-0">•</div>
                    <span>Dedicated Customer Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-brand h-5 w-5 shrink-0">•</div>
                    <span>Customized Deployment Solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-brand h-5 w-5 shrink-0">•</div>
                    <span>Single Sign-On (SSO) Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-brand h-5 w-5 shrink-0">•</div>
                    <span>Data Security and Compliance Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-brand h-5 w-5 shrink-0">•</div>
                    <span>Professional Training and Consulting Services</span>
                  </li>
                </ul>
              </div>

              <div className="glass-1 flex flex-col gap-4 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold">Other Contact Methods</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-medium">Customer Support</p>
                    <p className="text-muted-foreground">support@yourcompany.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Business Cooperation</p>
                    <p className="text-muted-foreground">sales@yourcompany.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Media Inquiry</p>
                    <p className="text-muted-foreground">press@yourcompany.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
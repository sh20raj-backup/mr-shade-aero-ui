import Navbar from '@/components/marketing/nav'
import { Section } from '@/components/ui/section'

export default function TermsPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[var(--background-landing)] text-[var(--foreground-landing)]">
      <Navbar isAuthenticated={false} />
      <Section className="py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: May 18, 2026
            </p>
          </div>

          <div className="glass-1 p-8 rounded-2xl shadow-lg flex flex-col gap-6 text-left leading-relaxed">
            <p>
              Welcome to <strong>Aero UI</strong>. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, templates, and application scaffold generation services. By accessing or using our platform, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-4 text-foreground">1. User License</h2>
            <p>
              We grant you a non-exclusive, non-transferable, revocable license to use our premium landing page templates and code generators to design, build, and deploy your personal or commercial applications, subject to these Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-4 text-foreground">2. Code & Design Ownership</h2>
            <p>
              You maintain 100% complete ownership and control over any application layout, copy, or software configurations synthesized through our platform. We make no intellectual property claims over your generated products.
            </p>

            <h2 className="text-2xl font-semibold mt-4 text-foreground">3. Prohibited Conduct</h2>
            <p>
              You agree not to use the platform for any illegal, harmful, or abusive activities, including but not limited to:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Engaging in data mining, crawling, or scrape operations that degrade platform performance.</li>
              <li>Generating applications that host malicious, fraudulent, or defamatory content.</li>
              <li>Circumventing or attempting to bypass platform usage limits.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4 text-foreground">4. Disclaimers & Limitation of Liability</h2>
            <p>
              THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED. IN NO EVENT SHALL AERO UI BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF THE TEMPLATES.
            </p>

            <h2 className="text-2xl font-semibold mt-4 text-foreground">5. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of your local jurisdiction, without regard to conflict of law principles.
            </p>

            <h2 className="text-2xl font-semibold mt-4 text-foreground">6. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact our team at{' '}
              <a href="mailto:support@aeroui.com" className="text-brand hover:underline">
                support@aeroui.com
              </a>.
            </p>
          </div>
        </div>
      </Section>
    </main>
  )
}

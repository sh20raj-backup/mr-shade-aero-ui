import Navbar from '@/components/marketing/nav'
import { Section } from '@/components/ui/section'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[var(--background-landing)] text-[var(--foreground-landing)]">
      <Navbar isAuthenticated={false} />
      <Section className="py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: May 18, 2026
            </p>
          </div>

          <div className="glass-1 p-8 rounded-2xl shadow-lg flex flex-col gap-6 text-left leading-relaxed">
            <p>
              At <strong>Aero UI</strong>, we are committed to protecting your privacy. This Privacy Policy describes how we collect, use, and safeguard your personal information when you use our website, templates, and application creation services.
            </p>

            <h2 className="text-2xl font-semibold mt-4 text-foreground">1. Information We Collect</h2>
            <p>
              We only collect information that is necessary to provide you with our services:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li><strong>Account Information:</strong> When you sign up, we may collect your name, email address, and avatar image.</li>
              <li><strong>Project Data:</strong> Any code descriptions, images, or configuration files you upload to create applications.</li>
              <li><strong>Usage Data:</strong> We may collect generic information about how you interact with our website to improve performance and user experience.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4 text-foreground">2. How We Use Your Information</h2>
            <p>
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>To provision, maintain, and optimize your generated applications.</li>
              <li>To communicate with you regarding updates, security alerts, and technical support.</li>
              <li>To analyze usage trends and improve our landing page template offerings.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4 text-foreground">3. Data Security</h2>
            <p>
              We prioritize the security of your data. We implement industry-standard administrative, technical, and physical security measures to safeguard your personal information from unauthorized access, disclosure, or modification.
            </p>

            <h2 className="text-2xl font-semibold mt-4 text-foreground">4. Cookies</h2>
            <p>
              We use operational cookies to maintain your login sessions and remember preference settings. You can manage or disable cookies through your browser settings, though some features of our platform may not function correctly as a result.
            </p>

            <h2 className="text-2xl font-semibold mt-4 text-foreground">5. Contact Us</h2>
            <p>
              If you have any questions or suggestions regarding this Privacy Policy, please feel free to reach out to us at{' '}
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

import type React from 'react'
import { mono } from './fonts'
import '@/app/styles/globals.css'
import ClientProviders from '@/components/client-providers'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import { siteConfig } from '@/configs/site'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI development platform",
    "no-code development",
    "low-code platform",
    "AI code generation",
    "Next.js",
    "React",
    "TypeScript",
    "SaaS platform",
    "developer tools",
    "automated deployment",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.getStartedUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@aeroui",
  },
  icons: {
    icon: "/favicon.ico"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mono.className} antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientProviders>
            {children}
            <Toaster />
          </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  )
}

'use client'

import { Switch } from '@/components/ui/switch'
import { useState } from 'react'
import { PricingColumn, EnterpriseHorizontal } from './pricing-column'
import { Sparkles, Zap, Shield } from 'lucide-react'

interface PricingContentProps {
  title?: string
  description?: string
  yearlyDiscount: number
  showEnterprise: boolean
}

export function PricingContent({ title, description, yearlyDiscount, showEnterprise }: PricingContentProps) {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      id: 'free',
      name: 'Free',
      icon: <Zap className="size-4 text-muted-foreground" />,
      description: 'Perfect for exploring, learning, and creating single projects.',
      monthlyPrice: 0,
      yearlyPrice: 0,
      cta: {
        variant: 'default' as const,
        label: 'Purchase Template',
        href: 'https://payments.cashfree.com/forms/aero-ui',
      },
      features: [
        '1 Active Project',
        'Up to 3,000 requests/mo',
        'Standard Edge hosting',
        'Basic React scaffolds',
      ],
      marketingFeatures: [
        'Community support',
        'GitHub sync integration',
      ],
      variant: 'default' as const,
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: <Sparkles className="size-4 text-primary" />,
      description: 'For power developers and teams needing advanced controls.',
      monthlyPrice: 29,
      yearlyPrice: 279,
      cta: {
        variant: 'glow' as const,
        label: 'Purchase Template',
        href: 'https://payments.cashfree.com/forms/aero-ui',
      },
      features: [
        'Unlimited Active Projects',
        'Up to 100,000 requests/mo',
        'High-performance Edge hosting',
        'Advanced custom templates',
        'Custom domain support',
      ],
      marketingFeatures: [
        'Priority Slack support',
        'Team collaboration seats',
        'Advanced analytics dashboard',
      ],
      variant: 'glow-brand' as const,
    },
  ]

  const enterprisePlan = {
    name: 'Enterprise',
    icon: <Shield className="size-4 text-brand" />,
    description: 'Bespoke solutions with dedicated performance, security, and elite support compliance.',
    cta: {
      variant: 'default' as const,
      label: 'Contact Sales',
      href: '/contact',
    },
    features: [
      'Dedicated private server instances',
      'Unlimited requests & custom bandwidth limits',
      'SSO (SAML) / OIDC integrations',
      'Custom SLA agreement guarantees',
      '24/7 Phone & Email dedicated engineers',
      'On-premise deployment options',
      'HIPAA & SOC-2 compliance support',
      'Professional migration services',
    ],
  }

  return (
    <>
      {(title || description) && (
        <div className="flex flex-col items-center gap-4 text-center sm:gap-6 md:gap-8">
          {title && (
            <h2 className="text-2xl leading-tight font-semibold text-balance sm:text-3xl md:text-4xl lg:text-5xl sm:leading-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-base text-muted-foreground max-w-full sm:max-w-[720px] md:max-w-[920px] font-medium text-balance sm:text-lg md:text-xl">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <span className="text-sm">Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-brand"
          />
          <span className="text-sm">
            Yearly
            <span className="bg-brand/10 text-brand ml-1.5 rounded-full px-2 py-0.5 text-xs font-semibold">
              Save up to {yearlyDiscount}%
            </span>
          </span>
        </div>
      </div>

      <div className="max-w-container mx-auto grid w-full grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-[800px]">
        {plans.map((plan) => (
          <PricingColumn
            key={plan.id}
            name={plan.name}
            icon={plan.icon}
            description={plan.description}
            price={isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
            isYearly={isYearly}
            monthlyPrice={plan.monthlyPrice}
            yearlyPrice={plan.yearlyPrice}
            cta={plan.cta}
            features={plan.features}
            marketingFeatures={plan.marketingFeatures}
            variant={plan.variant}
          />
        ))}
      </div>

      {showEnterprise && (
        <div className="w-full mt-8 sm:mt-10 md:mt-12">
          <EnterpriseHorizontal
            name={enterprisePlan.name}
            icon={enterprisePlan.icon}
            description={enterprisePlan.description}
            cta={enterprisePlan.cta}
            features={enterprisePlan.features}
            variant="enterprise"
          />
        </div>
      )}
    </>
  )
}

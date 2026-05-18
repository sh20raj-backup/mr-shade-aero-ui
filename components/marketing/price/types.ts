import type { ReactNode } from 'react'
import type { PricingColumnProps } from './components/pricing-column'

export type Plan = {
  id: string
  name: string
  description: string
  icon?: ReactNode
  monthlyPrice: number
  yearlyPrice: number
  seats: number
  cta: {
    variant: 'glow' | 'default'
    label: string
    href?: string
    onClick?: () => Promise<void>
  }
  features?: string[]
  marketingFeatures: string[]
  variant?: PricingColumnProps['variant']
  isEnterprise?: boolean
  isCurrentPlan?: boolean
}

export interface ApiPlan {
  id: string
  name: string
  description?: string
  group?: string
  seats?: number
  features?: string[]
  marketingFeatures?: string[]
  monthlyPrice?: number
  yearlyPrice?: number
  variant?: string
  cta?: {
    variant: 'glow' | 'default'
    label: string
    href: string
  }
  isEnterprise?: boolean
  isCurrentPlan?: boolean
}

export interface PricingProps {
  title?: string
  description?: string
  yearlyDiscount?: number
  plans?: Plan[]
  className?: string
  showEnterprise?: boolean
}
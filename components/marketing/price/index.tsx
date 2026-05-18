import { Section } from '@/components/ui/section'
import { cn } from '@/lib/utils'
import type { PricingProps } from './types'
import { PricingContent } from './components/pricing-content'

export default function Pricing({
  yearlyDiscount = 20,
  plans: propPlans,
  className,
  showEnterprise = true,
  title = 'Pricing Plans',
  description = 'Choose a plan that suits your needs, with features and support tailored to your requirements.',
}: PricingProps) {
  return (
    <Section className={cn(className)} id="price">
      <div className='mx-auto flex max-w-6xl flex-col items-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 lg:px-8'>
        <PricingContent
          title={title}
          description={description}
          yearlyDiscount={yearlyDiscount}
          showEnterprise={showEnterprise}
        />
      </div>
    </Section>
  )
}

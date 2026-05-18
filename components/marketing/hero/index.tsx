'use client'

import { Section } from '@/components/ui/section'
import { cn } from '@/lib/utils'
import { AppDescriptionForm } from './app-description-form'
import { HeroButtons } from './hero-buttons'
import { HeroHeader } from './hero-header'
import { HeroMockup } from './hero-mockup'
import type { HeroProps } from './types'

/**
 * Main Hero component that integrates all subcomponents
 */
export default function Hero({ title, description, mockup, badge, buttons, className }: HeroProps) {

  return (
    <Section className={cn('fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0', className)}>
      <div className='max-w-container mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 md:pt-6 lg:pt-8'>
        <div className='flex flex-col items-center gap-3 text-center sm:gap-4 md:gap-5'>
          <HeroHeader title={title} description={description} badge={badge} />

          <AppDescriptionForm
          />

          {/* Buttons always visible, no conditional rendering */}
          <HeroButtons buttons={buttons} />

          <HeroMockup mockup={mockup} />
        </div>
      </div>
    </Section>
  )
}

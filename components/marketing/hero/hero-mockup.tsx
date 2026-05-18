'use client'

import Glow from '@/components/ui/glow'
import { Mockup, MockupFrame } from '@/components/ui/mockup'
import type { ReactNode } from 'react'
import { memo } from 'react'
import Screenshot from '@/components/ui/screenshot'

interface HeroMockupProps {
  mockup?: ReactNode | false
}

/**
 * Default app screenshot configuration
 */
const defaultMockup = (
  <Screenshot
    srcLight='/app-light.png'
    srcDark='/app-dark.png'
    alt='Aero UI  UI  screenshot'
    width={1248}
    height={765}
    className='w-full'
    priority={false}
  />
)

/**
 * Bottom app showcase area of the Hero component
 */
export const HeroMockup = memo(({ mockup = defaultMockup }: HeroMockupProps) => {
  if (mockup === false) {
    return null
  }

  return (
    <div className='relative w-full pt-8 sm:pt-10 md:pt-12 translate-z-0'>
      <MockupFrame className='animate-appear opacity-0 delay-700 translate-z-0' size='small'>
        <Mockup
          type='responsive'
          className='bg-[var(--background-landing)]/90 w-full rounded-xl border-0'
        >
          {mockup}
        </Mockup>
      </MockupFrame>
      <Glow variant='top' className='animate-appear-zoom opacity-0 delay-1000 translate-z-0' />
    </div>
  )
})

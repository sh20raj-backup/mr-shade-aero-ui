import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
import { Button, type ButtonProps } from '../../ui/button'

interface CTAButtonProps {
  href: string
  text: string
  variant?: ButtonProps['variant']
  icon?: ReactNode
  iconRight?: ReactNode
}

interface CTAProps {
  badgeText?: string
  title?: string
  description?: string
  buttons?: CTAButtonProps[] | false
  className?: string
}

export default function CTA({
  badgeText = 'Start Scaling with Aero UI Today',
  title = 'Get the Aero UI Template',
  description = 'Purchase the ultimate developer-loved landing page template. Clean, fully responsive, and highly optimized Next.js 15 + Tailwind CSS v4 source code ready for your next project.',
  buttons = [
    {
      href: 'https://payments.cashfree.com/forms/aero-ui',
      text: 'Purchase Template',
      variant: 'default',
    },
  ],
  className,
}: CTAProps) {
  return (
    <Section className={cn('w-full overflow-hidden pt-0 md:pt-0', className)}>
      <div className='max-w-container relative mx-auto flex flex-col items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 text-center'>
        <Badge variant='outline'>
          <span className='text-muted-foreground'>{badgeText}</span>
        </Badge>
        <h2 className='text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl'>{title}</h2>
        {description && <p className='text-base sm:text-lg text-muted-foreground max-w-full sm:max-w-[600px]'>{description}</p>}
        {buttons !== false && buttons.length > 0 && (
          <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto'>
            {buttons.map((button, index) => (
              <Button key={`${button.text}-${button.href}-${index}`} variant={button.variant || 'default'} size='lg' asChild className='w-full sm:w-auto'>
                <a href={button.href} data-attr={button.href?.includes('#price') ? 'upgrade' : undefined}>
                  {button.icon}
                  {button.text}
                  {button.iconRight}
                </a>
              </Button>
            ))}
          </div>
        )}
        <div className='fade-top-lg pointer-events-none absolute inset-0 rounded-2xl shadow-[0_-16px_128px_0_var(--brand-foreground)_inset,0_-16px_32px_0_var(--brand)_inset]' />
      </div>
    </Section>
  )
}

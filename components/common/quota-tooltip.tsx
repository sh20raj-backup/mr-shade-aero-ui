'use client'

import * as React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/components/ui/use-mobile'

interface QuotaTooltipProps {
  children: React.ReactNode
  message: string
  isExhausted?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  className?: string
  disabled?: boolean
}

export function QuotaTooltip({
  children,
  message,
  isExhausted = false,
  side = 'bottom',
  align = 'center',
  className,
  disabled = false
}: QuotaTooltipProps) {
  const isMobile = useIsMobile()

  // Don't show tooltip if disabled or no message
  if (disabled || !message) {
    return <>{children}</>
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent
        side={side}
        align={align}
        sideOffset={isMobile ? 8 : 6}
        collisionPadding={isMobile ? 16 : 8}
        avoidCollisions={true}
        className={cn(
          // Base styles with enhanced mobile support
          'max-w-[280px] sm:max-w-[320px] md:max-w-[400px]',
          'text-xs sm:text-sm',
          'px-3 py-2 sm:px-4 sm:py-2.5',
          'leading-relaxed',
          'break-words hyphens-auto',
          // Enhanced z-index for mobile
          'z-[100]',
          // Quota-specific styling
          isExhausted
            ? 'bg-destructive/10 border-destructive/20 text-destructive dark:bg-destructive/20 dark:border-destructive/30'
            : 'bg-muted/90 border-border/50 text-muted-foreground dark:bg-muted/80',
          // Mobile-specific optimizations
          isMobile && [
            'shadow-lg',
            'backdrop-blur-sm',
            'border-2',
            'font-medium'
          ],
          className
        )}
        style={{
          // Ensure tooltip stays within viewport
          maxWidth: isMobile ? 'calc(100vw - 32px)' : undefined,
        }}
      >
        <div className="flex items-start gap-2">
          {isExhausted && (
            <span className="text-destructive text-xs mt-0.5 shrink-0" aria-hidden="true">
              ⚠️
            </span>
          )}
          <span className="flex-1 min-w-0">
            {message}
          </span>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

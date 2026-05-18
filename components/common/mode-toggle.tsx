'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            className='rounded-full w-8 h-8 bg-background mr-2'
            variant='outline'
            size='icon'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <SunIcon className='w-[1.2rem] h-[1.2rem] transition-transform ease-in-out duration-500 transform dark:rotate-0 dark:scale-100 rotate-90 scale-0' />
            <MoonIcon className='absolute w-[1.2rem] h-[1.2rem] transition-transform ease-in-out duration-500 transform rotate-0 scale-100 dark:-rotate-90 dark:scale-0' />
            <span className='sr-only'>{'Toggle theme'}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>{'Toggle theme'}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

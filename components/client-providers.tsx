'use client'

import React from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'
import { GifPreloadProvider, PreloadGifs } from '@/components/ui/text-gif'

interface ClientProvidersProps {
  children: React.ReactNode
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <TooltipProvider>
      <GifPreloadProvider>
        <PreloadGifs />
        {children}
      </GifPreloadProvider>
    </TooltipProvider>
  )
}

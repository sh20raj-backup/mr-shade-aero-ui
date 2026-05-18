'use client'

import { ColourfulText } from '@/components/ui/colourful-text'
import { Badge } from '@/components/ui/badge'
import { siteConfig } from '@/configs/site'
import { ArrowRightIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

interface HeroHeaderProps {
  title?: string
  description?: string
  badge?: ReactNode | false
}

const HydrationSafeBadge = () => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">
        {isHydrated ? 'Built on Developer-Loved Tools' : 'Introducing Aero'}
      </span>
      <a href={siteConfig.getStartedUrl} className="flex items-center gap-1">
        Purchase Template
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  )
}

export const HeroHeader = ({ title, description, badge }: HeroHeaderProps) => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const displayTitle = 'Turn ideas into apps in'
  const displayDescription =
    description ||
    'Brings your app ideas to life with AI, and deploys them to your domain.'
  const displayBadge = badge !== undefined ? badge : <HydrationSafeBadge />
  
  return (
    <>
      {displayBadge !== false && displayBadge}
      <h1 className="text-sm animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl xl:text-8xl md:leading-tight">
        {displayTitle} &nbsp;
        <ColourfulText text="minutes" />
      </h1>
      <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-full sm:max-w-[600px] md:max-w-[700px] px-2 sm:px-0 font-medium text-balance opacity-0 delay-100 sm:text-lg md:text-xl">
        {displayDescription}
      </p>
    </>
  )
}

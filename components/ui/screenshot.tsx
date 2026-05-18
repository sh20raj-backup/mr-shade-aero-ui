'use client'

import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ScreenshotProps {
  srcLight: string
  srcDark?: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  loading?: 'eager' | 'lazy'
}

export default function Screenshot({
  srcLight,
  srcDark,
  alt,
  width,
  height,
  className,
  priority = false,
  loading = 'lazy',
}: ScreenshotProps) {
  const { resolvedTheme } = useTheme()
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    if (resolvedTheme) {
      setSrc(resolvedTheme === 'light' ? srcLight : srcDark || srcLight)
    }
  }, [resolvedTheme, srcLight, srcDark])

  if (!src) {
    return <div style={{ width, height }} className={cn('bg-muted', className)} aria-label={alt} />
  }

  return (
    <Image 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className} 
      priority={priority}
      loading={loading}
    />
  )
}

'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-background text-foreground font-sans">
        <h2 className="text-2xl font-bold mb-4">A critical error occurred!</h2>
        <p className="text-muted-foreground mb-6 max-w-md">
          {error.message || "An unexpected system error occurred."}
        </p>
        <Button onClick={() => reset()} variant="default">
          Reset Application
        </Button>
      </body>
    </html>
  )
}

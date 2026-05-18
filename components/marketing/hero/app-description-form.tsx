'use client'

import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { ArrowUpCircle, Loader2, Paperclip } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useAutoResizeTextarea } from '../../../lib/hooks/use-auto-resize-textarea'
import { getAllExamples, ExamplesPanel } from './examples-panel'
import { HeroFilePreview } from './components/hero-file-preview'
import { HeroTypewriterEffect } from './components/hero-typewriter-effect'
import { toast } from 'sonner'

export const AppDescriptionForm = () => {
  // State management
  const [appDescription, setAppDescription] = useState('')
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [showTypewriterEffect, setShowTypewriterEffect] = useState(true)
  const [isHydrated, setIsHydrated] = useState(false)

  // Mock File Upload States
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null)
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null)
  const [isUploadingFile, setIsUploadingFile] = useState(false)
  const [isDeletingFile, setIsDeletingFile] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)

  // Simulation Status State
  const [isLoading, setIsLoading] = useState(false)
  const [simulationStatus, setSimulationStatus] = useState('')

  // Examples panel visibility
  const [showExamples, setShowExamples] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('productivity')

  // Ref for file input
  const fileInputRef = useRef<HTMLInputElement>(null)
  const examplesContainerRef = useRef<HTMLDivElement>(null)

  // Character limit constants
  const MAX_CHARACTERS = 500
  const WARNING_THRESHOLD = 0.8 // Show warning at 80%

  // Use auto-resize textarea hook
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 120,
    maxHeight: 300,
  })

  // Hydration detection
  useEffect(() => {
    setIsHydrated(true)

    // Handle clicks outside examples panel to close it
    const handleClickOutside = (event: MouseEvent) => {
      if (
        examplesContainerRef.current &&
        !examplesContainerRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('#examples-trigger')
      ) {
        setShowExamples(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Character counts
  const characterCount = appDescription.length
  const isOverLimit = characterCount > MAX_CHARACTERS
  const isNearLimit = characterCount >= MAX_CHARACTERS * WARNING_THRESHOLD
  const isFormValid = appDescription.trim() && !isOverLimit

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setAppDescription(value)
    adjustHeight()

    if (value.length > 0) {
      setShowTypewriterEffect(false)
    } else if (!isInputFocused && !isHovering) {
      setShowTypewriterEffect(true)
    }
  }

  // Handle focus
  const handleFocus = useCallback(() => {
    setIsInputFocused(true)
    setShowTypewriterEffect(false)
    setShowExamples(true) // Open examples panel when focused for maximum interactivity!
  }, [])

  const handleBlur = useCallback(() => {
    setIsInputFocused(false)
    if (appDescription.length === 0) {
      setShowTypewriterEffect(true)
    }
  }, [appDescription.length])

  // Mouse hovering triggers
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
    setShowTypewriterEffect(false)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    if (appDescription.length === 0 && !isInputFocused) {
      setShowTypewriterEffect(true)
    }
  }, [appDescription.length, isInputFocused])

  // File Upload Handlers (Fully Simulated & Interactive)
  const handleFileSelectClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Limit to images
    if (!file.type.startsWith('image/')) {
      setUploadError('Invalid file type. Please select an image.')
      toast.error('Invalid file type. Please select an image.')
      return
    }

    setIsUploadingFile(true)
    setUploadError(null)

    // Simulate network upload latency
    setTimeout(() => {
      const url = URL.createObjectURL(file)
      setPreviewImageUrl(url)
      setUploadedFileName(file.name)
      setIsUploadingFile(false)
      toast.success(`Image "${file.name}" attached successfully!`)
    }, 1000)
  }

  const handleRemoveUploadedFile = () => {
    setIsDeletingFile(true)
    setTimeout(() => {
      setPreviewImageUrl(null)
      setUploadedFileName(null)
      setIsDeletingFile(false)
      toast.info('Attachment removed')
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }, 500)
  }

  // Apply Example handler
  const handleApplyExample = (text: string) => {
    setAppDescription(text)
    setShowTypewriterEffect(false)
    setShowExamples(false)
    setTimeout(() => {
      adjustHeight()
      textareaRef.current?.focus()
    }, 50)
  }

  // Submit Handler with High-Fidelity Simulation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid || isLoading) return

    setIsLoading(true)
    setShowExamples(false)

    // Simulation steps
    const steps = [
      { delay: 0, status: '🚀 Spinning up secure sandbox environment...' },
      { delay: 1200, status: '🧠 Analyzing requirements & scaffold blueprint...' },
      { delay: 2600, status: '✨ Generating beautiful React + shadcn/ui components...' },
      { delay: 4000, status: '⚡ Compiling and deploying serverless Edge Worker...' },
      { delay: 5200, status: '🛡️ Running final static optimization checks...' },
    ]

    steps.forEach((step) => {
      setTimeout(() => {
        setSimulationStatus(step.status)
      }, step.delay)
    })

    // Complete the process
    setTimeout(() => {
      setIsLoading(false)
      setAppDescription('')
      setPreviewImageUrl(null)
      setUploadedFileName(null)
      setSimulationStatus('')
      
      // Notify user of gorgeous success
      toast.success('App Generated Successfully!', {
        description: 'Your application has been deployed to the Edge and synced to GitHub!',
        duration: 5000,
      })
    }, 6500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      handleSubmit(e as any)
    }
  }

  const typewriterBaseText = 'Ask Aero to create '
  const allExamples = getAllExamples()

  return (
    <div className="relative z-[100] flex flex-col items-center justify-center gap-4 w-full max-w-[520px] mt-4">
      <form className="flex w-full flex-col gap-3" onSubmit={handleSubmit}>
        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          accept="image/*"
          disabled={isUploadingFile || isDeletingFile || isLoading}
        />

        {/* File Upload Preview */}
        <HeroFilePreview
          previewImageUrl={previewImageUrl}
          uploadedFileName={uploadedFileName}
          isUploadingFile={isUploadingFile}
          isDeletingFile={isDeletingFile}
          uploadError={uploadError}
          isSubmitting={isLoading}
          onRemoveFile={handleRemoveUploadedFile}
        />

        <div className="relative w-full">
          <div
            className={cn(
              'relative flex min-h-[120px] w-full rounded-lg border border-input bg-background/50 backdrop-blur-sm transition-all duration-200',
              'focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20',
              isHovering && 'border-primary/30',
              isOverLimit && 'border-red-500/50 focus-within:border-red-500/70 focus-within:ring-red-500/20'
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Typewriter Effect Display */}
            <div className="absolute inset-0 px-4 py-4 pointer-events-none text-left">
              <HeroTypewriterEffect
                baseText={typewriterBaseText}
                examples={allExamples}
                isActive={showTypewriterEffect}
                isInputFocused={isInputFocused}
                isHovering={isHovering}
                hasContent={appDescription.length > 0}
                className="text-sm"
              />
            </div>

            {/* Text input area */}
            <Textarea
              ref={textareaRef}
              value={appDescription}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className={cn(
                'min-h-[120px] resize-none border-0 bg-transparent px-4 pt-4 pb-14 pr-16 text-sm text-left',
                'focus-visible:ring-0 focus-visible:ring-offset-0',
                'placeholder:text-muted-foreground/70'
              )}
              style={{ height: 'auto' }}
            />

            {/* Bottom toolbar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              {/* Left attachment button */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleFileSelectClick}
                  disabled={isUploadingFile || isDeletingFile || isLoading}
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-md transition-colors',
                    'hover:bg-muted text-muted-foreground hover:text-foreground',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    (isUploadingFile || isDeletingFile || isLoading) && 'opacity-50 cursor-not-allowed'
                  )}
                  title="Add attachment"
                >
                  {isUploadingFile || isDeletingFile ? (
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  ) : (
                    <Paperclip className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Character counter and submit button */}
              <div className="flex items-center gap-3">
                {/* Character counter */}
                {(isNearLimit || characterCount > 0) && (
                  <div className={cn(
                    'text-xs px-2 py-1 rounded-md transition-all duration-200',
                    'backdrop-blur-sm border',
                    isOverLimit
                      ? 'text-red-500 dark:text-red-400 font-medium bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700'
                      : isNearLimit
                        ? 'text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700'
                        : 'text-muted-foreground bg-muted/50 border-border/50'
                  )}>
                    {characterCount}/{MAX_CHARACTERS}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isLoading || isUploadingFile || isDeletingFile}
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-md transition-all',
                    isFormValid && !isUploadingFile && !isDeletingFile && !isLoading
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  )}
                  title="Send"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ArrowUpCircle className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Status Overlay during Simulation */}
        {isLoading && (
          <div className="flex items-center justify-center gap-2 p-3 text-xs bg-muted/30 border border-border/30 rounded-lg text-muted-foreground animate-pulse">
            <Loader2 className="size-3.5 animate-spin text-primary" />
            <span className="font-medium text-foreground">{simulationStatus}</span>
          </div>
        )}

        {/* Warning message when over character limit */}
        {isOverLimit && (
          <div className="mt-2 p-2 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
            <p className="text-xs text-red-600 dark:text-red-400 font-medium">
              Description exceeds {MAX_CHARACTERS} character limit. Please shorten your text to submit.
            </p>
          </div>
        )}
      </form>

      {/* Examples Panel Container */}
      {showExamples && !isLoading && (
        <div ref={examplesContainerRef} className="w-full relative z-[9999]">
          <ExamplesPanel
            examplesRef={null as any}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onApplyExample={handleApplyExample}
          />
        </div>
      )}

      <p className="text-muted-foreground text-xs mt-1">
        Free and open source forever. Your code, your complete ownership.
      </p>
    </div>
  )
}

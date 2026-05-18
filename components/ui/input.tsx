'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

const DebouncedInput = React.forwardRef<
  HTMLInputElement,
  {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>
>(({ value: initialValue, onChange, debounce = 300, ...props }, ref) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value, debounce, onChange])

  return <Input {...props} ref={ref} value={value} onChange={(e) => setValue(e.target.value)} />
})
DebouncedInput.displayName = 'DebouncedInput'

const AutosizeInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input> & { autosize?: boolean }
>((props, ref) => {
  const { value, className, autosize = true, ...rest } = props
  const displayValue = value?.toString() || ''

  return (
    <Input
      {...rest}
      ref={ref}
      value={value}
      className={cn(className, autosize && 'w-[var(--width)]')}
      style={
        autosize
          ? ({
              '--width': `${Math.max(1, displayValue.length)}ch`,
            } as React.CSSProperties)
          : undefined
      }
    />
  )
})
AutosizeInput.displayName = 'AutosizeInput'

export { Input, DebouncedInput, AutosizeInput }

'use client'

import useIsMounted from '@/lib/hooks/use-is-mounted'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const isMounted = useIsMounted()

  if (!isMounted) {
    return null
  }

  const ICON_SIZE = 16

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className} asChild>
        <Button
          variant='ghost'
          size='icon'
          className='h-9 w-9 hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors'
        >
          {resolvedTheme === 'light' ? (
            <Sun key='light' size={ICON_SIZE} />
          ) : (
            <Moon key='dark' size={ICON_SIZE} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-[130px]' align='end' sideOffset={8}>
        <DropdownMenuRadioGroup value={theme} onValueChange={(e) => setTheme(e)}>
          <DropdownMenuRadioItem className='flex items-center gap-2' value='light'>
            <Sun className='size-3.5' />
            <span>{'Light'}</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className='flex items-center gap-2' value='dark'>
            <Moon className='size-3.5' />
            <span>{'Dark'}</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className='flex items-center gap-2' value='system'>
            <Laptop className='size-3.5' />
            <span>{'System'}</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { ThemeSwitcher }

import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
import { Logo } from '@/components/common/logo/LogoImage'
import { Footer, FooterBottom, FooterColumn, FooterContent } from '@/components/ui/footer'
import { siteConfig } from '@/configs/site'
import { TextGif } from '../../ui/text-gif'

interface FooterLink {
  text: string
  href: string
  id: string
}

interface FooterColumnProps {
  title: string
  links: FooterLink[]
  id: string
}

interface FooterProps {
  logo?: ReactNode
  name?: string
  columns?: FooterColumnProps[]
  copyright?: string
  policies?: FooterLink[]
  className?: string
}

export default function FooterSection({
  logo = <Logo />,
  name = 'Aero UI',
  columns = [
    {
      id: 'product',
      title: 'Product',
      links: [
        { id: 'changelog', text: 'Changelog', href: siteConfig.url },
        { id: 'documentation', text: 'Documentation', href: siteConfig.url },
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      links: [
        { id: 'forum', text: 'Community', href: siteConfig.links.forum },
        { id: 'twitter', text: 'Twitter', href: siteConfig.links.twitter },
        { id: 'github', text: 'Github', href: siteConfig.links.github },
      ],
    },
  ],
  copyright = '© 2025 Aero UI Inc.. All rights reserved',
  policies = [
    { id: 'privacy', text: 'Privacy Policy', href: '/privacy' },
    { id: 'terms', text: 'Terms of Service', href: '/terms' },
  ],
  className,
}: FooterProps) {
  return (
    <footer className={cn('w-full px-4 sm:px-6 lg:px-8', className)}>
      <div className='max-w-container mx-auto'>
        <Footer>
          <FooterContent>
            <FooterColumn className='col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-1'>
              <div className='flex items-center gap-1'>
                {logo}
                <h3 className='text-lg sm:text-xl font-bold'>
                  <TextGif text={name} weight='bold' />
                </h3>
              </div>
            </FooterColumn>
            {columns.map((column) => (
              <FooterColumn key={column.id}>
                <h3 className='text-sm sm:text-md pt-1 font-semibold'>{column.title}</h3>
                {column.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className='text-muted-foreground text-sm'
                    data-attr={link.id === 'github' || link.href?.includes('github.com') ? 'github' : undefined}
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className='flex flex-wrap items-center gap-3 sm:gap-4'>
              {policies.map((policy) => (
                <a key={policy.id} href={policy.href}>
                  {policy.text}
                </a>
              ))}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  )
}

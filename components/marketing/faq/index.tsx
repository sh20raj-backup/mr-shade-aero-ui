import { Section } from '@/components/ui/section'
import type { ReactNode } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion-raised'

interface FAQItemProps {
  question: string
  answer: ReactNode
  value?: string
}

interface FAQProps {
  title?: string
  items?: FAQItemProps[] | false
  className?: string
}

export default function FAQ({
  title = 'Frequently Asked Questions',
  items = [
    {
      question: 'Is Aero open source?',
      answer: (
        <>
          <p className='text-muted-foreground mb-4 max-w-[640px] text-balance'>{'Yes, this is the biggest difference from other AI building tools. Aero is core open source with transparent code, community-driven development, and no vendor lock-in.'}</p>
        </>
      ),
    },
    {
      question: 'What is Aero?',
      answer: (
        <>
          <p className='text-muted-foreground mb-4 max-w-[600px]'>{'Aero is an AI-powered platform that transforms text descriptions into functional web applications. Built with React + shadcn/ui, supporting automated development workflows.'}</p>
        </>
      ),
    },
    {
      question: 'What\'s the difference from other AI building tools?',
      answer: (
        <>
          <p className='text-muted-foreground mb-4 max-w-[580px]'>{'Aero is built on developer-loved tools, supports auto package installation, uses React + shadcn/ui, core open source, supports custom domain deployment, fully functional image upload, GitHub auto-commit, visual editor for precise editing, free auto-fix functionality, excellent UI/UX output, and production-ready results.'}</p>
        </>
      ),
    },
    {
      question: 'What\'s the pricing model?',
      answer: <p className='text-muted-foreground mb-4 max-w-[580px]'>{'Aero offers flexible pricing plans starting free. Core features are permanently free, with reasonable paid options for advanced features.'}</p>,
    },
    {
      question: 'Who owns the code?',
      answer: <p className='text-muted-foreground mb-4 max-w-[580px]'>{'Users have complete ownership of generated code. You can download all files or sync to GitHub without any restrictions.'}</p>,
    },
    {
      question: 'Do I need programming experience?',
      answer: <p className='text-muted-foreground mb-4 max-w-[580px]'>{'Not required. Aero is friendly to both developers and non-developers, providing intuitive interface and AI-assisted development.'}</p>,
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className='max-w-container mx-auto flex flex-col items-center gap-8 md:flex-row md:items-start'>
        <h2 className='text-center text-3xl leading-tight font-semibold sm:text-5xl md:text-left md:leading-tight'>
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type='single' collapsible className='w-full max-w-[800px]'>
            {items.map((item, index) => (
              <AccordionItem key={index} value={item.value || `item-${index + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  )
}

import { Section } from '@/components/ui/section'
import {
  Tile,
  TileContent,
  TileDescription,
  TileLink,
  TileTitle,
  TileVisual,
} from '@/components/ui/tile'
import type { ReactNode } from 'react'
import { useId } from 'react'
import AiGenerate from '@/components/ui/ai-generate'
import ChatIllustration from '@/components/ui/chat'
import CodeEditorIllustration from '@/components/ui/code-editor'
import GlobeIllustration from '@/components/ui/globe'
import PipelineIllustration from '@/components/ui/pipeline'
import TilesIllustration from '@/components/ui/tiles'

interface TileProps {
  title: string
  description: ReactNode
  visual: ReactNode
  size?: string
  icon?: ReactNode
}

interface BentoGridProps {
  title?: string
  description?: string
  tiles?: TileProps[] | false
  className?: string
}

export default function BentoGrid({
  title = 'Built on Developer-Loved Tools',
  description = 'Built for developers who refuse compromises: core open source, modern tech stack, automated workflows, and actually usable outputs. Your code, your control, your freedom—exactly as it should be.',
  tiles = [
    {
      title: 'AI-Powered Code Generation',
      description: <p>{'Multi-model AI integration with Claude, Azure OpenAI, and Gemini. Natural language driven production-grade code generation with intelligent context awareness and best practice compliance.'}</p>,
      visual: (
        <div className='min-h-[300px] w-full py-12'>
          <AiGenerate />
        </div>
      ),
      size: 'col-span-12 sm:col-span-6 lg:col-span-5',
    },
    {
      title: 'Core Open Source',
      description: <p className='max-w-[460px]'>{'Unlike closed-source tools, Aero is core open source. You can view, modify, and extend every line of code. No black boxes, no vendor lock-in, true development freedom.'}</p>,
      visual: (
        <div className='min-h-[240px] w-full grow items-center self-center px-4 lg:px-12'>
          <CodeEditorIllustration />
        </div>
      ),
      size: 'col-span-12 sm:col-span-6 lg:col-span-7',
    },
    {
      title: 'Built with React + shadcn/ui',
      description: <p className='max-w-[520px]'>{'Uses developers\' favorite modern tech stack. Based on React 19, TypeScript, Tailwind CSS, and shadcn/ui component library, ensuring code quality and maintainability.'}</p>,
      visual: (
        <div className='min-h-[160px] w-full grow items-center self-center'>
          <PipelineIllustration />
        </div>
      ),
      size: 'col-span-12 sm:col-span-6 lg:col-span-7',
    },
    {
      title: 'Custom Domain Deployment',
      description: 'Deploy to your own domain with complete control over your application\'s access URL. No dependency on third-party platforms, truly own your product.',
      visual: (
        <div className='-mb-[96px] sm:-mb-[186px] md:-mx-32'>
          <GlobeIllustration className='[&_svg]:h-[100%] [&_svg]:w-[100%]' />
        </div>
      ),
      size: 'col-span-12 sm:col-span-6 lg:col-span-5',
    },
    {
      title: 'Image Upload & GitHub Auto-Commit',
      description: (
        <>
          <p>{'Fully functional image upload supporting multiple formats and cloud storage. Automatically sync code to GitHub repositories with version control support.'}</p>
          <p>{'Visual editor supports precise editing, free AI auto-fix functionality boosts development efficiency.'}</p>
        </>
      ),
      visual: (
        <div className='w-full sm:p-4 md:p-8'>
          <ChatIllustration />
        </div>
      ),
      size: 'col-span-12 sm:col-span-6 lg:col-span-5',
    },
    {
      title: 'Excellent User Experience Output',
      description: (
        <>
          <p className='max-w-[460px]'>{'Product outputs are actually usable, not simple demos. Generated apps have complete functionality, excellent UI/UX design, and production-grade code quality.'}</p>
          <p>{'Open source community-driven, continuous improvement and innovation.'}</p>
        </>
      ),
      visual: <TilesIllustration />,
      size: 'col-span-12 sm:col-span-6 lg:col-span-7',
    },
  ],
  className,
}: BentoGridProps) {
  const sectionId = useId()

  return (
    <Section id={sectionId} className={className}  >
      <div className='max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8' id="features">
        <h2 className='text-center text-2xl font-semibold text-balance sm:text-3xl md:text-4xl lg:text-5xl'>{title}</h2>
        <p className='text-base text-muted-foreground max-w-full sm:max-w-[680px] md:max-w-[840px] text-center font-medium text-balance sm:text-lg md:text-xl'>
          {description}
        </p>
        {tiles !== false && tiles.length > 0 && (
          <div className='grid grid-cols-12 gap-3 sm:gap-4 w-full'>
            {tiles.map((tile) => (
              <Tile key={tile.title} className={tile.size}>
                <TileLink />
                <TileContent>
                  {tile.icon && tile.icon}
                  <TileTitle>{tile.title}</TileTitle>
                  <TileDescription>{tile.description}</TileDescription>
                </TileContent>
                <TileVisual>{tile.visual}</TileVisual>
              </Tile>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}

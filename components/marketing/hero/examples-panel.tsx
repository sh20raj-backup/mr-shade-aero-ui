import { Calendar, CheckCircle2, Sparkles, UserRound, Utensils } from 'lucide-react'
import { Fragment, type MutableRefObject, type RefObject } from 'react'

export interface Example {
  title: string
  description: string
  preview: string
}

export interface ExampleCategory {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  examples: Example[]
}

interface ExamplesPanelProps {
  examplesRef: RefObject<HTMLDivElement> | MutableRefObject<HTMLDivElement | null>
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  onApplyExample: (example: string) => void
}

const getExampleCategories = (): ExampleCategory[] => [
  {
    id: 'productivity',
    name: 'Productivity',
    icon: <Calendar className='size-4' />,
    color: 'blue',
    examples: [
      {
        title: 'Task Manager',
        description: 'A cozy task tracker that feels more like a journal than work.',
        preview: 'Make productivity feel magical',
      },
      {
        title: 'Note Taking App',
        description: 'A digital garden where ideas grow and connect in beautiful ways.',
        preview: 'Nurture your thoughts',
      },
    ],
  },
  {
    id: 'social',
    name: 'Social Media',
    icon: <UserRound className='size-4' />,
    color: 'purple',
    examples: [
      {
        title: 'Interest Community',
        description: 'A cozy corner of the internet where quirky interests find their tribe.',
        preview: 'Find your creative kindred spirits',
      },
      {
        title: 'Local Events',
        description: 'A platform to discover and organize local community events and activities.',
        preview: 'Explore events around you',
      },
    ],
  },
  {
    id: 'health',
    name: 'Health',
    icon: <Utensils className='size-4' />,
    color: 'green',
    examples: [
      {
        title: 'Diet Tracker',
        description: 'A mindful eating companion that celebrates food joy, not restriction.',
        preview: 'Rediscover the pleasure of eating',
      },
      {
        title: 'Fitness Plan',
        description: "Movement that feels like play, not punishment, tailored to your unique body.",
        preview: "Celebrate your body's awesome",
      },
    ],
  },
]

export const getAllExamples = () => {
  return getExampleCategories().flatMap((category) =>
    category.examples.map((example) => example.description)
  )
}

export const ExamplesPanel = ({
  examplesRef,
  selectedCategory,
  setSelectedCategory,
  onApplyExample,
}: ExamplesPanelProps) => {
  const exampleCategories = getExampleCategories()

  return (
    <div
      ref={examplesRef}
      id='examples-panel'
      className='absolute mt-1 w-full bg-[var(--background-landing)]/95 backdrop-blur-sm ring-1 ring-border/30 rounded-lg shadow-lg overflow-hidden transition-all animate-in fade-in-0 zoom-in-95 duration-200'
      style={{
        position: 'absolute',
        zIndex: 9999
      }}
    >
      <div className='flex items-center justify-between p-3 border-b border-border/20'>
        <div className='flex items-center gap-1.5'>
          <Sparkles className='size-4 text-primary' />
          <h3 className='font-medium'>App Ideas Examples</h3>
        </div>
        <p className='text-xs text-muted-foreground'>Click any example to apply</p>
      </div>

      <div className='p-2'>
        <div className='flex gap-1 mb-3 px-1 overflow-x-auto pb-1 scrollbar-thin'>
          {exampleCategories.map((category) => (
            <button
              type='button'
              key={category.id}
              className={`text-xs px-2.5 py-1 rounded-md flex items-center gap-1 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                selectedCategory === category.id 
                  ? 'bg-primary text-primary-foreground ring-1 ring-primary/50' 
                  : 'hover:bg-muted ring-1 ring-border/20 hover:ring-border/40'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[280px] overflow-y-auto p-1 scrollbar-thin'>
          {(selectedCategory === ''
            ? exampleCategories
            : exampleCategories.filter((c) => c.id === selectedCategory)
          ).map((category) => (
            <Fragment key={category.id}>
              {category.examples.map((example, index) => (
                <button
                  key={`${category.id}-${index}`}
                  type='button'
                  className='flex flex-col text-left p-3 rounded-md bg-muted/30 hover:bg-muted/60 ring-1 ring-border/20 hover:ring-border/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30'
                  onClick={() => onApplyExample(example.description)}
                >
                  <div className='flex items-center justify-between gap-2 mb-1'>
                    <span className='font-medium text-sm'>{example.title}</span>
                    <span
                      className={`inline-flex items-center justify-center size-5 rounded-full bg-${category.color}-500/10 text-${category.color}-500 ring-1 ring-${category.color}-500/20`}
                    >
                      {category.icon}
                    </span>
                  </div>
                  <p className='text-xs text-muted-foreground line-clamp-2'>
                    {example.description}
                  </p>
                  <div className='flex items-center mt-2 text-primary text-xs font-medium'>
                    <CheckCircle2 className='size-3 mr-1' />
                    {example.preview}
                  </div>
                </button>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

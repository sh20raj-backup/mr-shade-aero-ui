import { Separator } from '@/components/ui/separator'

interface TextSeparatorProps {
  text: string
}

export default function TextSeparator({ text }: TextSeparatorProps) {
  return (
    <div className='my-6 flex items-center gap-4'>
      <Separator className='w-auto flex-grow bg-gray-200' />
      <span className='text-sm text-gray-500 font-medium'>{text}</span>
      <Separator className='w-auto flex-grow bg-gray-200' />
    </div>
  )
}

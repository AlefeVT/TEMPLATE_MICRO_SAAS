import { RocketIcon } from '@radix-ui/react-icons'

export function Logo() {
  return (
    <div className="bg-primary h-10 w-10 flex items-center justify-center rounded-md bg-gray-300 text-white">
      <RocketIcon className="w-7 h-7 text-primary-foreground" />
    </div>
  )
}

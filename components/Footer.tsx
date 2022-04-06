import { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => {
  return (
    <footer className="text-blue-300 bg-black">
      <div className="container mx-auto py-8">
        Footer Content
        <div className="text-gray-300 text-sm">&copy;2021 by ... </div>
      </div>
    </footer>
  )
}

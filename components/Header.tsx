import {FunctionComponent} from 'react'
import Link from 'next/link'

export const Header: FunctionComponent = () => {
  return (<header className="text-blue-300 bg-black flex items-center">
    <nav className="container mx-auto">
      <ul className="flex gap-x-8 py-8 text-xl">
        <li><Link href="/" passHref><a>Home</a></Link></li>
        <li><Link href="/blog" passHref><a>Blog</a></Link></li>
        <li><Link href="/about" passHref><a>About</a></Link></li>
      </ul>
    </nav>
  </header>)
}

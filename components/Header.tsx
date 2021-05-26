import {FunctionComponent} from 'react'
import Link from 'next/link'

export const Header: FunctionComponent = () => {
  return (<header className="bg-blue-800 text-white flex items-center">
    <nav className="container mx-auto">
      <ul className="flex gap-x-8 py-8 text-xl">
        <li><Link href="/" passHref><a>Home</a></Link></li>
        <li><Link href="/blog" passHref><a>Blog</a></Link></li>
        <li><Link href="/about" passHref><a>About</a></Link></li>
      </ul>
    </nav>
  </header>)
}

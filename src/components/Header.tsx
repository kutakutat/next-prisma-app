/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import Link from 'next/link'

type Header = {
  pathname: string
}

const Header = ({ pathname }: Header): JSX.Element => (
  <header>
    <Link href="/">
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>{' '}
    <Link href="/about">
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
  </header>
)

export default Header

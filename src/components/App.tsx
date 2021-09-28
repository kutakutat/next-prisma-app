import React from 'react'
import Header from './Header'
import { useRouter } from 'next/router'

const App = ({ children }: { children: JSX.Element }): JSX.Element => {
  const router = useRouter()
  const pathname = router.pathname
  return (
    <main>
      <Header pathname={pathname}></Header>
      {children}
    </main>
  )
}

export default App

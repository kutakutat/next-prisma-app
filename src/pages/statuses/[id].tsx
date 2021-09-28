import React from 'react'
import App from '@/App'
import { useRouter } from 'next/router'

const StatusPage = (): JSX.Element => {
  const router = useRouter()
  const { id, lang } = router.query

  return (
    <App>
      <p>
        このページの ID は {id} で言語は {lang} です
      </p>
    </App>
  )
}

export default StatusPage

import React from 'react'

type Props = {}

const notFound = (props: Props) => {
  return (
    <main className='h-screen flex flex-col items-center justify-center'>
      <h1 className="xl-title text-light-foreground">404</h1>
      <h2 className="large-title text-blue">Page Not Found</h2>
    </main>
  )
}

export default notFound
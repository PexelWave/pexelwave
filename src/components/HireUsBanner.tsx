import Link from 'next/link'
import React from 'react'
const HireUsBanner = () => {
  return (
    <section className='container my-12 bg-violet-950 p-12 text-light-foreground text-center rounded-3xl'>
        <h1 className="large-title mb-6">Let's <span className='lg:font-outline-2'>Build </span>Yours Next!</h1>
        <Link className='inline-block px-4 py-2 md:py-8 md:px-16 w-1/2 bg-lime text-2xl font-black rounded-lg' href='/'>HIRE US</Link>
    </section>
  )
}

export default HireUsBanner
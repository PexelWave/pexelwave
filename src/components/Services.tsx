import { servicesInfo } from '@/utils/components-data'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <section className="container">
        <div className='overflow-x-scroll custom-scrollbar flex gap-6 snap-x snap-mandatory pb-2'>
        { servicesInfo.map(service => (
            <div key={service.title} className='bg-violet-900 rounded-lg p-6 snap-center w-full md:w-1/3  shrink-0 grid grid-rows-3 text-light-foreground'>
                <h3 className="medium-title">{service.title}</h3>
                <p>{service.description}</p>
                <Link className="btn bg-blue flex items-center justify-center text-2xl font-bold" href={service.href}>Hire Us</Link>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Services
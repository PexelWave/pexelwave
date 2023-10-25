import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Socials from './Socials'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-violet-950 border-t-2 border-slate-700 py-6 text-light-foreground'>
        <div className="container flex flex-col md:flex-row flex-wrap items-center justify-center">
            <div className="flex flex-col gap-4">
                <Logo />
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className="medium-title">Quick Links</h3>
                <Link href="/services">Services</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/developers">Developers</Link>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="medium-title">Follow Us</h3>
                <div className="flex gap-4"><Socials /></div>
            </div>
        </div>
        <p className='text-center py-12'><small>&copy; PEXELWAVE {new Date().getFullYear()}</small></p>
    </footer>
  )
}

export default Footer
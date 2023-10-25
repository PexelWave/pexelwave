"use client"
import Lottie from 'lottie-react'
import loadingAnimation from '@/assets/lottie/loadingAnimation.json'

type Props = {}

const loading = (props: Props) => {
  return (
    <main className='h-screen flex items-center justify-center'>
        <Lottie className='w-1/2' animationData={loadingAnimation} />
    </main>
  )
}

export default loading
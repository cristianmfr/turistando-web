'use client'

import { ChevronDown, Play } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 bg-cover'>
        <Image
          src='/fernando-noronha-hero.jpg'
          alt='hero'
          width={1920}
          height={1080}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50'></div>
      </div>

      <div className='relative z-10 text-center text-white px-4 max-w-4xl mx-auto'>
        <h1 className='font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up opacity-0 animation-delay-300'>
          Fernando de Noronha
        </h1>
        <p className='text-xl md:text-2xl mb-4 animate-fade-in-up opacity-0 animation-delay-500'>
          O Paraíso Brasileiro que Você Precisa Conhecer
        </p>
        <p className='text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto animate-fade-in-up opacity-0 animation-delay-700'>
          Descubra águas cristalinas, vida marinha exuberante e paisagens que
          parecem ter saído de um sonho
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 animation-delay-900'>
          <Button variant='hero' size='lg' className='text-lg px-8 py-4'>
            Planeje Sua Viagem
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'
          >
            <Play className='size-5 mr-2' />
            Assistir Vídeo
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-sunset transition-colors'
        aria-label='Rolar para baixo'
      >
        <ChevronDown className='size-8' />
      </button>

      <div className='absolute top-20 left-10 w-16 h-16 bg-sunset/20 rounded-full blur-xl animate-pulse'></div>
      <div className='absolute bottom-32 right-16 w-12 h-12 bg-tropical/30 rounded-full blur-lg animate-pulse animation-delay-1000'></div>
    </section>
  )
}

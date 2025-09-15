'use client'

import { MapPin, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <MapPin
              className={`w-8 h-8 mr-2 ${isScrolled ? 'text-ocean' : 'text-white'}`}
            />
            <span
              className={`font-display text-xl font-bold ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Fernando de Noronha
            </span>
          </div>

          <div className='hidden md:block'>
            <div className='flex items-center space-x-8'>
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors hover:text-ocean ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('attractions')}
                className={`font-medium transition-colors hover:text-ocean ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                Atrações
              </button>
              <button
                onClick={() => scrollToSection('experiences')}
                className={`font-medium transition-colors hover:text-ocean ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                Experiências
              </button>
              <button
                onClick={() => scrollToSection('info')}
                className={`font-medium transition-colors hover:text-ocean ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                Informações
              </button>
              <Button variant={isScrolled ? 'ocean' : 'outline'} size='sm'>
                Reservar
              </Button>
            </div>
          </div>

          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-foreground' : 'text-white'}`}
            >
              {isMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className='md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <button
                onClick={() => scrollToSection('about')}
                className='block px-3 py-2 text-foreground hover:text-ocean font-medium w-full text-left'
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('attractions')}
                className='block px-3 py-2 text-foreground hover:text-ocean font-medium w-full text-left'
              >
                Atrações
              </button>
              <button
                onClick={() => scrollToSection('experiences')}
                className='block px-3 py-2 text-foreground hover:text-ocean font-medium w-full text-left'
              >
                Experiências
              </button>
              <button
                onClick={() => scrollToSection('info')}
                className='block px-3 py-2 text-foreground hover:text-ocean font-medium w-full text-left'
              >
                Informações
              </button>
              <div className='px-3 py-2'>
                <Button variant='ocean' size='sm' className='w-full'>
                  Reservar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

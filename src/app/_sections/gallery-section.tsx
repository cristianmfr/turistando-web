'use client'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: './baia-do-sancho.jpg',
      title: 'Baía do Sancho',
      description: 'Eleita a praia mais bonita do mundo pelo TripAdvisor',
    },
    {
      src: './dolphins-noronha.jpg',
      title: 'Golfinhos Rotadores',
      description: 'Encontro diário com golfinhos na Baía dos Golfinhos',
    },
    {
      src: './dois-irmaos.jpg',
      title: 'Dois Irmãos',
      description: 'Formação rochosa icônica no pôr do sol',
    },
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? images.length - 1 : selectedImage - 1
      )
    }
  }

  return (
    <section id='attractions' className='py-20 bg-muted/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Atrações Imperdíveis
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Descubra os pontos mais espetaculares do arquipélago através de
            imagens que capturam a essência paradisíaca de Fernando de Noronha.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {images.map((image, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300'
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className='w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                  <h3 className='font-display text-2xl font-bold mb-2'>
                    {image.title}
                  </h3>
                  <p className='text-gray-200'>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'>
            <div className='relative max-w-4xl max-h-full'>
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className='max-w-full max-h-full object-contain rounded-lg'
              />

              <Button
                onClick={() => setSelectedImage(null)}
                className='absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors'
              >
                <X className='size-6' />
              </Button>

              <Button
                onClick={prevImage}
                className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors'
              >
                <ChevronLeft className='size-6' />
              </Button>

              <Button
                onClick={nextImage}
                className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors'
              >
                <ChevronRight className='size-6' />
              </Button>

              <div className='absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg'>
                <h3 className='font-display text-2xl font-bold mb-2'>
                  {images[selectedImage].title}
                </h3>
                <p className='text-gray-200'>
                  {images[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

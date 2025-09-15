'use client'

import { Anchor, Camera, Fish, Mountain, Sun, Waves } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ExperiencesSection() {
  const experiences = [
    {
      icon: Anchor,
      title: 'Mergulho Livre',
      description:
        'Explore os recifes de coral e encontre vida marinha única nas águas cristalinas.',
      highlights: [
        'Tartarugas marinhas',
        'Peixes tropicais',
        'Corais preservados',
      ],
      difficulty: 'Iniciante',
    },
    {
      icon: Fish,
      title: 'Mergulho Autônomo',
      description:
        'Descubra naufrágios históricos e formações rochosas submersas espetaculares.',
      highlights: [
        'Naufrágio Corveta Ipiranga',
        'Cavernas subaquáticas',
        'Tubarões-lixa',
      ],
      difficulty: 'Intermediário',
    },
    {
      icon: Waves,
      title: 'Observação de Golfinhos',
      description:
        'Encontro matinal com golfinhos-rotadores na famosa Baía dos Golfinhos.',
      highlights: ['Golfinhos selvagens', 'Nascer do sol', 'Mirante exclusivo'],
      difficulty: 'Todos os níveis',
    },
    {
      icon: Mountain,
      title: 'Trilhas Ecológicas',
      description:
        'Caminhe pelos trails que levam às praias mais isoladas e mirantes panorâmicos.',
      highlights: ['Atalaia', 'Capim-açu', 'Forte dos Remédios'],
      difficulty: 'Moderado',
    },
    {
      icon: Camera,
      title: 'Safari Fotográfico',
      description:
        'Capture a beleza natural em tours guiados pelos pontos mais fotogênicos.',
      highlights: ['Pôr do sol', 'Vida selvagem', 'Paisagens únicas'],
      difficulty: 'Todos os níveis',
    },
    {
      icon: Sun,
      title: 'Relaxamento',
      description:
        'Desfrute das praias paradisíacas com estrutura completa para seu conforto.',
      highlights: ['Praia do Leão', 'Baía do Sancho', 'Cacimba do Padre'],
      difficulty: 'Relaxante',
    },
  ]

  return (
    <section
      id='experiences'
      className='py-20 bg-gradient-to-b from-background to-muted/30'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Experiências Inesquecíveis
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Fernando de Noronha oferece atividades para todos os perfis de
            viajantes, desde aventureiros até aqueles que buscam relaxamento em
            cenários paradisíacos.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {experiences.map(experience => (
            <div
              key={experience.title}
              className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
            >
              <div className='p-8'>
                <div className='bg-ocean/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-ocean/20 transition-colors'>
                  <experience.icon className='w-8 h-8 text-ocean' />
                </div>

                <h3 className='font-display text-2xl font-bold text-foreground mb-4'>
                  {experience.title}
                </h3>

                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  {experience.description}
                </p>

                <div className='mb-6'>
                  <h4 className='font-semibold text-foreground mb-3'>
                    Destaques:
                  </h4>
                  <ul className='space-y-2'>
                    {experience.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className='flex items-center text-sm text-muted-foreground'
                      >
                        <div className='w-2 h-2 bg-ocean rounded-full mr-3'></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='flex justify-between items-center'>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      experience.difficulty === 'Iniciante'
                        ? 'bg-tropical/20 text-tropical'
                        : experience.difficulty === 'Intermediário'
                          ? 'bg-sunset/20 text-sunset'
                          : experience.difficulty === 'Moderado'
                            ? 'bg-coral/20 text-coral'
                            : 'bg-ocean/20 text-ocean'
                    }`}
                  >
                    {experience.difficulty}
                  </span>
                </div>
              </div>

              <div className='px-8 pb-8'>
                <Button
                  variant='ocean'
                  className='w-full group-hover:scale-105 transition-transform'
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className='bg-white rounded-2xl shadow-lg p-8 md:p-12'>
          <h3 className='font-display text-3xl font-bold text-center text-foreground mb-12'>
            O Que Nossos Visitantes Dizem
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='mb-4'>
                <div className='w-16 h-16 bg-ocean/10 rounded-full mx-auto flex items-center justify-center'>
                  <span className='text-2xl'>🐬</span>
                </div>
              </div>
              <blockquote className='text-muted-foreground italic mb-4'>
                "Ver os golfinhos em seu habitat natural foi a experiência mais
                emocionante da minha vida. Fernando de Noronha é realmente
                mágico!"
              </blockquote>
              <cite className='font-semibold text-foreground'>
                Maria Silva, São Paulo
              </cite>
            </div>

            <div className='text-center'>
              <div className='mb-4'>
                <div className='w-16 h-16 bg-tropical/10 rounded-full mx-auto flex items-center justify-center'>
                  <span className='text-2xl'>🏖️</span>
                </div>
              </div>
              <blockquote className='text-muted-foreground italic mb-4'>
                "As praias são de outro mundo! Água cristalina, areia branca e
                uma paz que só se encontra aqui. Já estou planejando voltar."
              </blockquote>
              <cite className='font-semibold text-foreground'>
                João Santos, Rio de Janeiro
              </cite>
            </div>

            <div className='text-center'>
              <div className='mb-4'>
                <div className='w-16 h-16 bg-sunset/10 rounded-full mx-auto flex items-center justify-center'>
                  <span className='text-2xl'>📸</span>
                </div>
              </div>
              <blockquote className='text-muted-foreground italic mb-4'>
                "Como fotógrafo, posso dizer que Fernando de Noronha oferece
                cenários únicos. Cada ângulo é uma obra de arte da natureza."
              </blockquote>
              <cite className='font-semibold text-foreground'>
                Carlos Mendes, Belo Horizonte
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { Fish, Sun, TreePine, Waves } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Waves,
      title: 'Águas Cristalinas',
      description:
        'Mergulhe em águas com visibilidade de até 50 metros e descubra um mundo subaquático único.',
    },
    {
      icon: Fish,
      title: 'Vida Marinha Rica',
      description:
        'Golfinhos, tartarugas, tubarões e uma infinidade de peixes coloridos habitam essas águas.',
    },
    {
      icon: Sun,
      title: 'Sol o Ano Todo',
      description:
        'Clima tropical com temperaturas agradáveis durante todos os meses do ano.',
    },
    {
      icon: TreePine,
      title: 'Natureza Preservada',
      description:
        'Parque Nacional Marinho com controle rigoroso para preservação da fauna e flora.',
    },
  ]

  return (
    <section
      id='about'
      className='py-20 bg-gradient-to-b from-background to-muted/30'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Patrimônio Mundial da Humanidade
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Fernando de Noronha é um arquipélago vulcânico localizado a 545 km
            da costa de Pernambuco. Reconhecido pela UNESCO como Patrimônio
            Mundial Natural, o destino oferece uma experiência única de contato
            com a natureza em seu estado mais puro.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {features.map(feature => (
            <div
              key={feature.title}
              className='text-center group hover:scale-105 transition-transform duration-300 cursor-pointer'
            >
              <div className='bg-ocean/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-ocean/20 transition-colors'>
                <feature.icon className='w-8 h-8 text-ocean' />
              </div>
              <h3 className='font-display text-xl font-semibold text-foreground mb-2'>
                {feature.title}
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className='bg-white rounded-2xl shadow-lg p-8 md:p-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='font-display text-3xl font-bold text-foreground mb-6'>
                Um Paraíso Protegido
              </h3>
              <div className='space-y-4 text-muted-foreground'>
                <p>
                  O arquipélago é formado por 21 ilhas e ilhotas de origem
                  vulcânica, sendo apenas a ilha principal habitada. A área
                  total de 26 km² abriga uma biodiversidade marinha única no
                  Atlântico Sul.
                </p>
                <p>
                  Com acesso limitado a apenas 460 visitantes por dia, Fernando
                  de Noronha mantém sua natureza intocada e oferece uma
                  experiência exclusiva para quem busca o contato genuíno com a
                  natureza.
                </p>
                <p>
                  As águas que cercam o arquipélago são consideradas as mais
                  transparentes do Brasil, com temperatura média de 26°C, ideais
                  para mergulho e contemplação da vida marinha.
                </p>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='bg-ocean/5 rounded-xl p-6'>
                <h4 className='font-semibold text-ocean text-lg mb-2'>
                  Dados Importantes
                </h4>
                <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div>
                    <span className='font-medium'>Área:</span>
                    <p className='text-muted-foreground'>26 km²</p>
                  </div>
                  <div>
                    <span className='font-medium'>População:</span>
                    <p className='text-muted-foreground'>~3.000 hab.</p>
                  </div>
                  <div>
                    <span className='font-medium'>Visitantes/dia:</span>
                    <p className='text-muted-foreground'>Máximo 460</p>
                  </div>
                  <div>
                    <span className='font-medium'>Temperatura:</span>
                    <p className='text-muted-foreground'>25°C - 30°C</p>
                  </div>
                </div>
              </div>

              <div className='bg-tropical/5 rounded-xl p-6'>
                <h4 className='font-semibold text-tropical text-lg mb-2'>
                  Reconhecimentos
                </h4>
                <ul className='text-sm space-y-2 text-muted-foreground'>
                  <li>• Patrimônio Mundial Natural da UNESCO (2001)</li>
                  <li>• Parque Nacional Marinho (1988)</li>
                  <li>• Área de Proteção Ambiental</li>
                  <li>• Reserva da Biosfera da Mata Atlântica</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

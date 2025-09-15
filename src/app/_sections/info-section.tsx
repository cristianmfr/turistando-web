'use client'

import {
  Calendar,
  Clock,
  DollarSign,
  Mail,
  MapPin,
  Phone,
  Plane,
  Shield,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

export function InfoSection() {
  return (
    <section id='info' className='py-20 bg-muted/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Informações Práticas
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Tudo que você precisa saber para planejar sua viagem dos sonhos para
            Fernando de Noronha.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
          {/* Como Chegar */}
          <div className='bg-white rounded-2xl shadow-lg p-8'>
            <div className='flex items-center mb-6'>
              <Plane className='w-8 h-8 text-ocean mr-4' />
              <h3 className='font-display text-2xl font-bold text-foreground'>
                Como Chegar
              </h3>
            </div>

            <div className='space-y-6'>
              <div>
                <h4 className='font-semibold text-foreground mb-2'>
                  Voos Diretos
                </h4>
                <ul className='space-y-2 text-muted-foreground'>
                  <li>
                    • <strong>Recife (PE):</strong> 1h20 de voo
                  </li>
                  <li>
                    • <strong>Natal (RN):</strong> 1h10 de voo
                  </li>
                </ul>
              </div>

              <div>
                <h4 className='font-semibold text-foreground mb-2'>
                  Companhias Aéreas
                </h4>
                <ul className='space-y-2 text-muted-foreground'>
                  <li>• Azul Linhas Aéreas</li>
                  <li>• Gol Linhas Aéreas</li>
                  <li>• LATAM Airlines</li>
                </ul>
              </div>

              <div className='bg-ocean/5 rounded-xl p-4'>
                <p className='text-sm text-muted-foreground'>
                  <strong>Importante:</strong> É necessário reservar voos com
                  antecedência, especialmente em alta temporada, devido ao
                  limite de visitantes.
                </p>
              </div>
            </div>
          </div>

          {/* Melhor Época */}
          <div className='bg-white rounded-2xl shadow-lg p-8'>
            <div className='flex items-center mb-6'>
              <Calendar className='w-8 h-8 text-tropical mr-4' />
              <h3 className='font-display text-2xl font-bold text-foreground'>
                Melhor Época
              </h3>
            </div>

            <div className='space-y-6'>
              <div>
                <h4 className='font-semibold text-foreground mb-2'>
                  Estação Seca (Agosto - Janeiro)
                </h4>
                <ul className='space-y-2 text-muted-foreground'>
                  <li>• Menos chuvas e mar mais calmo</li>
                  <li>• Ideal para mergulho e trilhas</li>
                  <li>• Temporada de golfinhos</li>
                </ul>
              </div>

              <div>
                <h4 className='font-semibold text-foreground mb-2'>
                  Estação Chuvosa (Fevereiro - Julho)
                </h4>
                <ul className='space-y-2 text-muted-foreground'>
                  <li>• Paisagens mais verdes</li>
                  <li>• Menor movimento turístico</li>
                  <li>• Preços mais acessíveis</li>
                </ul>
              </div>

              <div className='bg-tropical/5 rounded-xl p-4'>
                <p className='text-sm text-muted-foreground'>
                  <strong>Dica:</strong> O clima é agradável o ano todo, com
                  temperatura média de 26°C e água sempre entre 25°C e 28°C.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Custos e Documentação */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
          <div className='bg-white rounded-2xl shadow-lg p-8'>
            <div className='flex items-center mb-6'>
              <DollarSign className='w-8 h-8 text-sunset mr-4' />
              <h3 className='font-display text-xl font-bold text-foreground'>
                Custos
              </h3>
            </div>

            <div className='space-y-4'>
              <div>
                <h4 className='font-semibold text-foreground mb-2'>
                  Taxas Obrigatórias
                </h4>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li>• TPA (Taxa de Preservação): R$ 79,20/dia</li>
                  <li>• Parque Nacional: R$ 111,00</li>
                </ul>
              </div>

              <div>
                <h4 className='font-semibold text-foreground mb-2'>
                  Hospedagem (diária)
                </h4>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li>• Pousadas: R$ 300-800</li>
                  <li>• Hotéis: R$ 500-1.500</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-8'>
            <div className='flex items-center mb-6'>
              <Shield className='w-8 h-8 text-coral mr-4' />
              <h3 className='font-display text-xl font-bold text-foreground'>
                Documentos
              </h3>
            </div>

            <div className='space-y-4'>
              <div>
                <h4 className='font-semibold text-foreground mb-2'>
                  Brasileiros
                </h4>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li>• RG ou CNH (com foto)</li>
                  <li>• CPF</li>
                </ul>
              </div>

              <div>
                <h4 className='font-semibold text-foreground mb-2'>
                  Estrangeiros
                </h4>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li>• Passaporte válido</li>
                  <li>• Visto (se necessário)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-8'>
            <div className='flex items-center mb-6'>
              <Clock className='w-8 h-8 text-ocean mr-4' />
              <h3 className='font-display text-xl font-bold text-foreground'>
                Permanência
              </h3>
            </div>

            <div className='space-y-4'>
              <div>
                <h4 className='font-semibold text-foreground mb-2'>
                  Duração Ideal
                </h4>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li>• Mínimo: 3-4 dias</li>
                  <li>• Recomendado: 5-7 dias</li>
                  <li>• Máximo: 15 dias</li>
                </ul>
              </div>

              <div className='bg-sunset/5 rounded-xl p-3'>
                <p className='text-xs text-muted-foreground'>
                  <strong>Limite:</strong> Máximo de 460 visitantes por dia no
                  arquipélago.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contato e Reservas */}
        <div className='bg-white rounded-2xl shadow-lg p-8 md:p-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='font-display text-3xl font-bold text-foreground mb-6'>
                Pronto para a Aventura?
              </h3>
              <p className='text-lg text-muted-foreground mb-8'>
                Nossa equipe especializada está pronta para ajudar você a
                planejar cada detalhe da sua viagem para Fernando de Noronha.
                Entre em contato conosco e transforme seu sonho em realidade.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-center'>
                  <Phone className='w-5 h-5 text-ocean mr-3' />
                  <span className='text-muted-foreground'>(81) 3619-1111</span>
                </div>
                <div className='flex items-center'>
                  <Mail className='w-5 h-5 text-ocean mr-3' />
                  <span className='text-muted-foreground'>
                    contato@noronhaturismo.com.br
                  </span>
                </div>
                <div className='flex items-center'>
                  <MapPin className='w-5 h-5 text-ocean mr-3' />
                  <span className='text-muted-foreground'>
                    Fernando de Noronha, Pernambuco
                  </span>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Button variant='hero' size='lg' className='flex-1'>
                  Solicitar Orçamento
                </Button>
                <Button variant='outline' size='lg' className='flex-1'>
                  Falar com Especialista
                </Button>
              </div>
            </div>

            <div className='bg-gradient-to-br from-ocean/5 to-tropical/5 rounded-2xl p-8'>
              <h4 className='font-display text-2xl font-bold text-foreground mb-6'>
                Pacotes Disponíveis
              </h4>

              <div className='space-y-6'>
                <div className='border-l-4 border-ocean pl-4'>
                  <h5 className='font-semibold text-foreground'>
                    Pacote Econômico
                  </h5>
                  <p className='text-sm text-muted-foreground'>
                    3 dias / 2 noites
                  </p>
                  <p className='font-bold text-ocean'>A partir de R$ 1.899</p>
                </div>

                <div className='border-l-4 border-tropical pl-4'>
                  <h5 className='font-semibold text-foreground'>
                    Pacote Completo
                  </h5>
                  <p className='text-sm text-muted-foreground'>
                    5 dias / 4 noites
                  </p>
                  <p className='font-bold text-tropical'>
                    A partir de R$ 2.999
                  </p>
                </div>

                <div className='border-l-4 border-sunset pl-4'>
                  <h5 className='font-semibold text-foreground'>
                    Pacote Premium
                  </h5>
                  <p className='text-sm text-muted-foreground'>
                    7 dias / 6 noites
                  </p>
                  <p className='font-bold text-sunset'>A partir de R$ 4.499</p>
                </div>
              </div>

              <p className='text-xs text-muted-foreground mt-6'>
                * Preços por pessoa em acomodação dupla. Inclui hospedagem,
                traslados e principais passeios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className='bg-foreground text-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          <div>
            <div className='flex items-center mb-4'>
              <MapPin className='size-8 text-ocean mr-2' />
              <span className='font-display text-xl font-bold'>
                Fernando de Noronha
              </span>
            </div>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Descubra o paraíso brasileiro com águas cristalinas, vida marinha
              exuberante e experiências inesquecíveis no arquipélago mais belo
              do Brasil.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-300 hover:text-ocean transition-colors'
              >
                <Instagram className='size-6' />
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-ocean transition-colors'
              >
                <Facebook className='size-6' />
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-ocean transition-colors'
              >
                <Youtube className='size-6' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='font-display text-lg font-semibold mb-4'>
              Links Rápidos
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#about'
                  className='text-gray-300 hover:text-ocean transition-colors'
                >
                  Sobre Noronha
                </a>
              </li>
              <li>
                <a
                  href='#attractions'
                  className='text-gray-300 hover:text-ocean transition-colors'
                >
                  Atrações
                </a>
              </li>
              <li>
                <a
                  href='#experiences'
                  className='text-gray-300 hover:text-ocean transition-colors'
                >
                  Experiências
                </a>
              </li>
              <li>
                <a
                  href='#info'
                  className='text-gray-300 hover:text-ocean transition-colors'
                >
                  Como Chegar
                </a>
              </li>
              <li>
                <a
                  href='#info'
                  className='text-gray-300 hover:text-ocean transition-colors'
                >
                  Hospedagem
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-display text-lg font-semibold mb-4'>
              Experiências
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-ocean transition-colors'
                >
                  Mergulho Livre
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-ocean transition-colors'
                >
                  Mergulho Autônomo
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-ocean transition-colors'
                >
                  Observação de Golfinhos
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-ocean transition-colors'
                >
                  Trilhas Ecológicas
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-ocean transition-colors'
                >
                  Safari Fotográfico
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-display text-lg font-semibold mb-4'>Contato</h3>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <MapPin className='w-5 h-5 text-ocean mr-3 mt-1 flex-shrink-0' />
                <span className='text-gray-300'>
                  Fernando de Noronha
                  <br />
                  Pernambuco, Brasil
                </span>
              </div>
              <div className='flex items-center'>
                <Phone className='w-5 h-5 text-ocean mr-3' />
                <span className='text-gray-300'>(81) 3619-1111</span>
              </div>
              <div className='flex items-center'>
                <Mail className='w-5 h-5 text-ocean mr-3' />
                <span className='text-gray-300'>
                  contato@noronhaturismo.com.br
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-700 pt-8 mb-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300'>
            <div>
              <h4 className='font-semibold text-white mb-2'>
                Informações Importantes
              </h4>
              <ul className='space-y-1'>
                <li>• Limite de 460 visitantes por dia</li>
                <li>• Taxa de Preservação obrigatória</li>
                <li>• Reservas com antecedência necessárias</li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold text-white mb-2'>
                Sustentabilidade
              </h4>
              <ul className='space-y-1'>
                <li>• Parque Nacional Marinho</li>
                <li>• Patrimônio Mundial da UNESCO</li>
                <li>• Turismo responsável e sustentável</li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold text-white mb-2'>Segurança</h4>
              <ul className='space-y-1'>
                <li>• Operadores credenciados</li>
                <li>• Seguro viagem incluído</li>
                <li>• Guias especializados</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

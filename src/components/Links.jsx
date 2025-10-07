import React from 'react'
import { trackLinkClick } from '../utils/analytics'

const Links = () => {
  const links = [
    {
      id: 1,
      title: 'Aulas e Mentoria de Pickleball',
      description: 'Agende sua aula particular ou mentoria',
      url: 'https://wa.me/5516992144146',
      icon: '🎓',
      color: 'from-blue-400 to-green-400'
    },
    {
      id: 3,
      title: 'Instagram',
      description: 'Me siga para mais novidades',
      url: 'https://www.instagram.com/fabricioziliotti_pb',
      icon: '📸',
      color: 'from-green-400 to-blue-400'
    },
    {
      id: 4,
      title: 'LetzPlay',
      description: 'Acompanhe meus jogos e me siga por lá',
      url: 'https://letzplay.me/fabricioziliotti',
      icon: '🎯',
      color: 'from-blue-400 to-green-400'
    },
    {
      id: 10,
      title: 'Desenvolvo páginas como essa',
      description: 'Fale comigo para criar a sua também',
      url: 'https://wa.me/5516992144146?text=Olá%20Fabrício!%20Quero%20uma%20página%20como%20a%20sua.',
      icon: '💻',
      color: 'from-green-400 to-blue-400'
    },
    // Afiliados
    // {
    //   id: 11,
    //   title: 'Raquete recomendada (afiliado)',
    //   description: 'Excelente custo-benefício para iniciantes',
    //   url: 'https://example.com/raquete?ref=fziliotti',
    //   icon: '🏓',
    //   color: 'from-green-400 to-blue-400'
    // },
    // {
    //   id: 12,
    //   title: 'Bolas oficiais (afiliado)',
    //   description: 'Pack para treinos e jogos',
    //   url: 'https://example.com/bolas?ref=fziliotti',
    //   icon: '🟡',
    //   color: 'from-green-400 to-blue-400'
    // },
    // {
    //   id: 13,
    //   title: 'Tênis para quadra (afiliado)',
    //   description: 'Aderência e conforto',
    //   url: 'https://example.com/tenis?ref=fziliotti',
    //   icon: '👟',
    //   color: 'from-green-400 to-blue-400'
    // },
    // {
    //   id: 9,
    //   title: 'Contato',
    //   description: 'Agende uma conversa',
    //   url: 'https://wa.me/5516992144146',
    //   icon: '💬',
    //   color: 'from-green-400 to-blue-400'
    // }
  ]

  const handleLinkClick = (link) => {
    trackLinkClick(link.title, link.url)
  }

  return (
    <div className="space-y-4">
      {links.map((link, index) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick(link)}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 rounded-2xl"
          style={{ animationDelay: `${index * 0.1}s` }}
          aria-label={`${link.title} — ${link.description}`}
        >
          <div className="link-card group">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                  {link.description}
                </p>
              </div>
              <div className="text-slate-400 group-hover:text-slate-600 transition-colors" aria-hidden="true">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Links


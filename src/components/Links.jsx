import React from 'react'
import { trackLinkClick } from '../utils/analytics'

const Links = () => {
  const links = [
    {
      id: 1,
      title: 'Aulas de Pickleball',
      description: 'Agende sua aula particular',
      url: 'https://wa.me/5516992144146',
      icon: '🏓',
      color: 'from-green-500 to-green-600'
    },
    // {
    //   id: 2,
    //   title: 'YouTube - Técnicas',
    //   description: 'Tutoriais e dicas de jogo',
    //   url: 'https://youtube.com/@pickleballpro',
    //   icon: '📺',
    //   color: 'from-red-500 to-red-600'
    // },
    {
      id: 3,
      title: 'Instagram',
      description: 'Fotos e vídeos dos treinos',
      url: 'https://www.instagram.com/fabricioziliotti_pb',
      icon: '📸',
      color: 'from-pink-500 to-pink-600'
    },
    // {
    //   id: 4,
    //   title: 'TikTok',
    //   description: 'Dicas rápidas e highlights',
    //   url: 'https://tiktok.com/@pickleballpro',
    //   icon: '🎵',
    //   color: 'from-gray-800 to-gray-900'
    // },
    // {
    //   id: 5,
    //   title: 'Blog Técnico',
    //   description: 'Artigos sobre estratégias',
    //   url: 'https://blog-pickleball.com',
    //   icon: '📝',
    //   color: 'from-blue-500 to-blue-600'
    // },
    // {
    //   id: 6,
    //   title: 'Podcast',
    //   description: 'Conversas sobre pickleball',
    //   url: 'https://podcast-pickleball.com',
    //   icon: '🎙️',
    //   color: 'from-purple-500 to-purple-600'
    // },
    // {
    //   id: 7,
    //   title: 'Loja de Equipamentos',
    //   description: 'Raquetes e acessórios',
    //   url: 'https://loja-pickleball.com',
    //   icon: '🛒',
    //   color: 'from-orange-500 to-orange-600'
    // },
    // {
    //   id: 8,
    //   title: 'Calendário de Torneios',
    //   description: 'Próximos eventos',
    //   url: 'https://torneios-pickleball.com',
    //   icon: '📅',
    //   color: 'from-indigo-500 to-indigo-600'
    // },
    {
      id: 9,
      title: 'Contato',
      description: 'Agende uma conversa',
      url: 'https://wa.me/5516992144146',
      icon: '✉️',
      color: 'from-emerald-500 to-emerald-600'
    }
  ]

  const handleLinkClick = (link) => {
    trackLinkClick(link.title, link.url)
    window.open(link.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="space-y-4">
      {links.map((link, index) => (
        <div
          key={link.id}
          className="link-card cursor-pointer group"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => handleLinkClick(link)}
        >
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
            <div className="text-slate-400 group-hover:text-slate-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Links


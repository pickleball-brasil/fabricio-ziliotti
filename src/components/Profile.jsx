import React, { useState } from 'react'
import { trackEvent } from '../utils/analytics'

const Profile = () => {
  // Calcular meses desde julho de 2024
  const calculateMonthsPlaying = () => {
    const startDate = new Date(2024, 6, 1) // Julho de 2024 (mês 6 = julho)
    const currentDate = new Date()

    const yearDiff = currentDate.getFullYear() - startDate.getFullYear()
    const monthDiff = currentDate.getMonth() - startDate.getMonth()

    return yearDiff * 12 + monthDiff
  }

  const monthsPlaying = calculateMonthsPlaying()

  const [openMsg, setOpenMsg] = useState('')
  const [openTitle, setOpenTitle] = useState('')
  const closeDialog = () => { setOpenMsg(''); setOpenTitle('') }

  const openStat = (title, msg, eventLabel) => {
    setOpenTitle(title)
    setOpenMsg(msg)
    trackEvent('ProfileStat', 'Open', eventLabel)
  }

  const onKey = (e, title, msg, eventLabel) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openStat(title, msg, eventLabel)
    }
  }

  const messages = {
    months:
      'Iniciei em julho de 2024 no clube castelinho em Franca-SP. Já gostava de jogar tênis de mesa desde criança e me apaixonei assim que conheci o esporte.',
    cities:
      'Já joguei pickleball e fiz amizades nas cidades: Araraquara, Araras, Franca, Limeira, Ribeirão Preto, Taquaritinga e Natal.',
    tournaments:
      'Disputei torneios nas cidades Araraquara, Araras, Franca, Limeira, Taquaritinga. Sendo medalhista em jogos de duplas masculinas, duplas mistas e simples.',
    medals:
      'Até agora foram 8 medalhas conquistadas em diferentes categorias.'
  }

  return (
    <div className="text-center animate-slide-up">
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-green-400 to-blue-400 p-1">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src="./fabricio-pickleball.webp"
              alt="Fabrício Ziliotti"
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center',
                transform: 'scale(1.1)'
              }}
            />
          </div>
        </div>
        {/* Container com bounce; imagem com spin lento */}
        <span className="absolute -bottom-2 -right-2 w-5 h-5 bounce-subtle">
          <img src="./pickleball-ball.svg" alt="Bola de pickleball" className="w-full h-full spin-slow" />
        </span>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        Fabrício Ziliotti
      </h2>

      <p className="text-slate-600 mb-4 max-w-sm mx-auto">
        Atleta e instrutor de pickleball em Franca-SP, apaixonado pelo esporte.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-6 max-w-sm mx-auto">
        <div
          className="bg-green-50 rounded-lg p-2.5 cursor-pointer focus-visible-ring transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:bg-green-100"
          role="button"
          tabIndex={0}
          onClick={() => openStat('Meses jogando', messages.months, 'months_playing')}
          onKeyDown={(e) => onKey(e, 'Meses jogando', messages.months, 'months_playing')}
          aria-label="Saiba mais sobre os meses jogando"
        >
          <div className="text-xl font-bold text-green-600">{monthsPlaying}</div>
          <div className="text-[10px] text-green-600">Meses Jogando</div>
        </div>
        <div
          className="bg-blue-100 rounded-lg p-2.5 cursor-pointer focus-visible-ring transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:bg-blue-200"
          role="button"
          tabIndex={0}
          onClick={() => openStat('Cidades conhecidas', messages.cities, 'cities_known')}
          onKeyDown={(e) => onKey(e, 'Cidades conhecidas', messages.cities, 'cities_known')}
          aria-label="Veja as cidades conhecidas"
        >
          <div className="text-xl font-bold text-blue-600">7</div>
          <div className="text-[10px] text-blue-600">Cidades Conhecidas</div>
        </div>
        <div
          className="bg-blue-100 rounded-lg p-2.5 cursor-pointer focus-visible-ring transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:bg-blue-200"
          role="button"
          tabIndex={0}
          onClick={() => openStat('Torneios disputados', messages.tournaments, 'tournaments_played')}
          onKeyDown={(e) => onKey(e, 'Torneios disputados', messages.tournaments, 'tournaments_played')}
          aria-label="Detalhes dos torneios disputados"
        >
          <div className="text-xl font-bold text-blue-600">9</div>
          <div className="text-[10px] text-blue-600">Torneios Disputados</div>
        </div>
        <div
          className="bg-green-50 rounded-lg p-2.5 cursor-pointer focus-visible-ring transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:bg-green-100"
          role="button"
          tabIndex={0}
          onClick={() => openStat('Medalhas conquistadas', messages.medals, 'medals_won')}
          onKeyDown={(e) => onKey(e, 'Medalhas conquistadas', messages.medals, 'medals_won')}
          aria-label="Medalhas conquistadas"
        >
          <div className="text-xl font-bold text-green-600">8</div>
          <div className="text-[10px] text-green-600">Medalhas Conquistadas</div>
        </div>
      </div>

      {/* Modal simples e acessível */}
      {openMsg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeDialog}
        >
          <div
            className="max-w-md w-full rounded-2xl bg-white p-6 text-left shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-slate-800 pr-6">{openTitle}</h3>
              <button
                type="button"
                onClick={closeDialog}
                className="text-slate-400 hover:text-slate-600 focus-visible-ring rounded-md"
                aria-label="Fechar"
                title="Fechar"
              >
                ✕
              </button>
            </div>
            {openTitle === 'Cidades conhecidas' ? (
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4 text-sm">
                {['Araraquara', 'Araras', 'Franca', 'Limeira', 'Taquaritinga', 'Ribeirão Preto', 'Natal'].map(city => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            ) : openTitle === 'Torneios disputados' ? (
              <div className="text-slate-700 mb-4 text-sm space-y-2">
                <div>
                  <div className="font-medium mb-1">Cidades:</div>
                  <ul className="list-disc list-inside space-y-1">
                    {['Araraquara', 'Araras', 'Franca', 'Limeira', 'Taquaritinga'].map(city => (
                      <li key={city}>{city}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-medium mb-1">Medalhista em:</div>
                  <ul className="list-disc list-inside space-y-1">
                    {['Duplas masculinas', 'Duplas mistas', 'Simples'].map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-slate-700 mb-4 text-sm leading-relaxed">{openMsg}</p>
            )}
            <button
              type="button"
              onClick={closeDialog}
              className="btn-primary w-full"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-4 mb-6">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  )
}

export default Profile


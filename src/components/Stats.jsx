import React, { useState } from 'react'
import { trackEvent } from '../utils/analytics'

const Stats = () => {
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
      'Iniciei em julho de 2024 no Clube Castelinho em Franca-SP. Já gostava de jogar tênis de mesa desde criança e me apaixonei assim que conheci o esporte.',
    cities:
      'Já disputei torneios e jogos nas cidades: Araraquara, Araras, Franca, Limeira, Natal, Ribeirão Preto, Taquaritinga.',
    tournaments:
      'Disputei torneios nas cidades Araraquara, Araras, Franca, Limeira e Taquaritinga. Sendo medalhista em jogos de duplas masculinas, duplas mistas e simples.',
    medals:
      'Até agora foram 8 medalhas conquistadas em diferentes categorias.'
  }

  const stats = [
    {
      id: 1,
      value: monthsPlaying,
      label: 'Meses Jogando',
      color: 'green',
      message: messages.months,
      eventLabel: 'months_playing'
    },
    {
      id: 2,
      value: 7,
      label: 'Cidades Conhecidas',
      color: 'blue',
      message: messages.cities,
      eventLabel: 'cities_known'
    },
    {
      id: 3,
      value: 9,
      label: 'Torneios Disputados',
      color: 'blue',
      message: messages.tournaments,
      eventLabel: 'tournaments_played'
    },
    {
      id: 4,
      value: 8,
      label: 'Medalhas Conquistadas',
      color: 'green',
      message: messages.medals,
      eventLabel: 'medals_won'
    }
  ]

  return (
    <>
      <div className="grid grid-cols-4 gap-2 animate-fade-in">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`${
              stat.color === 'green' 
                ? 'bg-green-50 hover:bg-green-100' 
                : 'bg-blue-50 hover:bg-blue-100'
            } rounded-xl p-3 cursor-pointer focus-visible-ring transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg`}
            role="button"
            tabIndex={0}
            onClick={() => openStat(stat.label, stat.message, stat.eventLabel)}
            onKeyDown={(e) => onKey(e, stat.label, stat.message, stat.eventLabel)}
            aria-label={`Saiba mais sobre ${stat.label}`}
          >
            <div className={`text-2xl font-bold ${
              stat.color === 'green' ? 'text-green-600' : 'text-blue-600'
            }`}>
              {stat.value}
            </div>
            <div className={`text-[10px] font-medium leading-tight ${
              stat.color === 'green' ? 'text-green-700' : 'text-blue-700'
            }`}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
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
            {openTitle === 'Cidades Conhecidas' ? (
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4 text-sm">
                {['Araraquara', 'Araras', 'Franca', 'Limeira', 'Taquaritinga', 'Ribeirão Preto', 'Natal'].map(city => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            ) : openTitle === 'Torneios Disputados' ? (
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
    </>
  )
}

export default Stats


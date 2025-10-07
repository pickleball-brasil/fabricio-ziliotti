import React from 'react'

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
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-green-500 animate-bounce-slow flex items-center justify-center">
          <span className="text-sm">🥒</span>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        Fabrício Ziliotti
      </h2>
      
      <p className="text-slate-600 mb-4 max-w-sm mx-auto">
        Atleta e instrutor de pickleball, apaixonado pelo esporte. 
        Compartilhando dicas e técnicas para melhorar seu jogo!
      </p>
      
      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-4 mb-6 max-w-sm mx-auto">
        <p className="text-slate-700 font-medium text-center italic">
          "O esporte mudou minha vida, pode mudar a sua também."
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6 max-w-sm mx-auto">
        <div className="bg-green-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-green-600">{monthsPlaying}</div>
          <div className="text-xs text-green-600">Meses Jogando</div>
        </div>
        <div className="bg-orange-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-orange-600">7</div>
          <div className="text-xs text-orange-600">Cidades Conhecidas</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-blue-600">9</div>
          <div className="text-xs text-blue-600">Torneios Disputados</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-purple-600">8</div>
          <div className="text-xs text-purple-600">Medalhas Conquistadas</div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4 mb-6">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  )
}

export default Profile


import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center py-8 mt-16">
      <div className="max-w-md mx-auto px-4">
        <div className="glass-effect rounded-2xl p-6">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl mr-2">🏓</span>
            <p className="text-slate-600 text-sm">
              Atleta e instrutor de pickleball
            </p>
          </div>
          
          {/* <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
            <div className="bg-green-50 rounded-lg p-3">
              <div className="font-semibold text-green-800">🏆 Ranking</div>
              <div className="text-green-600">Top 100 Nacional</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="font-semibold text-blue-800">📚 Certificação</div>
              <div className="text-blue-600">Instrutor Certificado</div>
            </div>
          </div> */}
          
          
          <div className="text-xs text-slate-500 space-y-1">
            <div>© 2024 Fabrício Ziliotti. Todos os direitos reservados.</div>
            <div className="text-slate-400">
              Feito com ❤️ por Fziliotti
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


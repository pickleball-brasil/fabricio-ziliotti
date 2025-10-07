import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center py-8 mt-16">
      <div className="max-w-md mx-auto px-4">
        <div className="glass-effect rounded-2xl p-6">
        
          
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
            <div>© Desenvolvido em 2025. Todos os direitos reservados.</div>
            <div className="text-slate-400">
              Feito com ❤️ por Fabricio Ziliotti
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


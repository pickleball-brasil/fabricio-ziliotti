import React from 'react'
import Stats from './Stats'

const Footer = () => {
  return (
    <footer className="text-center mt-4">
      <div className="max-w-md mx-auto px-4">
        {/* Estatísticas */}
        <div className="mb-6">
          <Stats />
        </div>

        {/* Créditos */}
        <div className="glass-effect rounded-2xl p-4">
          <div className="text-xs text-slate-500 space-y-1">
           
            <div className="text-slate-400">
              Desenvolvido por Fabricio Ziliotti
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


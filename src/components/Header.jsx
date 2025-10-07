import React from 'react'

const Header = () => {
  return (
    <header className="text-center py-8">
      <div className="animate-fade-in">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-3xl">🏓</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Fabrício Ziliotti
          </h1>
        </div>
        <p className="text-slate-600 text-lg">
          Atleta e instrutor de pickleball
        </p>
        <div className="mt-4 flex justify-center space-x-2">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">🏆 Campeão</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">👨‍🏫 Instrutor</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">🎯 Atleta</span>
        </div>
      </div>
    </header>
  )
}

export default Header


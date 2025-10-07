import React, { useEffect } from 'react'
import { initGA, trackPageView } from './utils/analytics'
import Profile from './components/Profile'
import Links from './components/Links'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Inicializar Google Analytics
    const gaId = 'G-RYSE6VXWSH'
    initGA(gaId)
    trackPageView()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto space-y-8">
          <Profile />
          <Links />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App


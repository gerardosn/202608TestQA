import React, { useState } from 'react'
import Icon from '../components/Icon'
import { PageIndicator } from '../components/PageIndicator'

export default function OnboardingScreen(){
  const [page,setPage] = useState(1)
  return (
    <div className="min-h-screen bg-surface p-4" role="main" aria-label="Onboarding" tabIndex={0}>
      <div className="flex justify-end">
        <button className="text-[#49454F]" role="button" aria-label="Saltar" tabIndex={1}>Saltar</button>
      </div>
      <div className="flex flex-col items-center mt-6">
        <div className="w-72 h-72 bg-[#E0E7FF] rounded-md flex items-center justify-center">
          {/* placeholder illustration */}
          <Icon name={page===1? 'menu_book' : page===2? 'fact_check' : 'headphones'} size={64} contentDescription="Ilustración" />
        </div>
        <h3 className="mt-6 text-[#1A1A2E] text-xl font-medium">{page===1? 'Convierte tu bibliografía' : page===2? 'Anclaje bibliográfico real' : 'Escucha en cualquier lugar'}</h3>
        <p className="mt-2 text-[#49454F] text-center max-w-md">{page===1? 'Sube tus fuentes académicas y genera podcasts completos con anclaje bibliográfico verificable.' : page===2? 'Cada afirmación del guión se verifica contra tus fuentes con RAG. Sabrás exactamente de dónde viene cada idea.' : 'Streaming TTS en español neutro. Instala la app en tu móvil y escucha tus capítulos offline.'}</p>
      </div>

      <div className="mt-12 flex justify-center">
        <PageIndicator page={page} />
      </div>

      <div className="fixed bottom-20 left-6 right-6">
        <button className="w-full bg-primary text-white py-3 rounded flex items-center justify-center gap-2" role="button" aria-label={page<3? 'Siguiente' : 'Comenzar'} onClick={()=> setPage(p=> Math.min(3,p+1))} tabIndex={2}>
          <span>{page<3? 'Siguiente' : 'Comenzar'}</span>
          {page<3 && <Icon name="arrow_forward" size={20} contentDescription="Siguiente" />}
        </button>
      </div>
    </div>
  )
}

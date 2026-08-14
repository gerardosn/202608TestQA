import React from 'react'
import TopBarLarge from '../components/TopBarLarge'
import BottomNav from '../components/BottomNav'

export default function HomeScreen(){
  return (
    <div className="min-h-screen bg-surface">
      <TopBarLarge />
      <main className="max-w-screen-md mx-auto p-4" role="main" aria-label="Home">
        <section aria-label="Continuar escuchando" className="bg-white rounded-lg shadow p-4 flex gap-4 items-center" role="group" aria-roledescription="card" tabIndex={10}>
          <div className="w-28 h-28 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#1A1A2E] flex items-center justify-center">
            <span className="material-symbols-rounded text-white text-4xl" aria-hidden>play_arrow</span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium text-[#1A1A2E]">Termodinámica Explicada</h3>
            <p className="text-sm text-[#49454F]">Cap. 3 de 5 · 12 min restantes</p>
            <div className="w-full bg-[#E0E7FF] h-1 rounded mt-3"><div className="bg-primary h-1 rounded" style={{width:'60%'}} aria-hidden></div></div>
          </div>
        </section>

        <div className="mt-6 flex items-center justify-between">
          <h4 className="text-sm font-medium text-[#1A1A2E]">Tus proyectos</h4>
          <button className="text-[#4F46E5]" role="button">Ver todo</button>
        </div>

        <div className="mt-3 flex gap-3 overflow-x-auto pb-4" role="list" aria-label="Proyectos recientes">
          {[1,2,3].map(i=> (
            <article key={i} className="w-44 bg-white rounded-lg shadow p-3 flex-shrink-0" role="listitem" aria-label={`Proyecto ${i}`} tabIndex={11}>
              <div className="h-28 rounded-md bg-gradient-to-br from-[#4F46E5] to-[#1A1A2E]"></div>
              <h5 className="mt-2 text-sm font-medium text-[#1A1A2E]">Proyecto {i}</h5>
              <div className="mt-2 text-xs text-[#49454F]">5 cap · 125 min</div>
            </article>
          ))}
        </div>

        <div className="mt-6 bg-[#E0E7FF] p-4 rounded-lg border-dashed border-2 border-[#4F46E5] flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#F59E0B] flex items-center justify-center">
            <span className="material-symbols-rounded text-white">add</span>
          </div>
          <div>
            <h5 className="text-sm font-medium text-[#1E1B4B]">Crear nuevo proyecto</h5>
            <p className="text-xs text-[#49454F]">Sube bibliografía y genera 5 capítulos</p>
          </div>
        </div>

      </main>
      <BottomNav />
    </div>
  )
}

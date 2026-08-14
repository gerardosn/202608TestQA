import React from 'react'
import Icon from './Icon'

export default function TopBarLarge({title='Hola, Ana 👋', subtitle='Tienes 3 proyectos en curso'}:{title?:string, subtitle?:string}){
  return (
    <header className="w-full bg-primary-container dark:bg-[#4539A8]" role="banner" aria-label="Top bar" tabIndex={-1}>
      <div className="max-w-screen-md mx-auto px-4 py-4 h-48">
        <div className="flex items-start justify-between">
          <button aria-label="Abrir menú" className="p-2" role="button" tabIndex={1}>
            <Icon name="menu" contentDescription="Abrir menú" />
          </button>
          <div className="flex gap-2 items-center">
            <button aria-label="Buscar" className="p-2" role="button" tabIndex={2}>
              <Icon name="search" contentDescription="Buscar" />
            </button>
            <button aria-label="Notificaciones" className="p-2 relative" role="button" tabIndex={3}>
              <Icon name="notifications" contentDescription="Abrir notificaciones" />
              <span className="absolute -top-0 -right-0 w-2 h-2 bg-red-500 rounded-full" aria-hidden></span>
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-3xl font-semibold text-[#1E1B4B]" role="heading" aria-level={1}>{title}</h1>
          <p className="text-sm text-[#1E1B4B]/80">{subtitle}</p>
        </div>
      </div>
    </header>
  )
}

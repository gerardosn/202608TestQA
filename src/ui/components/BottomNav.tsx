import React from 'react'
import Icon from './Icon'

export default function BottomNav(){
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-darksurface border-t border-gray-100 dark:border-[#49454F]" role="navigation" aria-label="Bottom navigation">
      <div className="max-w-screen-md mx-auto flex justify-between px-4 py-2">
        <button className="flex flex-col items-center text-sm" role="button" aria-label="Inicio" tabIndex={99}>
          <Icon name="home" contentDescription="Ir a Inicio" />
          <span>Inicio</span>
        </button>
        <button className="flex flex-col items-center text-sm" role="button" aria-label="Biblioteca" tabIndex={100}>
          <Icon name="library_books" contentDescription="Ir a Biblioteca" />
          <span>Biblioteca</span>
        </button>
        <button className="flex flex-col items-center text-sm" role="button" aria-label="Perfil" tabIndex={101}>
          <Icon name="account_circle" contentDescription="Ir a Perfil" />
          <span>Perfil</span>
        </button>
      </div>
    </nav>
  )
}

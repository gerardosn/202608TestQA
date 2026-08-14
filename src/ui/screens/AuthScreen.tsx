import React, { useState } from 'react'
import Icon from '../components/Icon'
import ButtonFilled from '../components/ButtonFilled'

export default function AuthScreen(){
  const [tab, setTab] = useState<'login'|'signup'>('login')
  const [showPass,setShowPass] = useState(false)
  return (
    <main className="min-h-screen bg-surface p-4" role="main" aria-label="Login y Registro">
      <div className="flex items-center gap-2">
        <button aria-label="Volver" role="button" tabIndex={1} className="p-2"><Icon name="arrow_back" contentDescription="Volver"/></button>
      </div>

      <div className="mt-12 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#F59E0B] flex items-center justify-center" aria-hidden>
          <Icon name="graphic_eq" size={32} contentDescription=""/>
        </div>
        <div>
          <h1 className="text-2xl font-medium text-[#1A1A2E]">Bienvenido de nuevo</h1>
          <p className="text-sm text-[#49454F]">Inicia sesión para continuar</p>
        </div>
      </div>

      <div className="mt-6 bg-[#E7E0EC] rounded-full p-1 w-full max-w-md" role="tablist" aria-label="Modo autenticación">
        <div className="flex rounded-full" role="tab" aria-selected={tab==='login'}>
          <button onClick={()=>setTab('login')} className={`flex-1 py-3 rounded-full ${tab==='login' ? 'bg-white text-[#4F46E5]' : 'text-[#49454F]'}`} role="tab" aria-selected={tab==='login'} tabIndex={2}>Iniciar sesión</button>
          <button onClick={()=>setTab('signup')} className={`flex-1 py-3 rounded-full ${tab==='signup' ? 'bg-white text-[#4F46E5]' : 'text-[#49454F]'}`} role="tab" aria-selected={tab==='signup'} tabIndex={3}>Crear cuenta</button>
        </div>
      </div>

      <form className="mt-6 max-w-md" aria-label={tab==='login' ? 'Formulario de inicio de sesión' : 'Formulario de creación de cuenta'}>
        <label className="block text-sm text-[#49454F]">Correo electrónico</label>
        <div className="mt-2 relative">
          <input type="email" className="w-full border border-[#E7E0EC] rounded px-3 py-3" placeholder="tu@ejemplo.com" aria-label="Correo electrónico" tabIndex={4} />
          <span className="absolute right-3 top-3 text-gray-400"><Icon name="mail" size={18} contentDescription=""/></span>
        </div>

        <label className="block text-sm text-[#49454F] mt-4">Contraseña</label>
        <div className="mt-2 relative">
          <input type={showPass? 'text':'password'} className="w-full border border-[#E7E0EC] rounded px-3 py-3" placeholder="Contraseña" aria-label="Contraseña" tabIndex={5} />
          <button type="button" className="absolute right-3 top-3" onClick={()=>setShowPass(s=>!s)} aria-label={showPass? 'Ocultar contraseña' : 'Mostrar contraseña'} tabIndex={6}>
            <Icon name={showPass? 'visibility':'visibility_off'} size={18} contentDescription={showPass? 'Ocultar contraseña' : 'Mostrar contraseña'} />
          </button>
        </div>

        <div className="mt-2 text-right">
          <button className="text-[#4F46E5]" role="button" tabIndex={7}>¿Olvidaste tu contraseña?</button>
        </div>

        <div className="mt-6">
          <ButtonFilled ariaLabel="Iniciar sesión">Iniciar sesión</ButtonFilled>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-[#E7E0EC]"></div>
          <div className="px-4 bg-white text-[#49454F]">o</div>
          <div className="flex-1 h-px bg-[#E7E0EC]"></div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 border border-[#E7E0EC] rounded py-3 flex items-center justify-center gap-2" role="button" aria-label="Continuar con Google" tabIndex={8}><Icon name="google" size={18} contentDescription=""/>Google</button>
          <button className="flex-1 border border-[#E7E0EC] rounded py-3 flex items-center justify-center gap-2" role="button" aria-label="Continuar con Apple" tabIndex={9}><Icon name="apple" size={18} contentDescription=""/>Apple</button>
        </div>

        <p className="text-center text-sm text-[#49454F] mt-8">Al continuar aceptas los <button className="text-[#4F46E5]" role="link">Términos</button> y la <button className="text-[#4F46E5]" role="link">Política de Privacidad</button></p>
      </form>
    </main>
  )
}

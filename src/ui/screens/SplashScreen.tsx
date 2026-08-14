import React, { useEffect } from 'react'
import Icon from '../components/Icon'
import { announceForAccessibility } from '../../utils/accessibility'

export default function SplashScreen(){
  useEffect(()=>{
    // announce loading for accessibility
    announceForAccessibility('Cargando la aplicación')
  },[])
  return (
    <div className="splash-bg min-h-screen flex flex-col items-center justify-center relative" role="main" aria-label="Splash screen" tabIndex={0}>
      <div style={{position:'absolute', top:380-50, left:156}} aria-hidden></div>
      <div className="flex flex-col items-center">
        <div className="logo-glass pulse-anim" role="img" aria-label="Logo de PodScript AI" tabIndex={1}>
          <Icon name="graphic_eq" size={48} contentDescription="" />
        </div>
        <h2 className="mt-8 text-white text-2xl font-medium" role="heading" aria-level={2} style={{letterSpacing:0.5}}>PodScript AI</h2>
        <p className="text-white/70 mt-2">Tu biblioteca en podcast</p>
      </div>

      <div className="absolute" style={{bottom:95, left:'50%', transform:'translateX(-50%)'}}>
        <div className="w-9 h-9 rounded-full border-0 flex items-center justify-center">
          <div className="w-9 h-9 spin-anim" style={{border:'3px solid transparent', borderTopColor:'#F59E0B', borderRadius:999}} aria-hidden></div>
        </div>
      </div>

      <div className="absolute bottom-8 text-white/50" role="contentinfo">v4.0.1</div>
    </div>
  )
}

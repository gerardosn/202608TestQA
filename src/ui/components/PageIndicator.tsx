import React from 'react'
import Icon from './Icon'

export function PageIndicator({page}:{page:number}){
  return (
    <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Indicadores de página">
      {[1,2,3].map(i=> (
        <div key={i} className={`page-dot ${i===page? 'active bg-primary':'bg-[#E7E0EC]'}`} aria-hidden></div>
      ))}
    </div>
  )
}

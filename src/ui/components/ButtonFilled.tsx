import React from 'react'

export default function ButtonFilled({children, onClick, ariaLabel}:{children:React.ReactNode, onClick?:()=>void, ariaLabel?:string}){
  return (
    <button
      className="w-full bg-primary text-white py-3 rounded-md shadow focus-visible:outline-none focus-visible:ring-0"
      onClick={onClick}
      role="button"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {children}
    </button>
  )
}

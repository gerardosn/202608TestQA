import React from 'react'

type IconProps = {
  name: string
  size?: number // px
  contentDescription?: string | null // if null => decorative
  className?: string
}

export default function Icon({name, size=24, contentDescription=null, className=''}: IconProps){
  const style: React.CSSProperties = { fontSize: size, lineHeight: 1 }
  const isDecorative = contentDescription === '' || contentDescription === null
  return (
    <span
      role={isDecorative ? undefined : 'img'}
      aria-label={isDecorative ? undefined : contentDescription ?? undefined}
      aria-hidden={isDecorative ? true : undefined}
      className={`material-symbols-rounded material-symbol ${className}`}
      style={style}
    >
      {name}
    </span>
  )
}

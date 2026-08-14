export function announceForAccessibility(message: string){
  // simple live region helper — components can import and call this to announce state changes
  let el = document.getElementById('podscript-live-region') as HTMLDivElement | null
  if(!el){
    el = document.createElement('div')
    el.id = 'podscript-live-region'
    el.setAttribute('aria-live','polite')
    el.setAttribute('aria-atomic','true')
    el.style.position = 'absolute'
    el.style.width = '1px'
    el.style.height = '1px'
    el.style.margin = '-1px'
    el.style.border = '0'
    el.style.padding = '0'
    el.style.overflow = 'hidden'
    el.style.clip = 'rect(0 0 0 0)'
    document.body.appendChild(el)
  }
  el.textContent = ''
  // small timeout to ensure announcement is detected on repeated messages
  setTimeout(()=> el!.textContent = message, 50)
}

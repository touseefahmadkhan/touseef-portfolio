export const revealClass = 'reveal'

export const gradientBlobStyle = {
  position: 'absolute' as const,
  borderRadius: '50%',
  filter: 'blur(80px)',
  pointerEvents: 'none' as const,
}

export const scrollIntoView = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

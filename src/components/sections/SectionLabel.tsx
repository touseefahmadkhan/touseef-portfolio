type SectionLabelProps = {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 16px',
        borderRadius: 999,
        background: 'rgba(108,99,255,0.12)',
        border: '1px solid rgba(108,99,255,0.25)',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#a78bfa',
        marginBottom: 16,
        fontFamily: 'JetBrains Mono, monospace',
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#6c63ff',
          display: 'inline-block',
          boxShadow: '0 0 8px #6c63ff',
        }}
      />
      {children}
    </div>
  )
}

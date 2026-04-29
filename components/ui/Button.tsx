import type { CSSProperties, ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  style?: CSSProperties
}

export function Button({ href, children, style }: ButtonProps) {
  return (
    <a
      href={href}
      style={{
        backgroundColor: ' var(--color-primary)',
        color: 'white',
        fontWeight: 700,
        padding: '16px 36px',
        borderRadius: 8,
        textDecoration: 'none',
        boxShadow: '0 0 30px rgba(22,125,130,0.3)',
        ...style,
      }}
    >
      {children}
    </a>
  )
}

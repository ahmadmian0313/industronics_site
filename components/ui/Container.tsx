import type { CSSProperties, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  style?: CSSProperties
}

export function Container({ children, style }: ContainerProps) {
  return <div style={{ maxWidth: 1200, margin: '0 auto', ...style }}>{children}</div>
}

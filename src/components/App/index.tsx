import React from 'react'
import { TicketsProvider } from '../../providers/TicketsProvider'

export const App: React.FC = () => {
  return (
    <TicketsProvider>
      <div>App</div>
    </TicketsProvider>
  )
}

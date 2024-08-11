// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import { Toaster } from 'sonner'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Toaster closeButton richColors position='top-right' />
      {children}
    </NextUIProvider>
  )
}
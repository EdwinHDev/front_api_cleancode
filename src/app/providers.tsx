'use client'

import { DashboardProvider } from '@/context/dashboardContext'
import {NextUIProvider} from '@nextui-org/react'
import { Toaster } from 'sonner'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <DashboardProvider>
      <NextUIProvider>
        <Toaster closeButton richColors position='top-right' />
        {children}
      </NextUIProvider>
    </DashboardProvider>
  )
}
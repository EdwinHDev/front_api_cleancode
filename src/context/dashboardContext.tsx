"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

interface Dashboard {
  collapse: boolean
  setCollapse: Dispatch<SetStateAction<boolean>>
}

export const DashboardContext = createContext( {} as Dashboard )

interface Props {
  children: ReactNode
}

export const DashboardProvider = ({ children }: Props) => {

  const [ collapse, setCollapse ] = useState( true )

  return (
    <DashboardContext.Provider
      value={{
        collapse,
        setCollapse
      }}
    >
      { children }
    </DashboardContext.Provider>
  )
}
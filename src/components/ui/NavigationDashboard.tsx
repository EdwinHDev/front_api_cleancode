"use client"

import { NavDashboard } from "@/types/dashboard"
import { Button } from "@nextui-org/react"
import Link from "next/link"

interface Props extends NavDashboard {
  collapse: boolean,
  pathname: string,
}

export const NavigationDashboard = ({ collapse, pathname, url, icon, label }: Props) => {

  return (
    <Link
      href={ url }
      className={`flex gap-2 items-center w-full transition-all ${ collapse ? 'p-3' : pathname === url ? 'bg-zinc-700/25 p-4' : 'hover:bg-zinc-700/15 p-4' }`}
    >
      <Button
        isIconOnly
        variant={ pathname === url ? "faded" : "flat" }
        className={`${ collapse ? '' : 'hidden' }`}
      >
        { icon({}) }
      </Button>
      <div
        className={`${ collapse ? 'hidden' : '' }`}
      >
        { icon({}) }
      </div>
      <p
        className={`${ collapse ? 'hidden' : '' }`}
      >
        { label }
      </p>
    </Link>
  )
}
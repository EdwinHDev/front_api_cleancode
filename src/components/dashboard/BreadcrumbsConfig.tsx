"use client"
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react"
import { usePathname } from "next/navigation"

export const BreadcrumbsConfig = () => {

  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  return (
    <Breadcrumbs>
      {segments.map(( segment, index ) => (
        <BreadcrumbItem  key={ index }>{ segment }</BreadcrumbItem>
      ))}
    </Breadcrumbs>
  )
}

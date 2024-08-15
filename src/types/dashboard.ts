import { SVG } from "@/components/ui/icons"
import { ReactNode, SVGProps } from "react"

export interface NavDashboard {
  url: string
  icon: (props: SVG) => JSX.Element
  label: string
}
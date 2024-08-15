"use client"

import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { ReactNode, useContext } from "react"
import { usePathname, useRouter } from "next/navigation"
import { DashboardContext } from "@/context/dashboardContext"
import { navConfig } from "@/config/navDashboard"
import { NavigationDashboard } from "../ui/NavigationDashboard"
import { ArrowCollapseLeft, ArrowCollapseRight } from "../ui/icons"
import cookies from "js-cookie"

interface Props {
  children: ReactNode
}

export const Admin = ( { children }: Props ) => {

  const pathname = usePathname()
  const router = useRouter()
  const { collapse, setCollapse } = useContext( DashboardContext )

  const signOut = () => {
    cookies.remove("token")
    router.push("/")
  }

  return (
    <div className="h-screen flex">
      <aside
        className={`${collapse ? "w-16" : "w-64"} bg-zinc-900 border-e border-zinc-800 text-white transition-all`}
      >
        <header
          className="px-4 h-16 flex items-center border-b border-zinc-800"
        >
          <p className="text-2xl font-bold text-white">
            { collapse ? 'L' : 'Logo' }
          </p>
        </header>
        <div className="py-4">
          <ul>
            {
              navConfig.map( ( nav, index ) => (
                <li key={ index }>
                  <NavigationDashboard
                    collapse={ collapse }
                    pathname={ pathname }
                    url={ nav.url }
                    icon={ nav.icon }
                    label={ nav.label }
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </aside>
      <main className="flex-1">
        <header
          className="px-4 h-16 flex justify-between items-center bg-zinc-900 border-b border-zinc-800"
        >
          <Button
            onClick={ () => setCollapse( !collapse ) }
            isIconOnly
          >
            { collapse ? <ArrowCollapseRight /> : <ArrowCollapseLeft /> }
          </Button>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                radius="lg"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem textValue="Profile" key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem textValue="Settings" key="settings">
                My Settings
              </DropdownItem>
              <DropdownItem textValue="Team Settings" key="team_settings">Team Settings</DropdownItem>
              <DropdownItem textValue="Analytics" key="analytics">
                Analytics
              </DropdownItem>
              <DropdownItem textValue="System" key="system">System</DropdownItem>
              <DropdownItem textValue="Configurations" key="configurations">Configurations</DropdownItem>
              <DropdownItem textValue="Help & Feedback" key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                textValue="Log Out"
                key="logout"
                color="danger"
                onClick={ signOut }
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </header>
        <div
          className="p-6 bg-zinc-950 h-[calc(100vh-64px)] overflow-auto"
        >{ children }</div>
      </main>
    </div>
  )
}

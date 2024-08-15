import { Admin } from "@/components/dashboard/Admin"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <Admin>
      {children}
    </Admin>
  )
}
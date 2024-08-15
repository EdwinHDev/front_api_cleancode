import { BreadcrumbsConfig } from "@/components/dashboard/BreadcrumbsConfig";
import { CardPreviewDetail } from "@/components/dashboard/CardPreviewDetail";
import { Product, Users } from "@/components/ui/icons";

export default function DashboardPage() {

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 space-y-2">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <BreadcrumbsConfig />
      </div>
      <CardPreviewDetail
        className="col-span-12 md:col-span-6 xl:col-span-4"
        icon={ <Users className="w-6 h-6" /> }
        title="Users"
        description="Last 6 months"
        config={{
          register: {
            label: "Register",
            color: "#2563eb",
          },
          actives: {
            label: "Actives",
            color: "#60a5fa",
          }
        }}
        data={{
          chartValues: [
            { month: "January", register: 186, actives: 80 },
            { month: "February", register: 305, actives: 200 },
            { month: "March", register: 237, actives: 120 },
            { month: "April", register: 73, actives: 190 },
            { month: "May", register: 209, actives: 130 },
            { month: "June", register: 214, actives: 140 },
          ],
        }}
        tooltip
        height={ 120 }
      />
      <CardPreviewDetail
        className="col-span-12 md:col-span-6 xl:col-span-4"
        icon={ <Product className="w-6 h-6" /> }
        title="Products"
        description="Last 6 months"
        config={{
          register: {
            label: "Register",
            color: "#2563eb",
          },
          actives: {
            label: "Actives",
            color: "#60a5fa",
          }
        }}
        
        data={{
          chartValues: [
            { month: "January", register: 354, actives: 182 },
            { month: "February", register: 284, actives: 190 },
            { month: "March", register: 165, actives: 251 },
            { month: "April", register: 101, actives: 190 },
            { month: "May", register: 179, actives: 130 },
            { month: "June", register: 293, actives: 245 },
          ],
        }}
        tooltip
        height={ 120 }
      />
    </div>
  )
}

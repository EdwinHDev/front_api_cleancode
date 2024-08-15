import { BreadcrumbsConfig } from "@/components/dashboard/BreadcrumbsConfig";

export default function UsersPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 space-y-2">
        <h1 className="text-2xl font-bold">Products</h1>
        <BreadcrumbsConfig />
      </div>
    </div>
  )
}

import { NavDashboard } from '../types/dashboard';
import { Dashboard, Product, Users } from '@/components/ui/icons'

export const navConfig: NavDashboard[] = [
  {
    url: '/dashboard',
    icon: Dashboard,
    label: 'Dashboard'
  },
  {
    url: '/dashboard/users',
    icon: Users,
    label: 'Users'
  },
  {
    url: '/dashboard/products',
    icon: Product,
    label: 'Products'
  },
]
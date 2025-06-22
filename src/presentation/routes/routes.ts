import { ValidRoles } from '@/interfaces/user.interface';
import { lazy, type LazyExoticComponent, type ReactNode } from 'react';

interface Route {
  path: string;
  Component: LazyExoticComponent<() => ReactNode>;
  name: string;
  roles: ValidRoles[] | [];
}

export const routes: Route[] = [
  {
    path: '/',
    Component: lazy(() => import(/*webpackChunkName: "Home" */ '@/presentation/pages/Home')),
    roles: [],
    name: 'home',
  },
  {
    path: '/login',
    name: 'login',
    Component: lazy(() => import(/*webpackChunkName: "Login" */ '@/presentation/pages/Login')),
    roles: [],
  },
  {
    path: '/signup',
    name: 'signup',
    Component: lazy(() => import(/*webpackChunkName: "SignUp" */ '@/presentation/pages/SignUp')),
    roles: [],
  },
  {
    path: '/profile',
    name: 'profile',
    Component: lazy(
      () => import(/*webpackChunkName: "Profile" */ '@/presentation/pages/Private/Profile'),
    ),
    roles: [ValidRoles.customer, ValidRoles.employee, ValidRoles.admin],
  },
  {
    path: '/vehicles',
    name: 'vehicles',
    Component: lazy(
      () => import(/*webpackChunkName: "Vehicles" */ '@/presentation/pages/Private/Vehicles'),
    ),
    roles: [ValidRoles.customer, ValidRoles.employee, ValidRoles.admin],
  },
  {
    path: '/parking/slot',
    name: 'parkingSlot',
    Component: lazy(
      () =>
        import(/*webpackChunkName: "Reserve" */ '@/presentation/pages/Private/Parking/ReserveSlot'),
    ),
    roles: [ValidRoles.customer, ValidRoles.employee, ValidRoles.admin],
  },
  {
    path: '/parking/date',
    name: 'reserveDate',
    Component: lazy(
      () =>
        import(
          /*webpackChunkName: "ReserveDate" */ '@/presentation/pages/Private/Parking/ReserveDate'
        ),
    ),
    roles: [ValidRoles.customer, ValidRoles.employee, ValidRoles.admin],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    Component: lazy(
      () =>
        import(/*webpackChunkName: "Dashboard" */ '@/presentation/pages/Private/Admin/Dashboard'),
    ),
    roles: [ValidRoles.admin],
  },
];

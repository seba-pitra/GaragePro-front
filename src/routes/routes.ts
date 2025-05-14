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
    Component: lazy(() => import(/*webpackChunkName: "Home" */ '@/pages/Home')),
    roles: [],
    name: 'home',
  },
  {
    path: '/login',
    name: 'login',
    Component: lazy(() => import(/*webpackChunkName: "Login" */ '@/pages/Login')),
    roles: [],
  },
  {
    path: '/signup',
    name: 'signup',
    Component: lazy(() => import(/*webpackChunkName: "SignUp" */ '@/pages/SignUp')),
    roles: [],
  },
  {
    path: '/profile',
    name: 'profile',
    Component: lazy(() => import(/*webpackChunkName: "Profile" */ '@/pages/Private/Profile')),
    roles: [ValidRoles.customer, ValidRoles.employee, ValidRoles.admin],
  },
  {
    path: '/vehicles',
    name: 'vehicles',
    Component: lazy(() => import(/*webpackChunkName: "Vehicles" */ '@/pages/Private/Vehicles')),
    roles: [ValidRoles.customer, ValidRoles.employee, ValidRoles.admin],
  },
  {
    path: '/parking/slot',
    name: 'parkingSlot',
    Component: lazy(
      () => import(/*webpackChunkName: "Reserve" */ '@/pages/Private/Parking/ReserveSlot'),
    ),
    roles: [ValidRoles.customer, ValidRoles.employee, ValidRoles.admin],
  },
  {
    path: '/parking/date',
    name: 'reserveDate',
    Component: lazy(
      () => import(/*webpackChunkName: "ReserveDate" */ '@/pages/Private/Parking/ReserveDate'),
    ),
    roles: [ValidRoles.customer, ValidRoles.employee, ValidRoles.admin],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    Component: lazy(
      () => import(/*webpackChunkName: "Dashboard" */ '@/pages/Private/Admin/Dashboard'),
    ),
    roles: [ValidRoles.admin],
  },
];

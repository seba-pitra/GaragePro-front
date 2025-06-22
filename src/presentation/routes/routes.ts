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
    name: 'Home',
  },
  {
    path: '/login',
    name: 'Login',
    Component: lazy(() => import(/*webpackChunkName: "Login" */ '@/presentation/pages/Login')),
    roles: [],
  },
  {
    path: '/signup',
    name: 'Sign Up',
    Component: lazy(() => import(/*webpackChunkName: "SignUp" */ '@/presentation/pages/SignUp')),
    roles: [],
  },
  {
    path: '/profile',
    name: 'Profile',
    Component: lazy(
      () => import(/*webpackChunkName: "Profile" */ '@/presentation/pages/Private/Profile'),
    ),
    roles: [ValidRoles.customer, ValidRoles.employee, ValidRoles.admin],
  },
  {
    path: '/create-vehicle',
    name: 'Create Vehicles',
    Component: lazy(
      () => import(/*webpackChunkName: "Vehicles" */ '@/presentation/pages/Private/Vehicles'),
    ),
    roles: [ValidRoles.customer, ValidRoles.employee, ValidRoles.admin],
  },
  {
    path: '/parking',
    name: 'Parking',
    Component: lazy(
      () =>
        import(/*webpackChunkName: "Reserve" */ '@/presentation/pages/Private/Parking/ReserveSlot'),
    ),
    roles: [ValidRoles.customer, ValidRoles.employee, ValidRoles.admin],
  },
];

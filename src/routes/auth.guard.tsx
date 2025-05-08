import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/user';
import type { ValidRoles } from '@/interfaces/user.interface';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  roles?: ValidRoles[];
}

export const ProtectedRoute = ({ children, roles = [] }: ProtectedRouteProps) => {
  const user = useAuthStore((state) => state.user);

  if (roles.length > 0 && !user.roles.find((rol) => !!roles.includes(rol as ValidRoles))) {
    return <Navigate replace to={'/'} />;
  }

  return <>{children}</>;
};

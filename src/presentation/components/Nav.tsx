import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useLogin } from '@/hooks/useLogin';
import { routes } from '../routes/routes';

export const Nav = () => {
  const { user } = useLogin();

  return (
    <nav className="max-sm:hidden flex items-center justify-between flex-wrap p-4 border-b border-white/10">
      <Link to="/">
        <h1 className="text-2xl text-amber-50 font-bold">GaragePro</h1>
      </Link>

      {!user.email ? (
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2 sm:gap-4 sm:mt-0 sm:ml-auto">
          <Link to="/login">
            <Button className="w-full sm:w-auto px-4 py-2 bg-yellow-400 text-black hover:bg-yellow-300">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="w-full sm:w-auto px-4 py-2 bg-gray-400 text-black hover:bg-gray-300">
              Sign Up
            </Button>
          </Link>
        </div>
      ) : (
        <ul className="flex gap-4">
          {routes
            .filter(
              (route) =>
                !route.path.includes('login') &&
                !route.path.includes('signup') &&
                !route.path.includes('login') &&
                !route.path.includes('create-vehicle'),
            )
            .map((route) => (
              <li key={route.name + '-nav'}>
                <Link to={route.path || '/'} className="block w-full text-gray-50  pb-2">
                  {route.name}
                </Link>
              </li>
            ))}
          {/* <Link to="/profile">Profile</Link> */}
        </ul>
      )}
    </nav>
  );
};

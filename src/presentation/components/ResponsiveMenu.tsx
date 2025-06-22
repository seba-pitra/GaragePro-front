import { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes/routes';
import { Menu } from 'lucide-react'; // O cualquier icono, puedes usar HeroIcons o un SVG

export default function ResponsiveMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="sm:hidden fixed top-0 left-0 w-full bg-[#0c1121] border-b text-white z-50 shadow">
        <div className="flex justify-between items-center p-4">
          <button onClick={handleDrawerToggle} aria-label="Toggle menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Overlay + Drawer */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50" onClick={handleDrawerToggle}></div>

          {/* Drawer */}
          <aside className="pt-16 relative w-2/3 max-w-xs bg-[#0c1121] text-white p-6 z-50 shadow-lg">
            <nav>
              <ul className="flex flex-col gap-4">
                {routes
                  .filter(
                    (route) =>
                      !route.path.includes('login') &&
                      !route.path.includes('signup') &&
                      !route.path.includes('login') &&
                      !route.path.includes('create-vehicle'),
                  )
                  .map((route) => (
                    <li key={route.name + '-burger'}>
                      <Link
                        to={route.path || '/'}
                        className="block w-full text-gray-50 border-b pb-2"
                        onClick={handleDrawerToggle}
                      >
                        {route.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

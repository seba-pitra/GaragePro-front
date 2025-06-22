import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { routes } from './presentation/routes/routes';
import { ProtectedRoute } from './presentation/routes/auth.guard';
import { RoutesWithNotFound } from './presentation/routes/routesWithNotFound';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Nav } from './presentation/components/Nav';
import { Footer } from './presentation/components/Footer';
import ResponsiveMenu from './presentation/components/ResponsiveMenu';

function App() {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <BrowserRouter>
          <RoutesWithNotFound>
            {routes.map(({ path, Component, roles, name }) => (
              <Route
                key={name}
                path={path}
                element={
                  <ProtectedRoute roles={roles}>
                    <Nav />
                    <ResponsiveMenu />
                    <Component />
                    <Footer />
                  </ProtectedRoute>
                }
              />
            ))}
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;

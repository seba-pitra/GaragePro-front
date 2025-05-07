import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';
import { ProtectedRoute } from './routes/auth.guard';
import { RoutesWithNotFound } from './helpers/routesWithNotFound';
import { Suspense } from 'react';

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
                    <Component />
                  </ProtectedRoute>
                }
              />
            ))}
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;

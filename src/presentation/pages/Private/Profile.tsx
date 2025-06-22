import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLogin } from '@/hooks/useLogin';
import { useVehicle } from '@/hooks/useVehicle';
import { UserProfile } from '@/presentation/components/UserProfile';
import { Vehicle } from '@/presentation/components/Vehicle';
import { Button } from '@/presentation/components/Button';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useLogin();
  const { getVehiclesByUserEmail, userVehicles } = useVehicle();

  useEffect(() => {
    getVehiclesByUserEmail(user.email);
  }, [getVehiclesByUserEmail, user.email]);

  return (
    <main className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <UserProfile
        email={user.email}
        firstName={user.firstName}
        roles={user.roles}
        lastName={user.lastName}
        isRegularCustomer={user.isRegularCustomer}
      />

      {/* Vehicles */}
      <section className="max-w-3xl mx-auto rounded-xl shadow-lg">
        <section className="mt-12 w-full max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6">Your Vehicles</h2>

          {userVehicles.length === 0 ? (
            <p className="text-gray-400">You don’t have any vehicles yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
              {userVehicles.map((v) => (
                <Vehicle key={v.plateNumber} {...v} />
              ))}
            </div>
          )}
        </section>

        {/* Create Vehicle Button */}
        <div className="mt-10 flex justify-center">
          <Button
            onClick={() => navigate('/create-vehicle')}
            type="button"
            className="flex justify-center bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-3"
          >
            Create Vehicle
          </Button>
        </div>
      </section>
    </main>
  );
};
export default Profile;

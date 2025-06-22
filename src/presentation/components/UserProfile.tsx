interface Props {
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
  isRegularCustomer: boolean;
}

export const UserProfile = ({ email, firstName, isRegularCustomer, lastName, roles }: Props) => {
  return (
    <section className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">User Profile</h1>

      <div className="space-y-4 text-lg">
        <div className="flex justify-between">
          <span className="text-gray-400">Full Name:</span>
          <span>
            {firstName} {lastName}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Email:</span>
          <span>{email}</span>
        </div>

        {!roles.includes('administrator') && (
          <div className="flex justify-between">
            <span className="text-gray-400">Regular Customer:</span>
            <span>{isRegularCustomer ? 'Yes' : 'No'}</span>
          </div>
        )}

        <div className="flex justify-between items-start">
          <span className="text-gray-400">Roles:</span>
          <div className="flex gap-2 flex-wrap justify-end">
            {roles.map((role, i) => (
              <span
                key={i}
                className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

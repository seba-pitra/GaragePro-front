import { useState } from 'react';
import { useAuthStore } from '../store/auth';

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: view/hide password
    // TODO: link to create account

    const form = event.currentTarget;

    const formData = new FormData(form);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const validationErrors = {
      email: '',
      password: '',
    };

    if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
      validationErrors.email = 'Invalid Email';
    }

    if (email.length < 6) {
      validationErrors.email = 'Email must have 6 characters at least';
    }

    if (email.length === 0) {
      validationErrors.email = 'Please, provide a email address';
    }

    if (!password.match(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)) {
      validationErrors.password = 'Password must have a Uppercase, lowercase letter and a number';
    }

    if (password.length < 6) {
      validationErrors.password = 'Password must have 6 characters at least';
    }

    if (password.length === 0) {
      validationErrors.password = 'Please, provide a password';
    }

    if (validationErrors.email.length || validationErrors.password.length) {
      setErrors(validationErrors);
      return;
    }

    await login(email, password);
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  justify-center items-center flex-col  w-full h-[100vh] gap-4.5"
    >
      <div className="flex flex-col justify-center items-start w-[70%] max-w-[475px] mx-auto ">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          onChange={handleChange}
          placeholder="example@gmail.com"
          className="text-black bg-amber-50 w-full h-12 rounded-[5px] p-2"
        />
        {errors.email && <span className="text-red-600">{errors.email}</span>}
      </div>

      <div className="flex flex-col justify-center items-start w-[70%] max-w-[475px] mx-auto">
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          className="text-black bg-amber-50 w-full h-12 p-2"
        />
        {errors.password && <span className="text-red-600">{errors.password}</span>}
      </div>

      <button
        disabled={!form.email || !form.password}
        type="submit"
        className="w-[70%] max-w-[475px] disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer bg-amber-300 h-12 text-2xl rounded-[5px] text-black"
      >
        Login
      </button>
    </form>
  );
};

export default Login;

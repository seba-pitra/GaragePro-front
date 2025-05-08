import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/auth';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const [form, setForm] = useState({ email: '', password: '' });
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleIsVisiblePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

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

      <div className="relative flex flex-col justify-center items-start w-[70%] max-w-[475px] mx-auto">
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          name="password"
          type={isVisiblePassword ? 'text' : 'password'}
          className="text-black bg-amber-50 w-full h-12 p-2"
        />
        <div
          className="cursor-pointer absolute right-[0.75rem] top-[2.2rem]  text-black"
          onClick={handleIsVisiblePassword}
        >
          {!isVisiblePassword && <EyeIcon className="h-6 w-6 text-black" />}
          {isVisiblePassword && <EyeSlashIcon className="h-6 w-6 text-black" />}
        </div>
        {errors.password && <span className="text-red-600">{errors.password}</span>}
      </div>

      <button
        disabled={!form.email || !form.password}
        type="submit"
        className="w-[70%] max-w-[475px] disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer bg-amber-300 h-12 text-2xl rounded-[5px] text-black"
      >
        Login
      </button>

      <div className="flex items-center justify-evenly w-[70%] max-w-[475px] max-sm:flex-col max-sm:items-start max-sm:gap-2.5 ">
        <Link to={'/signup'} className=" text-end">
          <span className="text-gray-400 max-[187px]:text-[12px]">Create an account</span>
        </Link>
        <span className="text-gray-400 cursor-pointer max-[187px]:text-[12px]">Reset password</span>
      </div>
    </form>
  );
};

export default Login;

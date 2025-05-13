import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useLogin } from '@/hooks/useLogin';
import { Input } from '@/components/Input';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const { errors, login } = useLogin(form);
  const navigate = useNavigate();

  const handleIsVisiblePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    await login(form);

    navigate('/home');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  justify-center items-center flex-col  w-full h-[100vh] gap-4.5"
    >
      <Input
        error={errors.email && errors.email}
        label="Email"
        name="email"
        type="email"
        onChange={handleChange}
      />

      {/* Password with visibility toggle */}
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

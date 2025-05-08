import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignUp } from '@/hooks/useSignUp';
import { Input } from '@/components/Input';

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatedPassword: '',
  });
  const { errors, signUp } = useSignUp(form);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    await signUp(form);

    navigate('/home');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  justify-center items-center flex-col  w-full h-[100vh] gap-4.5"
    >
      <Input
        error={errors.firstName && errors.firstName}
        label="First Name"
        name="firstName"
        type="text"
        onChange={handleChange}
      />

      <Input
        error={errors.lastname && errors.lastname}
        label="Lastname"
        name="lastName"
        type="text"
        onChange={handleChange}
      />

      <Input
        error={errors.email && errors.email}
        label="Email"
        name="email"
        type="email"
        onChange={handleChange}
      />

      <Input
        error={errors.password && errors.password}
        label="Password"
        name="password"
        type="password"
        onChange={handleChange}
      />
      <Input
        error={errors.repeatedPassword && errors.repeatedPassword}
        label="Repeat Password"
        name="repeatedPassword"
        type="password"
        onChange={handleChange}
      />

      <button
        disabled={
          !form.firstName.length ||
          !form.lastName.length ||
          !form.email.length ||
          !form.password.length ||
          !form.repeatedPassword.length
        }
        type="submit"
        className="w-[70%] max-w-[475px] disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer bg-amber-300 h-12 text-2xl rounded-[5px] text-black"
      >
        Sign Up
      </button>

      <div className="flex items-center justify-evenly w-[70%] max-w-[475px] max-sm:flex-col max-sm:items-start max-sm:gap-2.5 ">
        <Link to={'/login'} className=" text-end">
          <span className="text-gray-400 max-[187px]:text-[12px]">Back to Login</span>
        </Link>
        <span className="text-gray-400 cursor-pointer max-[187px]:text-[12px]">Reset password</span>
      </div>
    </form>
  );
};

export default SignUp;

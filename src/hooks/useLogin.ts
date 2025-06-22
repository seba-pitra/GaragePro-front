import { useUserStore } from '@/store/user';
import { validateEmail, validatePassword } from '@/utils/validations';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const user = useUserStore((state) => state.user);
  const login = useUserStore((state) => state.login);
  const logout = useUserStore((state) => state.logout);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [form, setForm] = useState({ email: '', password: '' });
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const navigate = useNavigate();

  const runLogin = async () => {
    const email = form.email;
    const password = form.password;

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    const validationErrors = { email: emailError, password: passwordError };

    setErrors(validationErrors);

    if (emailError || passwordError) return;

    await login(email, password);

    navigate('/');
  };

  const handleLogout = () => {
    logout();
  };

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

    await runLogin();

    form.reset();

    navigate('/');
  };

  return {
    errors,
    form,
    handleChange,
    handleIsVisiblePassword,
    handleSubmit,
    isVisiblePassword,
    login: runLogin,
    logout: handleLogout,
    user,
  };
};

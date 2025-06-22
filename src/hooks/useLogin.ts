import { useUserStore } from '@/store/user';
import { validateEmail, validatePassword } from '@/utils/validations';
import { useState } from 'react';

export const useLogin = () => {
  const login = useUserStore((state) => state.login);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const runLogin = async (form: EventTarget & HTMLFormElement) => {
    const { email, password } = form;

    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);

    const validationErrors = { email: emailError, password: passwordError };

    setErrors(validationErrors);

    if (emailError || passwordError) return;

    await login(email, password);
    form.reset();
  };

  return {
    errors,
    login: runLogin,
  };
};

import { useUserStore } from '@/store/user';
import { validateEmail, validatePassword } from '@/utils/validations';
import { useState } from 'react';

export const useLogin = () => {
  const user = useUserStore((state) => state.user);
  const login = useUserStore((state) => state.login);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const runLogin = async (form: EventTarget & HTMLFormElement) => {
    const email = form.email.value;
    const password = form.password.value;

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    const validationErrors = { email: emailError, password: passwordError };

    console.log(validateEmail);
    setErrors(validationErrors);

    if (emailError || passwordError) return;

    await login(email, password);
    form.reset();
  };

  return {
    user,
    errors,
    login: runLogin,
  };
};

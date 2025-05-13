import { useUserStore } from '@/store/user';
import { useState } from 'react';

export const useLogin = (form: { email: string; password: string }) => {
  const login = useUserStore((state) => state.login);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const { email, password } = form;

  const runLogin = async (form: EventTarget & HTMLFormElement) => {
    const validationErrors = {
      email: '',
      password: '',
    };

    setErrors(validationErrors);

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

    if (validationErrors.email.length > 0 || validationErrors.password.length > 0) {
      setErrors(validationErrors);
      return;
    }

    form.reset();

    await login(email, password);
  };

  return {
    errors,
    login: runLogin,
  };
};

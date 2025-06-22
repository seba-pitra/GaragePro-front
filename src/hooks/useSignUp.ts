import { useState } from 'react';
import { useUserStore } from '@/store/user';
import { validateEmail, validateName, validatePassword } from '@/utils/validations';

export const useSignUp = () => {
  const signUp = useUserStore((state) => state.signUp);
  const [errors, setErrors] = useState({
    firstName: '',
    lastname: '',
    email: '',
    password: '',
    repeatedPassword: '',
  });

  const runSignUp = async (form: EventTarget & HTMLFormElement) => {
    const { firstName, lastName, email, password, repeatedPassword } = form;

    const validationErrors = {
      firstName: validateName(firstName, 'first name'),
      lastname: validateName(lastName, 'last name'),
      email: validateEmail(email),
      password: validatePassword(password),
      repeatedPassword: repeatedPassword !== password ? 'Passwords do not match' : '',
    };

    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some((err) => err.length > 0);
    if (hasErrors) return;

    await signUp({
      email,
      firstName,
      lastName,
      password,
    });

    form.reset();
  };

  return {
    errors,
    signUp: runSignUp,
  };
};

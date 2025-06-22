import { useState } from 'react';
import { useUserStore } from '@/store/user';
import { validateEmail, validateName, validatePassword } from '@/utils/validations';

export const useSignUp = () => {
  const signUp = useUserStore((state) => state.signUp);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatedPassword: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastname: '',
    email: '',
    password: '',
    repeatedPassword: '',
  });

  const runSignUp = async () => {
    const firstName = form.firstName;
    const lastName = form.lastName;
    const email = form.email;
    const password = form.password;
    const repeatedPassword = form.repeatedPassword;

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
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return {
    errors,
    handleChange,
    form,
    signUp: runSignUp,
  };
};

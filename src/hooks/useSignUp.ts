import type { UserSignUpForm } from '@/interfaces/user.interface';
import { useUserStore } from '@/store/user';
import { useState } from 'react';

interface SignUpForm extends UserSignUpForm {
  repeatedPassword: string;
}

export const useSignUp = (form: SignUpForm) => {
  const signUp = useUserStore((state) => state.signUp);
  const [errors, setErrors] = useState({
    firstName: '',
    lastname: '',
    email: '',
    password: '',
    repeatedPassword: '',
  });
  const { firstName, lastName: lastname, email, password, repeatedPassword } = form;

  const runSignUp = async (form: EventTarget & HTMLFormElement) => {
    const validationErrors = {
      firstName: '',
      lastname: '',
      email: '',
      password: '',
      repeatedPassword: '',
    };

    setErrors(validationErrors);

    if (firstName.length < 3) {
      validationErrors.firstName = 'first name must have 3 characters at least';
    }

    if (firstName.length === 0) {
      validationErrors.email = 'Please, provide a first name';
    }

    if (lastname.length < 3) {
      validationErrors.lastname = 'lastname must have 3 characters at least';
    }

    if (lastname.length === 0) {
      validationErrors.lastname = 'Please, provide a last name';
    }

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

    if (repeatedPassword !== password) {
      validationErrors.repeatedPassword = 'Passwords do not match';
    }

    for (const errorKey in validationErrors) {
      const errorValue = validationErrors[errorKey as keyof typeof validationErrors];

      if (errorValue.length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    await signUp({
      email,
      firstName,
      lastName: lastname,
      password,
    });

    form.reset();
  };

  return {
    errors,
    signUp: runSignUp,
  };
};

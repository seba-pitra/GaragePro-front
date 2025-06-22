export const validateEmail = (email: string): string => {
  if (!email) return 'Please, provide an email address';
  if (email.length < 6) return 'Email must have 6 characters at least';
  if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) return 'Invalid Email';
  return '';
};

export const validatePassword = (password: string): string => {
  if (!password) return 'Please, provide a password';
  if (password.length < 6) return 'Password must have 6 characters at least';
  if (!/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)) {
    return 'Password must have a Uppercase, lowercase letter and a number';
  }
  return '';
};

export const validateName = (value: string, fieldName: string): string => {
  if (!value) return `Please, provide a ${fieldName}`;
  if (value.length < 3) return `${fieldName} must have 3 characters at least`;
  return '';
};

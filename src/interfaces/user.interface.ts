export interface User {
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
  isRegularCustomer: boolean;
}

export enum ValidRoles {
  admin = 'administrator',
  employee = 'employee',
  customer = 'customer',
}

export interface ResponseUserLogin {
  ok: boolean;
  timestamps: Date;
  data: DataLogin;
}

export interface DataLogin {
  user: User;
  token: string;
}

export interface UserLogin {
  first_name: string;
  last_name: string;
  email: string;
  roles: string[];
  is_regular_customer: boolean;
}

export interface UserSignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ResponseAuthUser {
  ok: boolean;
  timestamps: Date;
  data: Data;
}

export interface Data {
  user: UserRes;
  token: string;
}

export interface UserRes {
  first_name: string;
  last_name: string;
  email: string;
  roles: string[];
}

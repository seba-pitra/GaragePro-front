import { create } from 'zustand';
import type { ResponseAuthUser, User, UserSignUpForm } from '../interfaces/user.interface';
import { AUTH_URL } from '../config/constants';
import { getPropsByCamelCase } from '../utils/getPropsByCamelCase';
import { persist } from 'zustand/middleware';

interface State {
  user: User;
  token: string;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (userForm: UserSignUpForm) => Promise<void>;
}

export const useAuthStore = create<State>()(
  persist(
    (set) => ({
      user: {
        email: '',
        firstName: '',
        lastName: '',
        roles: [],
        isRegularCustomer: false,
      },
      token: '',

      logout: () => {
        set({
          user: {
            email: '',
            firstName: '',
            lastName: '',
            roles: [],
            isRegularCustomer: false,
          },
          token: '',
        });
      },

      login: async (email: string, password: string) => {
        const { data: result } = await fetch(`${AUTH_URL}/login`, {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data: ResponseAuthUser) => data);

        const { token, user } = result;
        const formattedUser = getPropsByCamelCase(user);

        set({ token, user: formattedUser });
      },

      signup: async (userForm: UserSignUpForm) => {
        const { data: result } = await fetch(`${AUTH_URL}/register`, {
          method: 'POST',
          body: JSON.stringify(userForm),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data: ResponseAuthUser) => data);

        const { token, user } = result;
        const formattedUser = getPropsByCamelCase(user);

        set({ token, user: formattedUser });
      },
    }),
    {
      name: 'auth',
    },
  ),
);

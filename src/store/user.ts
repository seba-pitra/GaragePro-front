import { create } from 'zustand';
import type { ResponseAuthUser, User, UserSignUpForm } from '../interfaces/user.interface';
import { AUTH_URL } from '../config/constants';
import { getPropsByCamelCase } from '../utils/getPropsByCamelCase';
import { persist } from 'zustand/middleware';
import { UserService } from '@/services/user.service';

interface State {
  user: User;
  token: string;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (userForm: UserSignUpForm) => Promise<void>;
}

const userService = new UserService();

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
        const { token, user } = await userService.login(email, password);

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

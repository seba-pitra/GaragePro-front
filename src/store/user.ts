import { create } from 'zustand';
import type { User, UserSignUpForm } from '../interfaces/user.interface';
import { getPropsByCamelCase } from '../utils/getPropsByCamelCase';
import { persist } from 'zustand/middleware';
import { UserService } from '@/services/user.service';
import { toast } from 'react-toastify';

interface State {
  user: User;
  token: string;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
  signUp: (userForm: UserSignUpForm) => Promise<void>;
}

const userService = new UserService();

export const useUserStore = create<State>()(
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

        toast('Login successfully', { type: 'success', theme: 'dark', position: 'bottom-left' });
      },

      signUp: async (userForm: UserSignUpForm) => {
        const { token, user } = await userService.signUp(userForm);

        const formattedUser = getPropsByCamelCase(user);

        set({ token, user: formattedUser });

        toast('You have been registered successfully', {
          type: 'success',
          theme: 'dark',
          position: 'bottom-left',
        });
      },
    }),
    {
      name: 'auth',
    },
  ),
);

import { env } from '@/config/env.config';
import type { DataLogin, ResponseUserLogin, UserSignUpForm } from '@/interfaces/user.interface';
import { FetchApi } from '@/utils/fetchApi';

export class UserService {
  private readonly fetchApi: FetchApi;

  constructor() {
    this.fetchApi = new FetchApi(`${env.VITE_BASE_API_URL}/user`);
  }

  async login(email: string, password: string): Promise<DataLogin> {
    const { data } = (await this.fetchApi.post('/login', { email, password })) as ResponseUserLogin;

    const { user, token } = data;

    return { token, user };
  }

  async signUp(userParam: UserSignUpForm): Promise<DataLogin> {
    const { data } = (await this.fetchApi.post('/register', userParam)) as ResponseUserLogin;

    const { user, token } = data;

    return { token, user };
  }
}

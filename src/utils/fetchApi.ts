import axios, { type AxiosInstance } from 'axios';

export class FetchApi {
  private fetchApi: AxiosInstance;

  constructor(baseUrl: string) {
    this.fetchApi = axios.create({
      baseURL: baseUrl,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getInterceptors() {
    return this.fetchApi.interceptors;
  }
  async get<T>(url: string): Promise<T | undefined> {
    try {
      const { data } = await this.fetchApi.get(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async post<T>(url: string, body: { [key: string]: any }): Promise<T | undefined> {
    try {
      const { data } = await this.fetchApi.post(url, body);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async patch<T>(url: string, body: { [key: string]: any }): Promise<T | undefined> {
    try {
      const { data } = await this.fetchApi.patch(url, body);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async delete<T>(url: string): Promise<T | undefined> {
    try {
      const { data } = await this.fetchApi.get(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

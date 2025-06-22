export interface ResponseApi<T> {
  ok: boolean;
  timestamps: Date;
  data: T;
}

export interface GetDataState {
  message: object;
  loading: boolean;
  error: null | string;
}
export interface AuthState {
  user: { username: string; email: string; password: string } | null;
  Autheticated: boolean;
  isLoading: boolean;
  error: string | null;
}

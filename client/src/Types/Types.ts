export interface GetDataState {
  message: object;
  loading: boolean;
  error: null | string;
}
export interface AuthState {
  user: { name: string; email: string; password: string } | null;
  Autheticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
}

export interface loginData {
  email: string;
  password: string;
}
export interface todoData {
  name: string;
  description: string;
  date: number | null;
  category: string;
}

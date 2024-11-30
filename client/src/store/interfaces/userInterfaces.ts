export interface UserLogin {
  email: string;
  password: string;
}

export interface UserData {
  user?: any;
  loading?: boolean;
  error?: string | undefined;
}

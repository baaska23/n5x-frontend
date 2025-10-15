export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  username: string;
  email: string;
}

export interface User {
  userId: string;
  username: string;
  email: string;
}
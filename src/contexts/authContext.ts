import { createContext } from "react";

// 认证类型
export type AuthType = 'user' | 'admin' | null;

// 认证上下文类型
export interface AuthContextType {
  isAuthenticated: boolean;
  authType: AuthType;
  setAuthType: (type: AuthType) => void;
  logout: () => void;
}

// 创建认证上下文
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  authType: null,
  setAuthType: () => {},
  logout: () => {},
});

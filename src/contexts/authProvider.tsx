import { useState, ReactNode } from "react";
import { AuthContext } from "./authContext";

interface AuthProviderProps {
  children: ReactNode;
}

// 认证提供者组件
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // 从localStorage中读取认证状态
    const authStatus = localStorage.getItem('isAuthenticated');
    return authStatus === 'true';
  });
  
  const [authType, setAuthType] = useState<any>(() => {
    // 从localStorage中读取认证类型
    const type = localStorage.getItem('authType');
    return type || null;
  });

  const logout = () => {
    setIsAuthenticated(false);
    setAuthType(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('authType');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('adminToken');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authType, setAuthType, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

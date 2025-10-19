import { useContext } from "react";
import { AuthContext } from "./authContext";

// 自定义Hook用于访问认证上下文
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

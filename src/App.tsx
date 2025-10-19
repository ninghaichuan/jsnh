import { Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import UserProgress from "@/pages/UserProgress";
import AdminLogin from "@/pages/AdminLogin";
import AdminUserManagement from "@/pages/AdminUserManagement";
import AdminRankingManagement from "@/pages/AdminRankingManagement";
import { AuthProvider } from '@/contexts/authProvider';
import { UserProvider } from '@/contexts/userProvider';
import { AdminProvider } from '@/contexts/adminProvider';

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <AdminProvider>
          <Routes>
            {/* 用户端路由 */}
            <Route path="/" element={<Login />} />
            <Route path="/progress" element={<UserProgress />} />
            
            {/* 管理端路由 */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/users" element={<AdminUserManagement />} />
            <Route path="/admin/rankings" element={<AdminRankingManagement />} />
          </Routes>
        </AdminProvider>
      </UserProvider>
    </AuthProvider>
  );
}

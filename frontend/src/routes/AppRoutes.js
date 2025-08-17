import { Routes, Route } from 'react-router-dom';
import UserRoutes from './UserRoutes';
import AdminRoutes from './AdminRoutes';
import Login from '../pages/Login';
import FlashPage from '../pages/FlashPage';
import ProtectedRoute from './ProtectedRoute';
import Register from '../pages/Register';
import MainLayout from '../layout/MainLayout';
import AuthLayout from '../layout/AuthLayout';

const AppRoutes = () => (
  <Routes>
    {/* Routes without Header/Footer */}
    <Route
      path="/"
      element={
        <AuthLayout>
          <FlashPage />
        </AuthLayout>
      }
    />
    <Route
      path="/login"
      element={
        <AuthLayout>
          <Login />
        </AuthLayout>
      }
    />
    <Route
      path="/register"
      element={
        <AuthLayout>
          <Register />
        </AuthLayout>
      }
    />

    {/* Routes with Header/Footer */}
    <Route
      path="/user/*"
      element={
        <MainLayout>
          <ProtectedRoute allowedRoles={['user']}>
            <UserRoutes />
          </ProtectedRoute>
        </MainLayout>
      }
    />

    <Route
      path="/admin/*"
      element={
        <MainLayout>
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminRoutes />
          </ProtectedRoute>
        </MainLayout>
      }
    />
  </Routes>
);

export default AppRoutes;

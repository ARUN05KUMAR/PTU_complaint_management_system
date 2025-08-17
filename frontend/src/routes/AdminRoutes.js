import { Routes, Route } from 'react-router-dom';
import AdminHome from '../pages/AdminHome';
import About from '../pages/About';
import AdminProfile from '../pages/AdminProfile';
import ViewComplaint from '../pages/ViewComplaint';

const AdminRoutes = () => (
  <Routes>
    <Route path="" element={<AdminHome />} />
    <Route path="complaint/public/:id" element={<ViewComplaint type="public" />} />
    <Route path="complaint/private/:id" element={<ViewComplaint type="private" />} />
    <Route path="profile" element={<AdminProfile />} />
    <Route path="about" element={<About />} />
  </Routes>
);

export default AdminRoutes;

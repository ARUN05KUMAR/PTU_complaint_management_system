import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NewComplaint from '../pages/NewComplaint';
import Profile from '../pages/Profile';
import ViewComplaint from '../pages/ViewComplaint';
import About from '../pages/About';
import YourComplaints from '../pages/YourComplaints';

const UserRoutes = () => (
  <Routes>
      <Route path="" element={<Home />} />
      <Route path="complaint/public/:id" element={<ViewComplaint type="public" />} />
      <Route path="complaint/private/:id" element={<ViewComplaint type="private" />} />
      <Route path="newComplaint" element={<NewComplaint />} />
      <Route path="yourComplaints" element={<YourComplaints />} />
      <Route path="profile" element={<Profile />} />
      <Route path="about" element={<About />} />
  </Routes>

);

export default UserRoutes;

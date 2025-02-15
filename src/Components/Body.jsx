import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import AboutUs from './AboutUs';
import Layout from './Layout';

function Body() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/browse" element={<Browse />} />
          <Route path="/in" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Navigate to="/in" />} />  {/* ✅ Redirect */}
          <Route path="/" element={<Navigate to="/browse" />} /> 
        </Routes>
      </Layout>
    </Router>
  );
}

export default Body;

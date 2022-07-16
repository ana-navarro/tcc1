import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import './App.css';
import './bootstrap.min.css';
import { Landing } from "./screens/Landing/Landing"
import { Dashboard } from "./screens/Dashboard/Dashboard";
import { Profile } from "./screens/User/Profile";
import { Login } from "./screens/Auth/login/Login"
import { Register } from "./screens/Auth/register/Register"

function App() {
  return (
    <div>
      <BrowserRouter>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <Routes>
          <Route path="/" element={<ProtcetedRoutes><Dashboard /></ProtcetedRoutes>}>
            <Route index element={<ProtcetedRoutes><Dashboard /></ProtcetedRoutes>} />
          </Route>
          <Route path="/profile" element={<ProtcetedRoutes><Profile /></ProtcetedRoutes>}>
            <Route index element={<ProtcetedRoutes><Profile /></ProtcetedRoutes>} />
          </Route>
          <Route path="/landing" element={<PublicRoutes><Landing /></PublicRoutes>}>
            <Route index element={<PublicRoutes><Landing /></PublicRoutes>} />
          </Route>
          <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes>}>
            <Route index element={<PublicRoutes><Login /></PublicRoutes>} />
          </Route>
          <Route path="/register" element={<PublicRoutes><Register /></PublicRoutes>}>
            <Route index element={<PublicRoutes><Register /></PublicRoutes>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export function ProtcetedRoutes({ children }) {
  const user = localStorage.getItem('user');
  if (user && user !== '') {
    return children
  } else {
    return <Navigate to='/landing' />
  }
}

export function PublicRoutes({ children }) {
  const user = localStorage.getItem('user');
  if (user && user !== '') {
    return <Navigate to='/' />
  } else {
    return children
  }
}

export default App;

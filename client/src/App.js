import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/" element={<Profile />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="/landing" element={<Landing />}>
            <Route index element={<Landing />} />
          </Route>
          <Route path="/login" element={<Login />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/register" element={<Register />}>
            <Route index element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import './App.css';
import './bootstrap.min.css';
import { Landing } from "./screens/Landing/Landing"
import { Dashboard } from "./screens/Dashboard/Dashboard";
import { Profile } from "./screens/User/Profile";
import { Login } from "./screens/Auth/login/Login"
import { Register } from "./screens/Auth/register/Register"
import { Company } from "./screens/Companies/Company";
import { CompanyEdit } from "./screens/Companies/CompanyEdit";
import { CompanyShow } from "./screens/Companies/CompanyShow";
import { CompanyAdd } from "./screens/Companies/CompanyAdd";
import { CompanyUserList } from "./screens/Companies/CompanyUserList";
import { InstallationAdd } from "./screens/Companies/InstallationAdd";
import { TecReport } from "./screens/Reports/TecReport";
import { FinalReport } from "./screens/Reports/FinalReport";
import { FinantialReport } from "./screens/Reports/FinantialReport";
import { FinalReportAdd } from "./screens/Reports/FinalReportAdd";

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

          <Route path="/companies" element={<ProtcetedRoutes><Company /></ProtcetedRoutes>}>
            <Route index element={<ProtcetedRoutes><Company /></ProtcetedRoutes>} />
          </Route>

          <Route exact path="/company/:id/edit" element={<ProtcetedRoutes><CompanyEdit /></ProtcetedRoutes>}>
            <Route index element={<ProtcetedRoutes><CompanyEdit /></ProtcetedRoutes>} />
          </Route>

          <Route exact path="/company/add" element={<ProtcetedRoutes><CompanyAdd /></ProtcetedRoutes>}>
            <Route index element={<ProtcetedRoutes><CompanyAdd /></ProtcetedRoutes>} />
          </Route>

          <Route exact path="/company/:id" element={<ProtcetedRoutes><CompanyShow /></ProtcetedRoutes>}>
            <Route index element={<ProtcetedRoutes><CompanyShow /></ProtcetedRoutes>} />
          </Route>

          <Route exact path="/company/:id/list" element={<ProtcetedRoutes><CompanyUserList /></ProtcetedRoutes>}>
            <Route index element={<ProtcetedRoutes><CompanyUserList /></ProtcetedRoutes>} />
          </Route>

          <Route exact path="/company/installation/add" element={<ProtcetedRoutes><InstallationAdd /></ProtcetedRoutes>}>
            <Route index element={<ProtcetedRoutes><InstallationAdd /></ProtcetedRoutes>} />
          </Route>

          <Route exact path="/report/technical" element={<ProtcetedRoutes><TecReport /></ProtcetedRoutes>}>
            <Route index element={<ProtcetedRoutes><TecReport /></ProtcetedRoutes>} />
          </Route>

          <Route exact path="/report/finantial" element={<ProtcetedRoutes><FinantialReport /></ProtcetedRoutes>}>
            <Route index element={<ProtcetedRoutes><FinantialReport /></ProtcetedRoutes>} />
          </Route>

          <Route exact path="/report/final" element={<ProtcetedRoutes><FinalReport /></ProtcetedRoutes>}>
            <Route index element={<ProtcetedRoutes><FinalReport /></ProtcetedRoutes>} />
          </Route>

          <Route exact path="/report/final/add" element={<ProtcetedRoutes><FinalReportAdd /></ProtcetedRoutes>}>
            <Route index element={<ProtcetedRoutes><FinalReportAdd /></ProtcetedRoutes>} />
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

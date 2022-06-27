import './bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/home/Home'
import { AboutUs } from './pages/aboutus/AboutUs'
import { Login } from './pages/auth/Login'

import './app.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/about-us" element={<AboutUs />}>
            <Route index element={<AboutUs />} />
          </Route>
          <Route path="/login" element={<Login />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

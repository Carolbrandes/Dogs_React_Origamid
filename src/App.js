import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login/index";
import { User } from "./pages/User/index";
import { UserStorage } from "./userContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Photo } from "./components/photo/Photo";

import "./App.css";
import { UserProfile } from "./pages/User/UserProfile";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;

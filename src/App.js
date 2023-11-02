import { BrowserRouter, Route, Routes } from "react-router-dom";
import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Write from "./pages/write/Write";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/settings" element={!user ? <Home /> : <Setting />} />
        <Route path="/write" element={!user ? <Home /> : <Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

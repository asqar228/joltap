import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReportPage from "./pages/ReportPage";
import Admin from "./pages/Admin";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

import Login from "./pages/Login";
import Track from "./pages/Track";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] px-4">
        <Outlet />
        <Routes>
          <Route path="/track" element={<Track />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

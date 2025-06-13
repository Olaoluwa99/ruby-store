// src/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main id="main-content" className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default App;

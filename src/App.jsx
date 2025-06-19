import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F7] text-[#1E1B1B]">
      <Navbar />

      {/* <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main> */}

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;

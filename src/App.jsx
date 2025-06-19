// // // src/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// // const App = () => {
// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <Navbar />
// //       <main id="main-content" className="container mx-auto p-4">
// //         <Outlet />
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default App;

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import { CartProvider } from "./context/CartContext";

// // import "./styles/index.css";
// // import "../styles/index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <CartProvider>
//         <App />
//       </CartProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-900">
      <Navbar />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;

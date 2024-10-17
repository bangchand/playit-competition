import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import React, { useEffect } from "react";
import About from "./pages/about";
import Page404 from "./pages/Errors/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;

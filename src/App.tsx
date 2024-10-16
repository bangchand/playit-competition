import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import React from "react";
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
    path: "*",
    element: <Page404 />,
  },
]);

function App() {
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;

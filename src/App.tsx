import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
]);

function App() {
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />;
      </React.StrictMode>
    </>
  );
}

export default App;

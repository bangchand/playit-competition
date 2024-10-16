import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import { StrictMode } from "react";
import About from "./pages/About";

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
]);

function App() {
  return (
    <>
      <StrictMode>
        <RouterProvider router={router} />;
      </StrictMode>
    </>
  );
}

export default App;

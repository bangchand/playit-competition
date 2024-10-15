import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import { StrictMode } from "react";
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
      <StrictMode>
        <RouterProvider router={router} />;
      </StrictMode>
    </>
  );
}

export default App;

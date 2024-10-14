import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

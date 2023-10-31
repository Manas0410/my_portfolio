import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PortFolio from "./PortFolio.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PortFolio />,
  },
  {
    path: "/test",
    element: <PortFolio />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

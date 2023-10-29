import ReactDOM from "react-dom/client";
import HeaderP from "./header/headerP.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePageContent from "./components/homePage/HomePageContent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <HeaderP />
        <HomePageContent />
      </div>
    ),
  },
  //   {
  //     path: "/test",
  //     element: <UcbParent />,
  //   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

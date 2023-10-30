import ReactDOM from "react-dom/client";
import HeaderP from "./header/headerP.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePageContent from "./components/homePage/HomePageContent.jsx";
import SkillCarousel from "./components/homePage/SkillCarousel.jsx";
import SkillP from "./components/skill/SkillP.jsx";

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
  {
    path: "/test",
    element: <SkillP />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

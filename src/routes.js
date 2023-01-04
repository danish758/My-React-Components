import { useSelector } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";
import CustomCarousel from "./carousel/CustomCarousel";
import WrapperCheckbox from "./components/checkbox/WrapperCheckbox";
import FormWrapper from "./components/form/Wrapper";
import ImageTabs from "./components/image upload/ImageTabs";
import { InputFields } from "./components/input/InputFields";
import Child1 from "./components/nested/Child1";
import Child2 from "./components/nested/Child2";
import Search from "./components/search/Search";
import MuiSelect from "./components/select/Placeholder";
import Wrapper from "./components/select/Wrapper";
import WrapperSwitch from "./components/switch/WrapperSwitch";
import Add from "./faqs/Add";
import { DashBoardPage } from "./layout/DashBoardPage";
import DashboardLayout from "./layout/Layout";
import Login from "./login/Login";
import Page404 from "./pages/Page404";

// ----------------------------------------------------------------------

export default function Router() {
  const { token } = useSelector((state) => state.authSlice);

  const routes = useRoutes([
    {
      path: "/login",
      // exact: true,
      element: <Login />,
      index: true,
    },
    token
      ? {
          path: "/",
          element: <DashboardLayout />,
          children: [
            { path: "app", element: <DashBoardPage /> },
            { path: "users", element: <Add /> },
            { path: "files", element: <ImageTabs /> },
            { path: "carousel", element: <CustomCarousel /> },
            { path: "search", element: <Search /> },
            { path: "input", element: <InputFields /> },
            { path: "select", element: <Wrapper /> },
            { path: "checkbox", element: <WrapperCheckbox /> },
            { path: "switch", element: <WrapperSwitch /> },
            { path: "form", element: <FormWrapper /> },
            { path: "child1", element: <Child1 /> },
            { path: "child2", element: <Child2 /> },
          ],
        }
      : {},
    // { path: "*", element: <Page404 /> },
    {
      path: "*",
      element: <Navigate to="/login" replace />,
    },
  ]);

  return routes;
}

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./layout/ErrorPage";
import { stockRoute } from "./stock/router";
import HomeView from "./views/HomeView";
import LegalView from "./views/LegalView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomeView />,
      },
      {
        path: "legal",
        element: <LegalView />,
      },
      stockRoute,
    ],
  },
]);

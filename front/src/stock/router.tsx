import { RouteObject } from "react-router-dom";
import AddView from "./views/AddView";
import ListView from "./views/ListView";
import StockView from "./views/StockView";

export const stockRoute: RouteObject = {
  path: "stock",
  element: <StockView />,
  children: [
    {
      path: "",
      element: <ListView />,
    },
    {
      path: "add",
      element: <AddView />,
    },
  ],
};

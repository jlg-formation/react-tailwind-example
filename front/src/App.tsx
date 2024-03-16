import { Outlet } from "react-router-dom";
import "./App.css";
import FooterLayout from "./layout/FooterLayout";
import HeaderLayout from "./layout/HeaderLayout";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </div>
  );
}

export default App;

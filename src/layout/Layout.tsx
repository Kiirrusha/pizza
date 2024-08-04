import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar/SideBar";

export const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ width: "calc(100vw - 220px)", padding: "40px 60px" }}>
        <Outlet />
      </div>
    </div>
  );
};

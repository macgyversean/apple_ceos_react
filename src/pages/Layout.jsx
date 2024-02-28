import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const primaryNav = [
  { title: "Home", url: "/" },
  { title: "ceos", url: "/ceos" },
  { title: "addCeo", url: "/ceos/add" },
];

const Layout = () => {
  return (
    <>
      <Navigation navItems={primaryNav} />
      <Outlet />
    </>
  );
};
export default Layout;

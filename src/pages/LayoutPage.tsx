import { Link, Outlet } from "react-router";

export default function LayoutPage() {
  return (
    <>
      <header>
        <Link to={"/"}>Home</Link>
        <Link to={"/content"}>Content</Link>
      </header>
      <Outlet />
      <footer>footer</footer>
    </>
  );
}

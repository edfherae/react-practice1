import { NavLink } from "react-router";

export default function Tab({
  tabName,
  children,
}: {
  tabName: "users" | "posts" | "comments";
  children: string;
}) {
  return (
    <NavLink to={`/content/${tabName}`} className={`tab`}>
      {children}
    </NavLink>
  );
}

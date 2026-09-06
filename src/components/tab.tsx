import { NavLink } from "react-router";
import type { TabName } from "../types";

export default function Tab({
  tabName,
  children,
}: {
  tabName: TabName;
  children: string;
}) {
  return (
    <NavLink to={`/content/${tabName}`} className={`tab`}>
      {children}
    </NavLink>
  );
}

import { NavLink } from "react-router";

export default function TodoSidebar() {
  return (
    <nav className="w-40 h-screen bg-blue-300 flex flex-col gap-4">
      <NavLink
        to="/todo/create"
        className={({ isActive }) => (isActive ? "bg-blue-700" : "")}
      >
        create todo
      </NavLink>

      <NavLink
        to="/todo/update"
        className={({ isActive }) => (isActive ? "bg-blue-700" : "")}
      >
        update todo
      </NavLink>

      <NavLink
        to="/todo/list"
        className={({ isActive }) => (isActive ? "bg-blue-700" : "")}
      >
        list todo
      </NavLink>
    </nav>
  );
}

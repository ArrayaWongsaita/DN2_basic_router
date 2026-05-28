import { NavLink } from "react-router";

export default function PhotoSidebar() {
  const numberArr = Array.from({ length: 1029 }, (_, index) => index + 1);
  console.log("numberArr", numberArr);
  return (
    <nav className="w-40 h-screen bg-pink-300 flex flex-col gap-4 overflow-y-scroll px-2">
      {numberArr.map((num) => (
        <NavLink
          key={num}
          to={`/photo/${num}`}
          className={({ isActive }) =>
            isActive
              ? "bg-pink-700 rounded-lg px-2 py-1.5"
              : "bg-pink-400 rounded-lg px-2 py-1.5"
          }
        >
          Photo Id : {num}
        </NavLink>
      ))}
    </nav>
  );
}

import { Outlet } from "react-router";
import TodoSidebar from "../components/nav/TodoSidebar";
import CreateTodo from "../pages/CreateTodo";
import UpdateTodo from "../pages/UpdateTodo";
import TodoList from "../pages/TodoList";

export const todoRoute = {
  path: "/todo",
  element: (
    <div className="flex gap-4">
      <TodoSidebar />
      <Outlet />
    </div>
  ),
  children: [
    { index: true, element: <div>hello</div> },
    { path: "create", element: <CreateTodo /> },
    { path: "update", element: <UpdateTodo /> },
    { path: "list", element: <TodoList /> },
  ],
};

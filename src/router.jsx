import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import { todoRoute } from "./routes/todoRoute";
import NonNumber from "./pages/NonNumber";

export const router = createBrowserRouter([
  { index: true, Component: HomePage },
  { path: "/non", element: <div>non</div> },
  { path: "/:name/number/:myNum", element: <NonNumber /> },
  todoRoute,
]);

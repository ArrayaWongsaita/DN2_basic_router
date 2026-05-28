import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import { todoRoute } from "./routes/todoRoute";
import NonNumber from "./pages/NonNumber";
import { photoRoute } from "./routes/PhotoRoute";
import PostLayout from "./layouts/PostLayout";
import PostPage from "./pages/PostPage";

export const router = createBrowserRouter([
  { index: true, Component: HomePage },
  { path: "/non", element: <div>non</div> },
  { path: "/:name/number/:myNum", element: <NonNumber /> },
  todoRoute,
  photoRoute,
  {
    path: "/post/:postId",
    element: <PostLayout />,
    children: [{ index: true, element: <PostPage /> }],
  },
]);

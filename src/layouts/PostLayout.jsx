import { Outlet } from "react-router";
import PostSidebar from "../components/nav/PostSidebar";

export default function PostLayout() {
  return (
    <div className="flex gap-4">
      <PostSidebar />
      <Outlet />
    </div>
  );
}

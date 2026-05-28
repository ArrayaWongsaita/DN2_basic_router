import { Outlet } from "react-router";
import PhotoSidebar from "../components/nav/PhotoSidebar";

export default function PhotoLayout() {
  return (
    <div className="flex gap-4">
      <PhotoSidebar />
      <Outlet />
    </div>
  );
}

import PhotoLayout from "../layouts/PhotoLayout";
import PhotoParam from "../pages/PhotoParam";

export const photoRoute = {
  path: "/photo/:photoId",
  element: <PhotoLayout />,
  children: [
    { index: true, element: <PhotoParam /> },
    { path: ":w/:h", element: <PhotoParam /> },
  ],
};

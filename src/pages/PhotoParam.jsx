import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function PhotoParam() {
  const param = useParams();
  const navigate = useNavigate();
  const { photoId, w = 500, h = 300 } = param;

  useEffect(() => {
    const timerId = setTimeout(() => {
      const currentId = Number(photoId);

      const nextId = (currentId % 1029) + 1;

      navigate("/photo/" + nextId);
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [photoId, navigate]);

  // console.log("param", param);
  return (
    <div className="flex justify-center items-center">
      <img src={`https://picsum.photos/id/${photoId}/${w}/${h}`} alt="" />
      <div>
        <button
          className="bg-pink-400 rounded-full p-1"
          onClick={() => {
            navigate("/photo/" + (+photoId + 1));
          }}
        >
          Next Image
        </button>
      </div>
    </div>
  );
}

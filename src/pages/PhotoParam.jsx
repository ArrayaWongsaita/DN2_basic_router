import { useParams } from "react-router";

export default function PhotoParam() {
  const param = useParams();
  const { photoId } = param;

  console.log("param", param);
  return (
    <div className="flex justify-center items-center">
      <img src={`https://picsum.photos/id/${photoId}/400/300`} alt="" />
    </div>
  );
}

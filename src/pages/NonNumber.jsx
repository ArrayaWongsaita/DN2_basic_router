import { useParams } from "react-router";

export default function NonNumber() {
  const param = useParams();
  console.log("param", param);
  return (
    <div>
      <img src={`https://picsum.photos/id/${param.myNum}/500/300`} alt="" />
      {param.name} Number : {param.myNum}
    </div>
  );
}

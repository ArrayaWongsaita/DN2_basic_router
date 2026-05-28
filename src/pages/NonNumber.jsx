import { useParams } from "react-router";

export default function NonNumber() {
  const param = useParams();
  console.log("param", param);
  return (
    <div>
      {param.name} Number : {param.myNum}
    </div>
  );
}

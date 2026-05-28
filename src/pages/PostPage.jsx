import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export default function PostPage() {
  const [post, setPost] = useState(null);
  const param = useParams();
  console.log("param", param);
  useEffect(() => {
    const loadPost = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${param.postId}`,
      );
      console.log("res", res);
      setPost(res.data);
    };
    loadPost();
  }, [param.postId]);
  return (
    <div>
      {post && (
        <>
          <p>Post id: {post.id}</p>
          <h2>Title : {post.title}</h2>
          <p>Body : {post.body}</p>
        </>
      )}
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
import { NavLink } from "react-router";

export default function PostSidebar() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: () => axios.get("https://jsonplaceholder.typicode.com/posts"),
  });

  if (query.isLoading) {
    return <div>Loading</div>;
  }

  if (query.isError) {
    return <div>Load error</div>;
  }
  const { data: posts } = query.data;

  //   console.log("query", query.data.data);

  //   const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     // load post data
  //     const loadPost = async () => {
  //       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //       console.log("res", res);
  //       setPosts(res.data);
  //     };
  //     // use function load post
  //     loadPost();
  //   }, []);

  return (
    <nav className="h-screen w-50 bg-amber-200 flex flex-col gap-4 overflow-y-scroll">
      {posts.map((post) => (
        <NavLink
          key={post.id}
          to={`/post/${post.id}`}
          className={({ isActive }) =>
            isActive ? "bg-amber-700" : "bg-amber-400"
          }
        >
          Post id : {post.id}
        </NavLink>
      ))}
    </nav>
  );
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export default function PostPage() {
  const param = useParams();

  // load by react query
  const query = useQuery({
    queryKey: ["post", param.postId],
    queryFn: () =>
      axios.get(`https://jsonplaceholder.typicode.com/posts/${param.postId}`),
  });

  if (query.isLoading) {
    return <div>Loading ...</div>;
  }

  if (query.isError) {
    return <div>Load Error: {query.error.message}</div>;
  }

  const { data: post } = query.data;

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

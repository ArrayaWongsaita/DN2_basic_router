import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const param = useParams();

  const handleCreateNote = async () => {
    const res = await axios.post(
      `https://nest-js-basic-api.onrender.com/users/${param.userId}/notes`,
      { title: title, content: content },
    );
    console.log("res", res);
    // clear data
    setTitle("");
    setContent("");
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: handleCreateNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  return (
    <div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">content</label>
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => mutation.mutate()} className="bg-amber-500">
          Create
        </button>
      </div>
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";

export default function NoteList() {
  const param = useParams();
  const query = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      axios.get(
        `https://nest-js-basic-api.onrender.com/users/${param.userId}/notes`,
      ),
  });

  if (query.isLoading) {
    return <div>Loading</div>;
  }

  const notes = query.data.data.data.items;

  return (
    <div className="flex flex-col gap-4 ">
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-gray-300 border-l-6 border-blue-800 p-1 w-90"
        >
          <h2>Title : {note.title}</h2>
          <p>Content : {note.content}</p>
        </div>
      ))}
    </div>
  );
}

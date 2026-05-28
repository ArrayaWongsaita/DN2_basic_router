import CreateNote from "../components/notes/CreateNote";
import NoteList from "../components/notes/NoteList";

export default function NotesPage() {
  return (
    <div>
      <CreateNote />
      <NoteList />
    </div>
  );
}

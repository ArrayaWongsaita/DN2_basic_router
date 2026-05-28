import { useCounterStore } from "../stores/counterStore";

export default function UpdateTodo() {
  return (
    <div
      onClick={() => {
        const { count } = useCounterStore.getState();
        alert(count);
      }}
    >
      UpdateTodo
    </div>
  );
}

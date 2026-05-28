import { useCounterStore } from "../stores/counterStore";

export default function CreateTodo() {
  // const { inc, dec, inc2 } = useCounterStore();
  const inc = useCounterStore((state) => state.inc);
  const dec = useCounterStore((state) => state.dec);
  const inc2 = useCounterStore((state) => state.inc2);
  console.log("render");
  return (
    <div>
      CreateTodo
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={inc2}>+2</button>
    </div>
  );
}

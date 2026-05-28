import { create } from "zustand";
import { persist } from "zustand/middleware";

const createCounterStore = (set, get) => ({
  count: 1,
  inc: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  dec: () => {
    const { count } = get();
    set({ count: count - 1 });
  },
  inc2: () => {
    // set((s) => ({ count: s.count + 2 }));
    const { count } = get();
    set({ count: count + 2 });
  },
});
export const useCounterStore = create(
  persist(createCounterStore, { name: "myCounter" }),
);

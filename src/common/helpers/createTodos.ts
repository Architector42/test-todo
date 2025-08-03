import { generateId } from "./generateId";

export const createTodos = (length: number) => {
  const list = Array.from({ length }, (_, i) => ({
    id: generateId(),
    name: `Item ${i + 1}`,
  }));

  return list;
};

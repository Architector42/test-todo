export async function fetchTodosData() {
  const response = await fetch("/todos.json");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await response.json();

  return json;
}

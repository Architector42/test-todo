import "./App.css";

import { TodoList } from "./features/todo";

const App = () => {
  return (
    <div className="App">
      <header className="header"></header>
      <TodoList />
    </div>
  );
};

export default App;

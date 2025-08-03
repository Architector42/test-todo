import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../app/index";
import { TextInput, Title, VirtualizationList } from "../../common/components";
import { TodoItem } from "../../common/components/TodoItem";
import { addTodo, editTodo, fetchTodoList, removeTodo } from "./actions";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const { list, loading } = useSelector((state: RootState) => state.todoList);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Title text="Todo List" color="white" />
      <TextInput
        value={value}
        onChange={setValue}
        placeholder="Add a new task..."
        onSave={(_value) => {
          dispatch(addTodo(_value));
        }}
        buttonLabel="Add Todo"
      />

      <VirtualizationList
        list={list}
        itemHeight={70}
        overflow={5}
        loading={loading}
        renderItem={(item) => (
          <TodoItem
            value={item.name}
            onEdit={(value: string) =>
              dispatch(editTodo({ ...item, name: value }))
            }
            onRemove={() => dispatch(removeTodo(item.id))}
          />
        )}
      />
    </div>
  );
};

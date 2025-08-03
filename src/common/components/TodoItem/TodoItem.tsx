import { FC, memo, useRef, useState } from "react";

import { ButtonIcon } from "../ButtonIcon";
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  value: string;
  onEdit?: (value: string) => void;
  onRemove?: () => void;
}

const KEY_ENTER = "Enter";

export const TodoItem: FC<TodoItemProps> = memo((props) => {
  const { value, onEdit, onRemove } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState(value);
  const [isReadOnly, setIsReadOnly] = useState(true);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === KEY_ENTER) {
      setIsReadOnly(!isReadOnly);
      onEdit && onEdit(text);
    }
  };

  const handleClickEdit = (): void => {
    setIsReadOnly(!isReadOnly);

    if (!isReadOnly && value !== text && onEdit) {
      onEdit(text);
    }

    if (ref.current) {
      ref.current.focus();
    }
  };

  const handleClickRemove = (): void => {
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div className={styles.container}>
      <input
        ref={ref}
        className={styles.input}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        readOnly={isReadOnly}
      />
      <div className={styles.buttons}>
        <ButtonIcon
          icon="edit"
          onClick={handleClickEdit}
          isActive={!isReadOnly}
        />
        <ButtonIcon icon="trash" onClick={handleClickRemove} />
      </div>
    </div>
  );
});

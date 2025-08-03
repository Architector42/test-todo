import { FC } from "react";

import { ctsWithCondition } from "../../helpers";
import style from "./TextInput.module.css";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  buttonLabel?: string;
  onSave?: (value: string) => void;
}

const KEY_ENTER = "Enter";

export const TextInput: FC<TextInputProps> = (props) => {
  const { placeholder, value, onChange, onSave } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSave = () => {
    if (onSave && value) {
      onSave(value);
      onChange("");
    }
  };

  const handleClickEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === KEY_ENTER && onSave && value) {
      e.preventDefault();
      onSave(value);
      onChange("");
    }
  };

  return (
    <div className={style.textInputContainer}>
      <input
        type="text"
        className={ctsWithCondition({
          [style.textInput]: true,
          [style.inputWithButton]: Boolean(onSave),
        })}
        value={value}
        maxLength={70}
        onChange={handleChange}
        onKeyDown={handleClickEnter}
        placeholder={placeholder ?? ""}
      />
      {props.onSave && (
        <button onClick={handleSave} className={style.inputButton}>
          {props.buttonLabel ?? "Submit"}
        </button>
      )}
    </div>
  );
};

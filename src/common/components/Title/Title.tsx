import { ctsWithCondition } from "../../helpers";
import style from "./Title.module.css";

interface TitleProps {
  text: string;
  color?: "white";
}

const COLOR_MAP = {
  white: "white",
};

export const Title = (props: TitleProps) => {
  const { text, color } = props;

  return (
    <h1
      className={ctsWithCondition({
        [style.title]: true,
        [style.colorWhite]: color === COLOR_MAP.white,
      })}
    >
      {text}
    </h1>
  );
};

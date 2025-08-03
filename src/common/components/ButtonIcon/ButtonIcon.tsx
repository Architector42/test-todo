import { FC } from "react";

import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";
import { ReactComponent as TrashIcon } from "../../../assets/svg/trash.svg";
import { ctsWithCondition } from "../../helpers";
import styles from "./ButtonIcon.module.css";

interface ButtonIconProps {
  onClick?: () => void;
  icon: "trash" | "edit";
  isActive?: boolean;
}

const iconMap = {
  trash: TrashIcon,
  edit: EditIcon,
};

export const ButtonIcon: FC<ButtonIconProps> = (props) => {
  const { icon, onClick, isActive } = props;

  const IconComponent = iconMap[icon];

  return (
    <button
      className={ctsWithCondition({
        [styles.button]: true,
        [styles.isActive]: Boolean(isActive),
      })}
      type="button"
      onClick={onClick}
    >
      <IconComponent />
    </button>
  );
};

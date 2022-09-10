import { RiCheckLine } from "react-icons/ri";
import styled from "styled-components";

import CellLeftButton from "../Cell/LeftButton";
import CheckBoxLabel from "./CheckBoxLabel";

interface TodoItemCheckBoxProps {
  taskID: string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

const StyledCellLeftButton = styled(CellLeftButton)`
  input:checked + label {
    color: mediumaquamarine;
    border-color: mediumaquamarine;
  }

  input:checked + label .icon {
    opacity: 1;
    transform: scale(1);
  }
`;

const TodoItemCheckBox = ({
  taskID,
  checked,
  onChange,
}: TodoItemCheckBoxProps) => {
  const taskCheckboxID = `${taskID}-checkbox`;

  return (
    <StyledCellLeftButton>
      <input
        id={taskCheckboxID}
        type="checkbox"
        checked={checked}
        onChange={(e: JSX.TargetedEvent<HTMLInputElement>) =>
          onChange?.(e.currentTarget.checked)
        }
        hidden
      />
      <CheckBoxLabel htmlFor={taskCheckboxID}>
        <RiCheckLine className="icon" size={20} />
      </CheckBoxLabel>
    </StyledCellLeftButton>
  );
};

export default TodoItemCheckBox;

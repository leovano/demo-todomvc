import styled from "styled-components";
import Cell from "../Cell";
import CellLeftButton from "../Cell/LeftButton";
import { RiCheckDoubleLine } from "react-icons/ri";

interface InputParams {
  value: string;
  onChange: JSX.EventHandler<JSX.TargetedEvent<HTMLInputElement, Event>>;
  allChecked: boolean;
  onCheckAll: JSX.MouseEventHandler<HTMLButtonElement>;
}

const StyledInput = styled.input`
  border: none;
  flex: 1;
  font-size: 24px;
  height: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
    font-style: italic;
  }
`;

const Input = ({
  value,
  onChange,
  allChecked = false,
  onCheckAll,
}: InputParams) => (
  <Cell>
    <CellLeftButton type="button" onClick={onCheckAll}>
      <RiCheckDoubleLine
        size={24}
        color={allChecked ? "mediumaquamarine" : "gainsboro"}
      />
    </CellLeftButton>

    <StyledInput
      type="text"
      placeholder="What needs to be done?"
      autoFocus
      value={value}
      onChange={onChange}
    />
  </Cell>
);

export default Input;

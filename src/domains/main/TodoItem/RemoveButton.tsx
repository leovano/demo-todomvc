import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

const TodoItemRemoveButton = styled.button`
  background-color: rgba(255, 99, 71, 0.1);
  border-radius: 50%;
  display: grid;
  flex-shrink: 0;
  height: 34px;
  margin-left: auto;
  place-items: center;
  width: 34px;
`;

TodoItemRemoveButton.defaultProps = {
  children: <RiCloseLine color="tomato" size={20} />,
};

export default TodoItemRemoveButton;

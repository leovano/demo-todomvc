import styled from "styled-components";

const TodoItemContentEdit = styled.input`
  border: none;
  flex: 1;
  margin-right: 16px;
  padding: 8px;
`;

TodoItemContentEdit.defaultProps = {
  type: "text",
  autoFocus: true,
};

export default TodoItemContentEdit;

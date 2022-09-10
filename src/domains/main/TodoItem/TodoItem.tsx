import styled from "styled-components";

import Cell from "../Cell";

const TodoItem = styled(Cell)`
  font-size: 24px;

  &:last-of-type {
    border-bottom: none;
  }
`;

export default TodoItem;

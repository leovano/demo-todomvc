import styled from "styled-components";

export const Container = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainCard = styled.div`
  width: 550px;
  border-radius: 2px;
  box-shadow: 0 7px 6px -5px rgba(0, 0, 0, 0.08), 0 10px 0 -5px white,
    0 11px 0 -5px gainsboro, 0 11px 0 -5px gainsboro,
    0 14px 6px -10px rgba(0, 0, 0, 0.08), 0 20px 0 -10px white,
    0 21px 0 -10px gainsboro, 0 21px 4px -10px rgba(0, 0, 0, 0.2),
    0 0 4px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.1);

  .todo-item .todo-remove-button {
    visibility: hidden;
  }

  .todo-item:hover .todo-remove-button {
    visibility: visible;
  }

  .todo-item:focus-within .todo-remove-button {
    visibility: visible;
  }
`;

export const ListContainer = styled.div`
  max-height: 40vh;
  overflow-y: auto;
`;

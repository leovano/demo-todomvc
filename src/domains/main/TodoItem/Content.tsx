import styled from "styled-components";

interface TodoItemContentProps extends React.HTMLProps<HTMLDivElement> {
  completed: boolean;
}

const TodoItemContent = styled.div<TodoItemContentProps>`
  align-items: center;
  display: flex;
  margin-right: 16px;
  position: relative;
  transition: 0.2s;

  &::after {
    content: "";
    transition: 0.2s;
    display: block;
    position: absolute;
    width: ${(props) => (props.completed ? "100%" : "0")};
    height: 2px;
    background-color: ${(props) =>
      props.completed ? "rgba(102, 221, 170, 0.6)" : "black"};
  }

  ${(props) => props.completed && { color: "rgba(102, 221, 170, 0.4)" }}
`;

TodoItemContent.defaultProps = {
  children: "",
  completed: false,
};

export default TodoItemContent;

import styled from "styled-components";

const CheckBoxLabel = styled.label`
  align-items: center;
  background-color: none;
  border-radius: 50%;
  border: 1px solid lightgrey;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  height: 30px;
  justify-content: center;
  width: 30px;

  .icon {
    transition: 0.1s;
    opacity: 0;
    transform: scale(0.4);
  }
`;

export default CheckBoxLabel;

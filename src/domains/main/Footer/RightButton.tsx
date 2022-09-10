import styled from "styled-components";

export const FooterRightButton = styled.button`
  background-color: rgba(255, 99, 71, 0.1);
  border-radius: 4px;
  border: none;
  color: tomato;
  cursor: pointer;
  padding: 8px 12px;
  position: absolute;
  right: 20px;
  text-align: right;
`;

FooterRightButton.defaultProps = {
  children: "Clear completed",
};

export default FooterRightButton;

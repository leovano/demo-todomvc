import styled from "styled-components";
import { Link } from "wouter-preact";

const FooterTabItem = styled(Link)`
  align-items: center;
  border-radius: 4px;
  color: currentColor;
  display: flex;
  padding: 8px 12px;
  text-decoration: none;
  text-transform: capitalize;

  &.active {
    box-shadow: 0 0 0 1px mediumaquamarine;
    color: mediumaquamarine;
  }

  &:not(.active):hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export default FooterTabItem;

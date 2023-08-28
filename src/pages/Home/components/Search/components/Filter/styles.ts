import { css } from "@emotion/react";

export const styFilterContainer = css`
  position: absolute;
  top: 37px;
  left: 0;
  z-index: 3;
  background-color: white;
  padding: 4px;
  text-align: left;
  width: 240px;
  list-style: none;
  border-radius: 6px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  li {
    width: 100%;
    align-items: center;
    display: flex;
    height: 35px;
    span {
      padding-left: 8px;
    }
    &:hover {
      border-radius: 6px;
      background-color: #eaeaea;
    }
  }
`;

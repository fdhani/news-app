import { css } from "@emotion/react";

export const styPageContainer = css`
  margin-top: 60px;
  padding: 8px 16px;
`;

export const styToaster = css`
  position: fixed;
  background-color: #ff2d2d;
  color: white;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 10px;
  min-width: 340px;
  min-height: 50px;
  display: flex;
  border-radius: 9px;
  align-items: center;
  top: -50%;
  transition: top 0.5s ease-in-out;

  &.display {
    top: 70px;
  }
`;

import { css } from "@emotion/react";
import pxToRem from "@/utils/pxToRem";

export const styDrawerContainer = css`
  position: fixed;
  top: 60px;
  left: -100%;
  background-color: white;
  z-index: 1;
  padding: 12px;
  width: 300px;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  &.display {
    left: -0%;
  }
`;

export const styArticleHistoryContainer = css`
  .item {
    border-radius: 8px;
    height: 80px;
    margin-bottom: 8px;
    border: 1px solid #d0d0d0;
    padding: 8px;
    display: flex;
    flex-direction: column;
    h3 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      color: black;
      text-decoration: none;
      margin: 0;
      font-size: ${pxToRem(14)};
    }
    a {
      text-decoration: none;
    }
    p {
      color: #a5a5a5;
      font-style: italic;
      margin: auto 0 0;
      font-size: ${pxToRem(10)};
    }
  }
`;

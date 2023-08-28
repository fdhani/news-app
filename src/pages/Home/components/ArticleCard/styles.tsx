import { css } from "@emotion/react";
import pxToRem from "@/utils/pxToRem";

export const styArticleContainer = css`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  display: flex;
  border: 1px solid #d0d0d0;

  &.vertical {
    flex-direction: row;
  }
`;

export const styArticleBackground = css`
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-width: 50%;
`;

export const styArticleContent = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 4px 12px;
  background-color: #fff;

  h2 {
    font-size: ${pxToRem(16)};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    margin: 10px 0;
    line-height: 23px;
    -webkit-box-orient: vertical;
    a {
      color: #2a3766e6;
      text-decoration: none;
    }
    a: hover {
      text-decoration: underline;
    }
  }
  .desc {
    margin-top: 0;
    line-height: 23px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: ${pxToRem(12)};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const styArticleLink = css`
  display: flex;
  justify-content: end;
  margin-top: auto;
  align-items: center;
  justify-content: space-between;
  p {
    color: #a5a5a5;
    font-style: italic;
    font-size: ${pxToRem(12)};
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  a {
    color: #2a3766e6;
    text-align: right;
    white-space: nowrap;
    font-weight: bolder;
    font-size: ${pxToRem(12)};
    text-decoration: none;
  }
`;

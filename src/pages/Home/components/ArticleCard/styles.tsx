import { css, keyframes } from "@emotion/react";
import pxToRem from "@/utils/pxToRem";

const shine = keyframes`
  0% {
    background-color: #ababab;
  }
  80% {
    background-color: #c6c6c6;
  }
  100% {
    background-color: #ababab;
  }
`;

export const styArticleLoaderContainer = css`
  border-radius: 8px;
  background-size: 600px;
  animation: ${shine} 1s infinite linear;
`;

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
  min-height: 100px;
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

export const styEditArticleTitleContainer = css`
  width: 100%;
  position: fixed;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 400px;
  border-radius: 8px;
  padding: 12px 24px 32px;
  input {
    width: 100%;
    outline: none;
    border-radius: 4px;
    height: 35px;
    padding: 0 8px;
    font-size: ${pxToRem(14)};
    border: 1px solid #d0d0d0;
  }
  button {
    width: 100%;
    cursor: pointer;
    height: 35px;
    margin-top: 16px;
    border-radius: 4px;
    outline: none;
    color: white;
    font-size: ${pxToRem(14)};
    border: none;
    background-color: #6e6e6e;
  }
`;

export const styEditArticleTitleOverlay = css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 2;
  opacity: 0.7;
`;

export const styArticleTitle = css`
  position: relative;
  padding: 0;
  margin: 0;
  button {
    cursor: pointer;
    position: absolute;
    display: none;
    justify-content: center;
    font-size: 8px;
    align-items: center;
    color: white;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    background-color: #000000b0;
    border: 0;
    border-radius: 100%;
    span {
      font-size: ${pxToRem(13)};
    }
  }

  .title-wrapper {
    font-size: ${pxToRem(16)};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    margin: 10px 0;
    line-height: 23px;
    -webkit-box-orient: vertical;
    color: #2a3766e6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  &:hover {
    button {
      display: flex;
    }
  }
`;

export const stBtnEditTitle = css`
  position: absolute;
  display: flex;
  justify-content: center;
  font-size: 8px;
  align-items: center;
  color: white;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #000000b0;
  border: 0;
  border-radius: 100%;
  span {
    font-size: ${pxToRem(13)};
  }
`;

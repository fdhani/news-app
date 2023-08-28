import { css } from "@emotion/react";
import pxToRem from "@/utils/pxToRem";

export const styFilterContainer = css`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const stySearchContainer = css`
  width: 40%;
  height: 45px;
  border: 1px solid #b9b9b9;
  border-radius: 14px;
  outline: none;
  border: 1px solid #b9b9b9;
  padding: 0 14px;
  font-size: 16px;
  display: block;
  background-color: #d5d5d5;
  font-size: ${pxToRem(16)};
  font-weight: bolder;
  transition: all 0.1s ease-in-out;
  border-radius: 8px;

  &:focus {
    font-weight: normal;
    background-color: #fff;
  }
`;

export const styFilterButton = css`
  border-radius: 8px;
  position: relative;
  border: 1px solid #b9b9b9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  cursor: pointer;
  height: 45px;
  transition: all 0.1s ease-in-out;
  color: #707070;
  margin-right: 8px;

  &:hover {
    background-color: #d5d5d5;
  }
`;

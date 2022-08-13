import Pagination from "rc-pagination";
import styled from "styled-components";

export const SPaginationWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  gap: 10px;
  align-items: center;
`;

export const SPagination = styled(Pagination)`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background: ${(p) => p.theme?.cardBackgroundColor};
  padding: 8px 20px;
  border-radius: 5px;
  margin: unset;
  justify-content: center;
  > li > a {
    background-color: blue;
    border-radius: 5px;
    background-color: ${(p) => p.theme?.nonActiveButtonColor};
    border-radius: 5px;
    padding: 0px 6px;
    cursor: pointer;
    :hover {
      background-color: ${(p) => p.theme?.onHoverButtonColor};
    }
  }
  > li[class*="active"] > a {
    background-color: ${(p) => p.theme?.activeButtonColor};
  }
  > li:last-child > div {
    display: flex;
    gap: 8px;
    > input {
      width: 30px;
    }
  }
`;

export const SPaginationIcons = styled.div`
  cursor: pointer;
`;

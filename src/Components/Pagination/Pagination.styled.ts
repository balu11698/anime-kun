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
  background: #1e2d3e;
  padding: 8px 20px;
  border-radius: 5px;
  margin: unset;
  > li > a {
    background-color: blue;
    border-radius: 5px;
    background-color: #494caf;
    border-radius: 5px;
    padding: 0px 6px;
    cursor: pointer;
  }
  > li[class*="active"] > a {
    background-color: #707185;
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

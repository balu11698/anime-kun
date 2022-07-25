import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SAnimeDetailsNavWrapper = styled.div`
  display: flex;
  gap: 10px;
  background: #1e2d3e;
  border-radius: 5px;
  padding: 0px 5px;
`;

export const SNavLink = styled(NavLink)<{ active: number }>`
  text-decoration: none;
  &:active {
    color: none;
  }
  &:hover {
    color: #666e76;
  }
  color: ${(p) => (p.active ? "#4649c5" : "white")};
`;

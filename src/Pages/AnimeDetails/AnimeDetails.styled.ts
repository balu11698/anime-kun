import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SAnimeDetailsNavWrapper = styled.div`
  display: flex;
  gap: 10px;
  background: ${(p) => p.theme?.cardBackgroundColor};
  border-radius: 5px;
  padding: 0px 5px;
  margin: 8px 0;
`;

export const SNavLink = styled(NavLink)<{ active: number }>`
  text-decoration: none;
  &:active {
    color: none;
  }
  &:hover {
    color: ${(p) => p.theme?.onHoverButtonColor};
  }
  color: ${(p) => (p.active ? p.theme?.activeButtonColor : p.theme?.color)};
`;

export const SAnimeDetailTitle = styled.div`
  font-size: 20px;
  min-height: 30px;
`;

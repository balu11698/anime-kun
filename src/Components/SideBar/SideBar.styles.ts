import { NavLink } from "react-router-dom";
import { animated } from "react-spring";
import styled from "styled-components";

export const SSideBar = styled.div<{ isSideBar: boolean }>`
  height: calc(100vh - 50px);
  width: ${(p) => (p.isSideBar ? "200px" : 0)};
  position: fixed;
  background-color: ${(p) => p.theme.sideBarBackgroundColor};
  z-index: 1;
  transition: width 0.5s;
  z-index: 2;
`;

export const SSideBarItem = styled(animated.div)`
  display: flex;
  flex-direction: column;
`;

export const SSideBarName = styled(animated.div)`
  margin: 5px;
  padding: 5px;
  background: ${(p) => p.theme?.menuBackgroundColor};
  border-radius: 8px;
  white-space: nowrap;
  cursor: pointer;
`;

export const SSideBarSubName = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme?.color};
  margin: 5px 10px;
  padding: 5px;
  background: ${(p) => p.theme?.menuBackgroundColor};
  border-radius: 8px;
  white-space: nowrap;
  overflow: hidden;
  &[class*="active"] {
    color: #8d8dd5;
  }
`;

export const SSideSubAnimate = styled(animated.div)<{
  opened?: number;
  height: number;
}>`
  height: ${(p) => (p?.opened ? `${p.height * 45}px` : 0)};
  opacity: ${(p) => (p?.opened ? 1 : 0)};
  overflow: hidden;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
`;

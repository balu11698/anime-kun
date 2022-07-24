import { NavLink } from "react-router-dom";
import { animated } from "react-spring";
import styled from "styled-components";

export const SSideBar = styled.div<{ isSideBar: boolean }>`
  height: calc(100vh - 50px);
  width: ${(p) => (p.isSideBar ? "200px" : 0)};
  position: fixed;
  background-color: #1f343ce3;
  z-index: 1;
  transition: all 0.5s;
`;

export const SSideBarItem = styled(animated.div)`
  display: flex;
  flex-direction: column;
`;

export const SSideBarName = styled(animated.div)`
  margin: 10px;
  white-space: nowrap;
  cursor: pointer;
`;

export const SSideBarSubName = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin: 10px 10px 10px 20px;
  white-space: nowrap;
  overflow: hidden;
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

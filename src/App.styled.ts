import { animated } from "react-spring";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeType } from "./App";

export const SContainer = styled.div`
  padding: 20px;
  position: relative;
`;
export const SRoutes = styled(animated.div)``;

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
body{
font-family:'Poppins', 'Times New Roman', Times, serif;
background-color: ${(theme) => theme.theme?.backgroundColor};
color:  ${(theme) => theme.theme?.color};
-webkit-tap-highlight-color: transparent;
}`;

export const SMainScreen = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

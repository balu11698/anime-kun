import { animated } from "react-spring";
import styled from "styled-components";

export const SAnimeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 150px));
  grid-gap: 10px;
  justify-content: space-between;
  margin-block: 8px;
`;

export const SAnimeCard = styled(animated.div)`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const SAnimeImage = styled.img`
  width: 150px;
  height: 225px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  :hover {
    transform: translateZ(0) scale(1.05);
  }
`;

export const SAnimeTitle = styled(animated.div)`
  font-size: 14px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

import { animated } from "react-spring";
import styled from "styled-components";

export const SAnimeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 190px));
  grid-gap: 10px;
  justify-content: space-between;
  margin: 8px 0;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 150px));
  }
`;

export const SAnimeCard = styled(animated.div)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const SAnimeDetails = styled.div`
  transition: transform 0.3s ease-in-out;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  position: relative;
  font-size: 14px;
  width: 190px;
  height: 275px;
  :hover {
    transform: translateZ(0) scale(1.05);
  }
  @media (max-width: 1024px) {
    width: 150px;
    height: 225px;
  }
`;

export const SAnimeImage = styled.img`
  width: 190px;
  height: 275px;
  border-radius: 5px;
  @media (max-width: 1024px) {
    width: 150px;
    height: 225px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 150px));
  }
`;

export const SAnimeRank = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  background: #1e2d3ecc;
  padding: 5px;
  margin: 5px 0px 0px 5px;
  border-radius: 10px;
`;

export const SAnimeRating = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background: #1e2d3ecc;
  width: calc(100% - 10px);
  padding: 2px 5px;
  border-radius: 0px 0px 4px 4px;
`;
export const SScore = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const SAnimeTitle = styled(animated.div)`
  font-size: 14px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

import { animated } from "react-spring";
import styled from "styled-components";

export const SAnimeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-gap: 16px;
  justify-content: space-between;
  margin: 8px 0;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const SAnimeCard = styled(animated.div)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  -webkit-tap-highlight-color: transparent;
`;

export const SAnimeDetails = styled(animated.div)`
  transition: transform 0.3s ease-in-out;
  position: relative;
  font-size: 14px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  image-rendering: optimizeSpeed;
  image-rendering: -webkit-optimize-contrast;
  :hover {
    transform: translateZ(0) scale(1.05);
  }
`;

export const SAnimeImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  backface-visibility: hidden;
  object-fit: cover;
  -webkit-backface-visibility: hidden;
`;

export const SAnimeRank = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  background: ${(p) => p.theme?.rankBackgroundColor};
  padding: 5px;
  margin: 5px 0px 0px 5px;
  border-radius: 10px;
`;

export const SAnimeRating = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background: ${(p) => p.theme?.rankBackgroundColor};
  width: calc(100% - 10px);
  padding: 2px 5px;
  border-radius: 0px 0px 4px 4px;
  max-height: 20px;
  min-height: 20px;
`;
export const SScore = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const SAnimeTitle = styled(animated.div)`
  font-size: 14px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

export const SScoreDetails = styled.div`
  display: flex;
`;

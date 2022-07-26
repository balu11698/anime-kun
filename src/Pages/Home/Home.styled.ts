import { NavLink } from "react-router-dom";
import { animated } from "react-spring";
import styled from "styled-components";
import { topAnimeNumberColour } from "../../Constants/styleConstants";

export const SHomeWrapper = styled.div`
  display: flex;
  gap: 20px;
  min-height: calc(100vh - 90px);
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const STopAnimeWrapper = styled.div`
  width: 25%;
  min-width: 350px;
  @media (max-width: 1024px) {
    width: 100%;
    min-width: unset;
  }
`;

export const STopAnimeHeader = styled.div`
  font-size: 20px;
`;

export const STopAnimeCard = styled(animated.div)`
  display: flex;
  height: 75px;
  background-color: ${(p) => p.theme.cardBackgroundColor};
  margin: 8px 0;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  :hover {
    transform: translateZ(0) scale(1.03);
  }
`;

export const STopAnimeNumber = styled.div<{ rankNumber: number }>`
  font-size: 44px;
  min-width: 50px;
  text-align: center;
  color: ${(p) => topAnimeNumberColour[p?.rankNumber]};
`;

export const STopAnimeImage = styled.img`
  max-width: 55px;
  max-height: 75px;
  min-width: 55px;
  min-height: 75px;
`;

export const STopAnimeDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 10px;
  font-size: 14px;
`;

export const STopAnimeTitle = styled(animated.div)`
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

export const STopAnimeDetails = styled.div`
  color: ${(p) => p.theme?.lightTextColor};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const STopAnimeScore = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 45px;
`;
export const SRatingImage = styled(animated.img)`
  width: 12px;
  height: 12px;
  margin-bottom: 1px;
`;

export const SSeasonAnimeWrapper = styled.div`
  flex-grow: 1;
`;

export const SSeasonAnimeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

export const SSeasonPaginationWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const SSeasonPagination = styled.div<{ isPage: number }>`
  color: ${(p) => !p.isPage && "#666e76"};
  cursor: ${(p) => p.isPage && "pointer"};
`;

export const STopAnimeNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

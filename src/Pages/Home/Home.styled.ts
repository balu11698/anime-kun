import styled from "styled-components";
import { topAnimeNumberColour } from "../../Constants/styleConstants";

export const SHomeWrapper = styled.div`
  display: flex;
`;

export const STopAnimeWrapper = styled.div`
  width: 25%;
  min-width: 350px;
  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
  }
`;

export const STopAnimeCard = styled.div`
  display: flex;
  height: 65px;
  background-color: #1b2a30;
  margin: 8px;
  border-radius: 5px;
  cursor: pointer;
`;

export const STopAnimeNumber = styled.div<{ rankNumber: number }>`
  font-size: 44px;
  min-width: 50px;
  text-align: center;
  color: ${(p) => topAnimeNumberColour[p?.rankNumber]};
`;

export const STopAnimeImage = styled.img`
  max-width: 45px;
  max-height: 65px;
  min-width: 45px;
  min-height: 65px;
`;

export const STopAnimeDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 10px;
  font-size: 12px;
`;

export const STopAnimeTitle = styled.div`
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

export const STopAnimeDetails = styled.div`
  color: #ffffff80;
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
export const SRatingImage = styled.img`
  width: 12px;
  height: 12px;
`;

import { animated } from "react-spring";
import styled from "styled-components";

export const SAnimeOverviewWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const SDetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 1000px) {
    width: 100%;
  } ;
`;

export const SDetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
  align-items: center;
  width: 100%;
`;

export const SAnimeOverviewImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SAnimeOverviewImage = styled.img`
  border-radius: 8px;
  width: 100%;
  max-width: 424px;
  @media (max-width: 1000px) {
    max-width: 300px;
  } ;
`;

export const SAnimeOverview = styled.div`
  position: relative;
`;

export const SAnimeCard = styled(animated.div)`
  padding: 8px;
  background: ${(p) => p.theme?.cardBackgroundColor};
  border-radius: 8px;
  width: calc(100% - 16px);
  text-align: justify;
`;
export const SAnimeRating = styled.div`
  position: absolute;
  bottom: 7px;
  display: flex;
  justify-content: space-between;
  background: ${(p) => p.theme?.rankBackgroundColor};
  width: calc(100% - 10px);
  padding: 2px 5px;
  border-radius: 0px 0px 4px 4px;
  max-height: 25px;
  min-height: 25px;
`;

export const SAnimeDetailsOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;
`;

export const SAnimeOverviewDetails = styled.div`
  display: flex;
`;

export const SAnimeOverviewLeft = styled.div`
  min-width: 100px;
`;

export const SOverviewVideo = styled.div`
  padding: 8px;
  background: ${(p) => p.theme?.cardBackgroundColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: min-content;
  > iframe {
    width: 590px;
    height: 330px;
  }
  @media (max-width: 800px) {
    width: calc(100% - 16px);
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    > iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
      padding-top: 36px;
    }
  } ;
`;

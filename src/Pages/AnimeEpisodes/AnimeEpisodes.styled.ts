import { animated } from "react-spring";
import styled, { keyframes } from "styled-components";

export const opacityAnimation = keyframes`
  0% { opacity:0; transform : translate3d(-20px,0,0) }
  100% { opacity: 1;transform : translate3d(0,0,0) }
 `;

export const SEpisodesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;

export const SEpisodesCard = styled(animated.div)`
  background-color: ${(p) => p.theme?.cardBackgroundColor};
  padding: 4px 10px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  animation-name: ${opacityAnimation};
  animation-duration: 1s;
`;

export const SEpisodeNumber = styled.div`
  display: flex;
  gap: 10px;
`;

export const SEpisodeDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
`;

export const SEpisodeDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SEpisodeRating = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: 2px;
`;

export const SEpisodeFiller = styled.span<{ isFiller?: number }>`
  color: ${(p) => p.isFiller && "#d16464"};
`;

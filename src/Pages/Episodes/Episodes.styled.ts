import styled from "styled-components";

export const SEpisodesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;

export const SEpisodesCard = styled.div`
  background-color: #1b2a30;
  padding-inline: 10px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
`;

export const SEpisodeNumber = styled.div`
  display: flex;
  gap: 10px;
`;

export const SEpisodeDetailsWrapper = styled.div``;

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

import styled from "styled-components";

export const SAnimeOverviewWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const SDetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 900px) {
    width: 100%;
  } ;
`;

export const SAnimeOverviewImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SAnimeOverviewImage = styled.img`
  border-radius: 8px;
  max-width: 100%;
  width: 424px;
`;

export const SAnimeCard = styled.div`
  padding: 8px;
  background: #1e2d3e;
  border-radius: 8px;
  width: calc(100% - 16px);
  text-align: justify;
`;
export const SAnimeRating = styled.div`
  display: flex;
  justify-content: space-between;
`;

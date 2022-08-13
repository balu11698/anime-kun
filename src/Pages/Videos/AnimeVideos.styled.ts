import styled from "styled-components";

export const SAnimeVideosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  justify-items: center;
  grid-gap: 16px;
  @media (max-width: 1024px) {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
`;

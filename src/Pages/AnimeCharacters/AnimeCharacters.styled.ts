import styled from "styled-components";

export const SAnimeCharactersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 16px;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const SAnimeCharacterDetailWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

export const SAnimeCharacterDetail = styled.div`
  display: flex;
  gap: 8px;
  font-size: 14px;
`;

export const SAnimeCharacterImage = styled.img`
  width: 80px;
  height: 130px;
  border-radius: 5px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  object-fit: cover;
  -webkit-backface-visibility: hidden;
`;

export const SAnimeCharacterInfo = styled.div<{ textAlign: string }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: ${(p) => p.textAlign};
`;

export const SAnimeVoiceActors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
`;

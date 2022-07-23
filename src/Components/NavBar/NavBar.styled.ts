import styled from "styled-components";

export const SNavBar = styled.div`
  position: sticky;
  top: 0;
  height: 50px;
  width: calc(100% - 50px);
  padding-inline: 25px;
  background-color: #1e2d3e;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SHeaderName = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

export const SLanguageWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const SLanguage = styled.div<{
  languageSelected: boolean;
}>`
  background: ${(p) => p.languageSelected && "#4649c5"};
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: ${(p) => !p.languageSelected && "#666e76"};
  }
`;

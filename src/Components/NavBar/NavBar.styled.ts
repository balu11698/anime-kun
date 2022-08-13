import styled from "styled-components";

export const SNavBar = styled.div`
  position: sticky;
  top: 0;
  height: 50px;
  width: calc(100% - 50px);
  padding: 0px 25px;
  background-color: ${(p) => p.theme?.headerColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;
export const SHamburger = styled.button<{ open: boolean }>`
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(p) => p.theme?.navBarIconColor};
    border-radius: 10px;
    transition: transform 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const SLeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SHeaderName = styled.div`
  font-size: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const SLanguageWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const SLanguage = styled.div<{
  languageSelected: boolean;
}>`
  background: ${(p) => p.languageSelected && p.theme.activeButtonColor};
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: ${(p) => !p.languageSelected && p.theme?.onHoverButtonColor};
  }
`;

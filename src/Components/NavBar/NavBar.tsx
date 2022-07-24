import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Language } from "../../Constants/Enum";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Data/ReduxHooks/reduxHooks";
import { changeLanguage } from "../../Data/Slice/language.slice";
import SideBar from "../SideBar/SideBar";
import {
  SHamburger,
  SHeaderName,
  SLanguage,
  SLanguageWrapper,
  SLeftNav,
  SNavBar,
} from "./NavBar.styled";

const NavBar = () => {
  const selectedLanguage = useAppSelector((state) => state.language.name);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isSideBar, setIsSideBar] = useState(false);

  const languageChange = (language: Language) => {
    dispatch(changeLanguage(language));
  };
  return (
    <>
      <SNavBar>
        <SLeftNav>
          <SHamburger open={isSideBar} onClick={() => setIsSideBar(!isSideBar)}>
            <div />
            <div />
            <div />
          </SHamburger>
          <SHeaderName onClick={() => navigate("/")}>Anime Kun</SHeaderName>
        </SLeftNav>
        <SLanguageWrapper>
          <SLanguage
            languageSelected={selectedLanguage === Language.English}
            onClick={() => languageChange(Language.English)}
          >
            EN
          </SLanguage>
          <SLanguage
            languageSelected={selectedLanguage === Language.Japan}
            onClick={() => languageChange(Language.Japan)}
          >
            JP
          </SLanguage>
        </SLanguageWrapper>
      </SNavBar>
      <SideBar {...{ isSideBar }} />
    </>
  );
};

export default NavBar;

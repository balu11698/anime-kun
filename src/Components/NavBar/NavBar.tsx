import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { animated, config, useSpring } from "react-spring";
import { Language } from "../../Constants/Enum";
import { useAppDispatch, useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { changeLanguage } from "../../Data/Slice/language.slice";
import SideBar from "../SideBar/SideBar";
import {
  SHamburger,
  SHeaderName,
  SLanguage,
  SLanguageWrapper,
  SLeftNav,
  SNavBar
} from "./NavBar.styled";

interface NavBarProps {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar = ({ isDarkTheme, setIsDarkTheme }: NavBarProps) => {
  const selectedLanguage = useAppSelector((state) => state.language.name);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isSideBar, setIsSideBar] = useState(false);
  const languageChange = (language: Language) => {
    dispatch(changeLanguage(language));
  };

  const iconAnimationo = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
    config: { ...config.gentle, duration: 5000 },
    loop: true
  });

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
            onClick={() => languageChange(Language.English)}>
            EN
          </SLanguage>
          <SLanguage
            languageSelected={selectedLanguage === Language.Japan}
            onClick={() => languageChange(Language.Japan)}>
            JP
          </SLanguage>
          <div>
            <animated.div onClick={() => setIsDarkTheme(!isDarkTheme)} style={iconAnimationo}>
              {" "}
              {isDarkTheme ? "☀" : "☾"}
            </animated.div>
          </div>
        </SLanguageWrapper>
      </SNavBar>
      <div>
        <SideBar {...{ isSideBar }} />
      </div>
    </>
  );
};

export default NavBar;

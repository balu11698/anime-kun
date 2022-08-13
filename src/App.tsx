import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, SContainer, SMainScreen } from "./App.styled";
import Loader from "./Components/Loader/Loader";
import NavBar from "./Components/NavBar/NavBar";
import Routing from "./Routing";

const theme = {
  // darkTheme: {
  // backgroundColor: "#121c20",
  // color: "white",
  // headerColor: "#1e2d3e",
  // sideBarBackgroundColor: "#1f343ce3",
  // activeButtonColor: "#4649c5",
  // nonActiveButtonColor: "#707185",
  // cardBackgroundColor: "#1b2a30",
  // rankBackgroundColor: "#1e2d3ecc",
  // loaderBackgroundColor: "#121c20"
  // },
  // lightTheme: {
  //   backgroundColor: "#EEFCD3",
  //   color: "black",
  //   headerColor: "#BAF17A",
  //   sideBarBackgroundColor: "#eefcd3b3",
  //   cardBackgroundColor: "#D8FAA8",
  //   rankBackgroundColor: "#baf17a91",
  //   loaderBackgroundColor: "##89f54d",
  //   activeButtonColor: "#a8eb5b",
  //   nonActiveButtonColor: "#628ebf"
  // }
  darkTheme: {
    // backgroundColor: "#00171a",
    // color: "white",
    // headerColor: "#193330",
    // navBarIconColor: "#2a5551",
    // sideBarBackgroundColor: "#193330bf",
    // activeButtonColor: "#2a5551",
    // nonActiveButtonColor: "#2F4858",
    // cardBackgroundColor: "#193330",
    // rankBackgroundColor: "#193330ad",
    // loaderBackgroundColor: "#121c20",
    backgroundColor: "#121c20",
    color: "white",
    lightTextColor: "#ffffff80",
    headerColor: "#1b2a30",
    navBarIconColor: "#4d5450",
    sideBarBackgroundColor: "#1b2a30bf",
    activeButtonColor: "#2a5551",
    onHoverButtonColor: "",
    nonActiveButtonColor: "#1b2a30",
    cardBackgroundColor: "#1b2a30",
    rankBackgroundColor: "#1e2d3ecc",
    loaderBackgroundColor: "#121c20",
    menuBackgroundColor: "#121c20c7"
  },
  lightTheme: {
    backgroundColor: "#cce6e3",
    color: "black",
    lightTextColor: "#00000080",
    headerColor: "#87c4be",
    navBarIconColor: "#4c9a91",
    sideBarBackgroundColor: "#87c4be9e",
    cardBackgroundColor: "#87c4be",
    rankBackgroundColor: "#87c4bebd",
    loaderBackgroundColor: "#cce6e3ba",
    activeButtonColor: "#c6f7f1",
    onHoverButtonColor: "#cce6e3",
    nonActiveButtonColor: "#87c4be",
    menuBackgroundColor: "#cce6e3d9"
  }
};
export type ThemeType = typeof theme.darkTheme;

const App = () => {
  const localTheme = useMemo(() => JSON.parse(localStorage.getItem("theme") || "true"), []);

  const [isDarkTheme, setIsDarkTheme] = useState(localTheme);

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <ThemeProvider theme={isDarkTheme ? theme.darkTheme : theme.lightTheme}>
      <GlobalStyles />
      <HashRouter>
        <NavBar {...{ isDarkTheme, setIsDarkTheme }} />
        <SContainer>
          <Routing />
        </SContainer>
      </HashRouter>
      <Loader />
    </ThemeProvider>
  );
};

export default App;

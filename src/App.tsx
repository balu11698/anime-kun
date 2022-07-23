import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { SContainer } from "./App.styled";
import Loader from "./Components/Loader/Loader";
import NavBar from "./Components/NavBar/NavBar";
import AnimeDetails from "./Pages/AnimeDetails/AnimeDetails";
import Episodes from "./Pages/Episodes/Episodes";
import Home from "./Pages/Home/Home";
import AnimeVideos from "./Pages/Videos/AnimeVideos";

const App = () => {
  const GlobalStyles = createGlobalStyle`
  body{
    font-family:'Poppins', 'Times New Roman', Times, serif;
    background: #121c20;
    color: white;
  }`;
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <NavBar />
        <SContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="anime/:id"
              element={
                <>
                  <AnimeDetails />
                  <Outlet />
                </>
              }
            >
              <Route path="episodes" element={<Episodes />} />
              <Route path="videos" element={<AnimeVideos />} />
            </Route>
          </Routes>
        </SContainer>
      </BrowserRouter>
      <Loader />
    </>
  );
};

export default App;

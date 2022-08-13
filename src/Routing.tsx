import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { config, useTransition } from "react-spring";
import { SRoutes } from "./App.styled";
import AnimeCharacters from "./Pages/AnimeCharacters/AnimeCharacters";
import AnimeDetails from "./Pages/AnimeDetails/AnimeDetails";
import Episodes from "./Pages/AnimeEpisodes/AnimeEpisodes";
import AnimeGenre from "./Pages/AnimeGenre/AnimeGenre";
import AnimePromos from "./Pages/AnimePromos/AnimePromos";
import Home from "./Pages/Home/Home";
import Overview from "./Pages/Overview/Overview";
import SeasonAnime from "./Pages/SeasonAnime/SeasonAnime";
import TopAnime from "./Pages/TopAnime/TopAnime";
import TopManga from "./Pages/TopManga/TopManga";
import AnimeVideos from "./Pages/Videos/AnimeVideos";

const Routing = () => {
  const location = useLocation();
  const transition = useTransition(location.pathname, {
    enter: { opacity: 1, delay: 1000 },
    leave: { opacity: 0, delay: 0 },
    config: { ...config.molasses, duration: 500 },
    exitBeforeEnter: true
  });
  return transition((styles, item) => (
    <SRoutes style={styles}>
      <Routes location={item}>
        <Route path="/" element={<Home />} />
        <Route
          path="anime/:id"
          element={
            <>
              <AnimeDetails />
              <Outlet />
            </>
          }>
          <Route path="overview" element={<Overview />} />
          <Route path="episodes" element={<Episodes />} />
          <Route path="videos" element={<AnimeVideos />} />
          <Route path="characters" element={<AnimeCharacters />} />
        </Route>
        <Route path="top-anime" element={<TopAnime />} />
        <Route path="season-anime" element={<SeasonAnime />} />
        <Route path="anime-genre" element={<AnimeGenre />} />
        <Route path="recent-promos" element={<AnimePromos />} />
        <Route path="top-manga" element={<TopManga />} />
      </Routes>
    </SRoutes>
  ));
};

export default Routing;

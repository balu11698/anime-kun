import { Outlet, Route, Routes } from "react-router-dom";
import AnimeDetails from "./Pages/AnimeDetails/AnimeDetails";
import Episodes from "./Pages/Episodes/Episodes";
import Home from "./Pages/Home/Home";
import Overview from "./Pages/Overview/Overview";
import TopAnime from "./Pages/TopAnime/TopAnime";
import TopManga from "./Pages/TopManga/TopManga";
import AnimeVideos from "./Pages/Videos/AnimeVideos";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="anime/:id/*"
        element={
          <>
            <AnimeDetails />
            <Outlet />
          </>
        }>
        <Route path="overview" element={<Overview />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="videos" element={<AnimeVideos />} />
      </Route>
      <Route path="top-anime" element={<TopAnime />} />
      <Route path="top-manga" element={<TopManga />} />
    </Routes>
  );
};

export default Routing;

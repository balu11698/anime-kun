import { useEffect, useState } from "react";
import { config, useTrail } from "react-spring";

import { useAppDispatch, useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { getSeasonalAnimeNow } from "../../Data/Slice/seasonalAnime";
import { getTopAnimeAiring } from "../../Data/Slice/topAnime.slice";
import {
  SHomeWrapper,
  SSeasonAnimeWrapper,
  STopAnimeHeader,
  STopAnimeWrapper
} from "./Home.styled";
import SeasonalAnimeHome from "./SeasonalAnimeHome/SeasonalAnimeHome";
import TopAnimeHome from "./TopAnimeHome/TopAnimeHome";

const Home = () => {
  const topAiringAnime = useAppSelector((state) => state.topAnime.topAnimeAiring.details);
  const [seasonAnimePage, setSeasonAnimePage] = useState(1);
  const seasonalAnimeData = useAppSelector((state) => state.seasonAnime.now[seasonAnimePage]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (topAiringAnime.data.length === 0) dispatch(getTopAnimeAiring());
    if (!seasonalAnimeData) {
      dispatch(getSeasonalAnimeNow(seasonAnimePage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seasonAnimePage]);

  const trailTopAnime = useTrail(topAiringAnime?.data?.slice(0, 10).length, {
    config: { ...config.stiff },
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  return (
    <SHomeWrapper>
      <SSeasonAnimeWrapper>
        <SeasonalAnimeHome {...{ seasonAnimePage, setSeasonAnimePage, seasonalAnimeData }} />
      </SSeasonAnimeWrapper>
      <STopAnimeWrapper>
        <STopAnimeHeader>Top Airing Anime</STopAnimeHeader>
        {trailTopAnime.map((props, index) => (
          <TopAnimeHome
            key={topAiringAnime?.data?.[index]?.mal_id}
            {...{
              details: topAiringAnime?.data?.[index],
              index,
              style: props
            }}
          />
        ))}
      </STopAnimeWrapper>
    </SHomeWrapper>
  );
};
export default Home;

import { useEffect, useState } from "react";
import { config, useTrail } from "react-spring";

import {
  useAppDispatch,
  useAppSelector,
} from "../../Data/ReduxHooks/reduxHooks";
import { getSeasonalAnimeNow } from "../../Data/Slice/seasonalAnime";
import { getTopAnimeAiring } from "../../Data/Slice/topAnime.slice";
import {
  SHomeWrapper,
  SSeasonAnime,
  SSeasonAnimeHeader,
  SSeasonAnimeWrapper,
  SSeasonPagination,
  SSeasonPaginationWrapper,
  STopAnimeWrapper,
} from "./Home.styled";
import SeasonalAnimeHome from "./SeasonalAnime/SeasonalAnimeHome";
import TopAnimeHome from "./TopAnime/TopAnimeHome";

const Home = () => {
  const topAiringAnime = useAppSelector(
    (state) => state.topAnime.topAnimeAiring.details
  );
  const [seasonAnimePage, setSeasonAnimePage] = useState(1);
  const seasonalAnimeData = useAppSelector(
    (state) => state.seasonAnime.now[seasonAnimePage]
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (topAiringAnime.data.length === 0) dispatch(getTopAnimeAiring());
    if (!seasonalAnimeData) {
      dispatch(getSeasonalAnimeNow(seasonAnimePage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seasonAnimePage]);

  const trailTopAnime = useTrail(topAiringAnime?.data?.slice(0, 10).length, {
    config: { ...config.molasses, duration: 70 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const trailSeasonAnime = useTrail(seasonalAnimeData?.data?.length || 0, {
    config: { ...config.molasses, duration: 70 },
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
  });

  const nextSeasonalAnime = (type: string) => {
    if (type === "forward") {
      if (seasonalAnimeData?.pagination?.has_next_page)
        setSeasonAnimePage(seasonAnimePage + 1);
    } else if (type === "back") {
      if (seasonAnimePage !== 1) setSeasonAnimePage(seasonAnimePage - 1);
    }
  };

  return (
    <SHomeWrapper>
      <SSeasonAnimeWrapper>
        <>
          <SSeasonAnimeHeader>
            <div>Seasonal Anime</div>
            <SSeasonPaginationWrapper>
              <SSeasonPagination
                isPage={seasonAnimePage === 1 ? 0 : 1}
                onClick={() => nextSeasonalAnime("back")}
              >
                {"<"}
              </SSeasonPagination>
              <SSeasonPagination
                isPage={seasonalAnimeData?.pagination?.has_next_page ? 1 : 0}
                onClick={() => nextSeasonalAnime("forward")}
              >
                {">"}
              </SSeasonPagination>
            </SSeasonPaginationWrapper>
          </SSeasonAnimeHeader>
          <SSeasonAnime>
            {trailSeasonAnime.map((props, index) => (
              <SeasonalAnimeHome
                key={seasonalAnimeData?.data?.[index]?.mal_id}
                {...{
                  details: seasonalAnimeData.data?.[index],
                  style: props,
                }}
              />
            ))}
          </SSeasonAnime>
        </>
      </SSeasonAnimeWrapper>
      <STopAnimeWrapper>
        <div>Top Airing Anime</div>
        {trailTopAnime.map((props, index) => (
          <TopAnimeHome
            key={topAiringAnime?.data?.[index]?.mal_id}
            {...{
              details: topAiringAnime?.data?.[index],
              index,
              style: props,
            }}
          />
        ))}
      </STopAnimeWrapper>
    </SHomeWrapper>
  );
};
export default Home;

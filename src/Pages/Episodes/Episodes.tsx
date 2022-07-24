import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { config, useTrail } from "react-spring";
import rating from "../../assets/images/rating.svg";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Data/ReduxHooks/reduxHooks";
import { getAnimeEpisodes } from "../../Data/Slice/animeEpisodes.slice";
import {
  SEpisodeDetails,
  SEpisodeDetailsWrapper,
  SEpisodeFiller,
  SEpisodeNumber,
  SEpisodeRating,
  SEpisodesCard,
  SEpisodesWrapper,
} from "./Episodes.styled";

const Episodes = () => {
  const animeEpisodes = useAppSelector((state) => state.episodes.details);
  const dispatch = useAppDispatch();
  const { id: mal_id } = useParams();
  useEffect(() => {
    dispatch(getAnimeEpisodes(mal_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const trailSeasonAnime = useTrail(animeEpisodes?.data?.length || 0, {
    config: {
      ...config.molasses,
      duration: animeEpisodes?.data?.length > 50 ? 30 : 60,
    },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  console.log(animeEpisodes);
  return (
    <SEpisodesWrapper>
      {trailSeasonAnime.map((styles, index) => (
        <SEpisodesCard
          key={animeEpisodes?.data?.[index]?.mal_id}
          style={styles}
        >
          <SEpisodeNumber>
            {animeEpisodes?.data?.[index]?.mal_id}
          </SEpisodeNumber>
          <SEpisodeDetailsWrapper>
            <div>{animeEpisodes?.data?.[index]?.title}</div>
            <SEpisodeDetails>
              <SEpisodeRating src={rating} />
              <div>{animeEpisodes?.data?.[index]?.score}</div>
              <div>
                Filler -
                <SEpisodeFiller
                  isFiller={animeEpisodes?.data?.[index]?.filler ? 1 : 0}
                >
                  {animeEpisodes?.data?.[index]?.filler ? "Yes" : "No"}
                </SEpisodeFiller>
              </div>
            </SEpisodeDetails>
          </SEpisodeDetailsWrapper>
        </SEpisodesCard>
      ))}
    </SEpisodesWrapper>
  );
};

export default Episodes;

import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  console.log(animeEpisodes);
  return (
    <SEpisodesWrapper>
      {animeEpisodes?.data.map((episode) => (
        <SEpisodesCard>
          <SEpisodeNumber>{episode?.mal_id}</SEpisodeNumber>
          <SEpisodeDetailsWrapper>
            <div>{episode?.title}</div>
            <SEpisodeDetails>
              <SEpisodeRating src={rating} />
              <div>{episode?.score}</div>
              <div>
                Filler -
                <SEpisodeFiller isFiller={episode?.filler ? 1 : 0}>
                  {episode?.filler ? "Yes" : "No"}
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

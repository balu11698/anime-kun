import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rating from "../../assets/images/rating.svg";
import score from "../../assets/images/score.svg";
import { ApiStatus, Title } from "../../Constants/Enum";
import { ITopAnimeData } from "../../Constants/Interface/topAnime";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Data/ReduxHooks/reduxHooks";
import { getTopAnimeAiring } from "../../Data/Slice/topAnime.slice";
import {
  SHomeWrapper,
  SRatingImage,
  STopAnimeCard,
  STopAnimeDetails,
  STopAnimeDetailsWrapper,
  STopAnimeImage,
  STopAnimeNumber,
  STopAnimeScore,
  STopAnimeTitle,
  STopAnimeWrapper,
} from "./Home.styled";

const Home = () => {
  const topAiringAnime = useAppSelector(
    (state) => state.topAnime.topAnimeAiring
  );
  const language = useAppSelector((state) => state.language.name);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    topAiringAnime.status !== ApiStatus.Success &&
      dispatch(getTopAnimeAiring());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToAnimeDetails = (anime: ITopAnimeData) => {
    navigate(`/anime/${anime?.mal_id}`);
  };
  console.log(topAiringAnime);

  return (
    <SHomeWrapper>
      {topAiringAnime.status === ApiStatus.Success && (
        <STopAnimeWrapper>
          <div>Top Airing Anime</div>
          {topAiringAnime.status === ApiStatus.Success &&
            topAiringAnime?.details?.data?.slice(0, 10).map((anime, index) => (
              <STopAnimeCard
                key={anime?.mal_id}
                onClick={() => goToAnimeDetails(anime)}
              >
                <STopAnimeNumber rankNumber={index + 1}>
                  {index + 1}
                </STopAnimeNumber>
                <STopAnimeImage src={anime?.images?.jpg?.image_url} />
                <STopAnimeDetailsWrapper>
                  <STopAnimeTitle>
                    {anime?.[Title[language]] || anime?.[Title.Japan]}
                  </STopAnimeTitle>
                  <STopAnimeDetails>
                    <STopAnimeScore>
                      <SRatingImage src={rating} />
                      <div>{anime?.score}</div>
                    </STopAnimeScore>
                    <STopAnimeScore>
                      <SRatingImage src={score} />
                      <div>{anime?.scored_by}</div>
                    </STopAnimeScore>
                  </STopAnimeDetails>
                </STopAnimeDetailsWrapper>
              </STopAnimeCard>
            ))}
        </STopAnimeWrapper>
      )}
    </SHomeWrapper>
  );
};
export default Home;

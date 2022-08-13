import { useMemo } from "react";
import { useParams } from "react-router-dom";
import rating from "../../assets/images/rating.svg";
import score from "../../assets/images/score.svg";
import { SAnimeRank, SScore } from "../../Components/AnimeData/AnimeData.styles";
import { ApiStatus } from "../../Constants/Enum";
import { IAnimeData } from "../../Constants/Interface";
import { useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { SRatingImage } from "../Home/Home.styled";
import {
  SAnimeCard,
  SAnimeDetailsOverviewWrapper,
  SAnimeOverview,
  SAnimeOverviewDetails,
  SAnimeOverviewImage,
  SAnimeOverviewImageWrapper,
  SAnimeOverviewLeft,
  SAnimeOverviewWrapper,
  SAnimeRating,
  SDetailsLeft,
  SDetailsRight,
  SOverviewVideo
} from "./Overview.styled";

import { useStarAnimation } from "../../utils/animation";

const Overview = () => {
  const { id: mal_id } = useParams();
  const animeData: IAnimeData = useAppSelector(
    (state) => state.anime.details[mal_id as string]?.data
  );
  const animeDataStatus = useAppSelector((state) => state.anime.status);
  const starAnimation = useStarAnimation();

  const overviewDetails: Record<string, number | string> = useMemo(
    () => ({
      Rating: animeData?.rating,
      Genre: animeData?.genres.map((genre) => genre.name).join(", "),
      Year: animeData?.year,
      Season: animeData?.season,
      Status: animeData?.status,
      Source: animeData?.source
    }),
    [animeData]
  );

  return (
    <div>
      {animeDataStatus === ApiStatus.Success && (
        <SAnimeOverviewWrapper>
          <SDetailsLeft>
            <SAnimeOverviewImageWrapper>
              <SAnimeOverview>
                <SAnimeOverviewImage src={animeData?.images?.jpg?.large_image_url} />
                {animeData?.rank && <SAnimeRank>#{animeData?.rank}</SAnimeRank>}
                {animeData?.score && animeData?.scored_by && (
                  <SAnimeRating>
                    <SScore>
                      <SRatingImage src={rating} style={starAnimation} />
                      <div>Score {animeData?.score}</div>
                    </SScore>
                    <SScore>
                      <SRatingImage src={score} />
                      <div>Votes {animeData?.scored_by?.toLocaleString()}</div>
                    </SScore>
                  </SAnimeRating>
                )}
              </SAnimeOverview>
            </SAnimeOverviewImageWrapper>
            <SAnimeCard>
              <SAnimeDetailsOverviewWrapper>
                {Object?.keys(overviewDetails)?.map(
                  (overview) =>
                    overviewDetails?.[overview] && (
                      <SAnimeOverviewDetails key={overview}>
                        <SAnimeOverviewLeft>{overview} </SAnimeOverviewLeft>{" "}
                        <div>{overviewDetails?.[overview]}</div>
                      </SAnimeOverviewDetails>
                    )
                )}
              </SAnimeDetailsOverviewWrapper>
            </SAnimeCard>
          </SDetailsLeft>
          <SDetailsRight>
            <SAnimeCard>{animeData?.synopsis}</SAnimeCard>
            {(animeData?.theme?.openings.length !== 0 ||
              animeData?.theme?.endings.length !== 0) && (
              <SAnimeCard>
                Openings :
                {animeData?.theme?.openings.map((opening) => (
                  <div key={opening}>{opening}</div>
                ))}
                Endings :
                {animeData?.theme?.endings.map((ending) => (
                  <div key={ending}>{ending}</div>
                ))}
              </SAnimeCard>
            )}
            {animeData?.trailer?.youtube_id && (
              <SOverviewVideo>
                <div>Trailer</div>
                <iframe
                  style={{}}
                  src={`https://www.youtube.com/embed/${animeData?.trailer?.youtube_id}`}
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </SOverviewVideo>
            )}
          </SDetailsRight>
        </SAnimeOverviewWrapper>
      )}
    </div>
  );
};

export default Overview;

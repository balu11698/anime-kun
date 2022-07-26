import { useParams } from "react-router-dom";
import rating from "../../assets/images/rating.svg";
import score from "../../assets/images/score.svg";
import { SScore } from "../../Components/AnimeData/AnimeData.styles";
import { IAnimeData } from "../../Constants/Interface";
import { useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { SRatingImage } from "../Home/Home.styled";
import {
  SAnimeCard,
  SAnimeOverviewImage,
  SAnimeOverviewImageWrapper,
  SAnimeOverviewWrapper,
  SAnimeRating,
  SDetailsLeft
} from "./Overview.styled";

const Overview = () => {
  const { id: mal_id } = useParams();
  const animeData: IAnimeData = useAppSelector(
    (state) => state.anime.details[mal_id as string]?.data
  );
  console.log(animeData);
  return (
    <div>
      <SAnimeOverviewWrapper>
        <SDetailsLeft>
          <SAnimeOverviewImageWrapper>
            <SAnimeOverviewImage src={animeData?.images?.jpg?.large_image_url} />
          </SAnimeOverviewImageWrapper>
          <SAnimeCard>
            <SAnimeRating>
              <SScore>
                <SRatingImage src={rating} />
                <div>
                  Score -{">"} {animeData?.score}
                </div>
              </SScore>
              <SScore>
                <SRatingImage src={score} />
                <div>
                  Votes -{">"} {animeData?.score}
                </div>
              </SScore>
            </SAnimeRating>
          </SAnimeCard>
          <SAnimeCard>
            <div>
              Rating -{">"} {animeData?.rating}
            </div>
          </SAnimeCard>
        </SDetailsLeft>
        <SAnimeCard>{animeData?.synopsis}</SAnimeCard>
      </SAnimeOverviewWrapper>
    </div>
  );
};

export default Overview;

import { useNavigate } from "react-router-dom";
import { config, SpringValue, useTransition } from "react-spring";
import rating from "../../../assets/images/rating.svg";
import score from "../../../assets/images/score.svg";
import { Title } from "../../../Constants/Enum";
import { ITopAnimeData } from "../../../Constants/Interface/topAnime";
import { useAppSelector } from "../../../Data/ReduxHooks/reduxHooks";
import {
  SRatingImage,
  STopAnimeCard,
  STopAnimeDetails,
  STopAnimeDetailsWrapper,
  STopAnimeImage,
  STopAnimeNumber,
  STopAnimeScore,
  STopAnimeTitle,
} from "../Home.styled";
interface TopAnimeHomeProps {
  details: ITopAnimeData;
  index: number;
  style: { opacity: SpringValue<number> };
}

const TopAnimeHome = ({ details, index, style }: TopAnimeHomeProps) => {
  const language = useAppSelector((state) => state.language.name);
  const navigate = useNavigate();

  const transition = useTransition(details?.[Title[language]], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: config.molasses,
  });

  const goToAnimeDetails = (mal_id: number) => {
    navigate(`/anime/${mal_id}`);
  };
  return (
    <STopAnimeCard
      key={details.mal_id}
      onClick={() => goToAnimeDetails(details?.mal_id)}
      style={style}
    >
      <STopAnimeNumber rankNumber={index + 1}>{index + 1}</STopAnimeNumber>
      <STopAnimeImage src={details.images?.jpg?.image_url} />
      <STopAnimeDetailsWrapper>
        {transition((styles) => (
          <STopAnimeTitle style={styles}>
            {details?.[Title[language]] || details?.[Title.Japan]}
          </STopAnimeTitle>
        ))}
        <STopAnimeDetails>
          <STopAnimeScore>
            <SRatingImage src={rating} />
            <div>{details.score}</div>
          </STopAnimeScore>
          <STopAnimeScore>
            <SRatingImage src={score} />
            <div>{details.scored_by}</div>
          </STopAnimeScore>
        </STopAnimeDetails>
      </STopAnimeDetailsWrapper>
    </STopAnimeCard>
  );
};

export default TopAnimeHome;

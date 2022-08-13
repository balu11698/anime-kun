import { NavLink, useNavigate } from "react-router-dom";
import { config, SpringValue, useSpring, useTransition } from "react-spring";
import rating from "../../../assets/images/rating.svg";
import score from "../../../assets/images/score.svg";
import { Title } from "../../../Constants/Enum";
import { IAnimeData } from "../../../Constants/Interface";
import { useAppSelector } from "../../../Data/ReduxHooks/reduxHooks";
import { useStarAnimation } from "../../../utils/animation";
import {
  SRatingImage,
  STopAnimeCard,
  STopAnimeDetails,
  STopAnimeDetailsWrapper,
  STopAnimeImage,
  STopAnimeNavLink,
  STopAnimeNumber,
  STopAnimeScore,
  STopAnimeTitle
} from "../Home.styled";
interface TopAnimeHomeProps {
  details: IAnimeData;
  index: number;
  style: { opacity: SpringValue<number> };
}

const TopAnimeHome = ({ details, index, style }: TopAnimeHomeProps) => {
  const language = useAppSelector((state) => state.language.name);
  const navigate = useNavigate();
  const starAnimation = useStarAnimation();
  const transition = useTransition(details?.[Title[language]], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: config.molasses
  });

  return (
    <STopAnimeNavLink to={`/anime/${details?.mal_id}/overview`}>
      <STopAnimeCard key={details?.mal_id} style={style}>
        <STopAnimeNumber rankNumber={index + 1}>{index + 1}</STopAnimeNumber>
        <STopAnimeImage src={details?.images?.jpg?.image_url} />
        <STopAnimeDetailsWrapper>
          {transition((styles) => (
            <STopAnimeTitle style={styles}>
              {details?.[Title[language]] || details?.[Title.Japanese]}
            </STopAnimeTitle>
          ))}
          <STopAnimeDetails>
            <STopAnimeScore>
              <SRatingImage src={rating} style={starAnimation} />
              <div>{details?.score}</div>
            </STopAnimeScore>
            <STopAnimeScore>
              <SRatingImage src={score} />
              <div>{details?.scored_by?.toLocaleString()}</div>
            </STopAnimeScore>
          </STopAnimeDetails>
        </STopAnimeDetailsWrapper>
      </STopAnimeCard>
    </STopAnimeNavLink>
  );
};

export default TopAnimeHome;

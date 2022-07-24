import { useNavigate } from "react-router-dom";
import { config, SpringValue, useTransition } from "react-spring";
import { Title } from "../../../Constants/Enum";
import { ISeasonalAnimeData } from "../../../Constants/Interface/seasonalAnime";
import { useAppSelector } from "../../../Data/ReduxHooks/reduxHooks";
import {
  SSeasonAnimeCard,
  SSeasonAnimeImage,
  SSeasonAnimeTitle,
} from "../Home.styled";

export interface SeasonalAnimeHomeProps {
  details: ISeasonalAnimeData;
  style: { opacity: SpringValue<number> };
}

const SeasonalAnimeHome = ({ details, style }: SeasonalAnimeHomeProps) => {
  const language = useAppSelector((state) => state.language.name);
  const navigate = useNavigate();
  const transition = useTransition(language, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: config.molasses,
  });

  const goToAnimeDetails = (mal_id: number) => {
    navigate(`/anime/${mal_id}`);
  };
  return (
    <SSeasonAnimeCard
      key={details.mal_id}
      style={style}
      onClick={() => goToAnimeDetails(details?.mal_id)}
    >
      <SSeasonAnimeImage src={details.images?.jpg?.image_url} />
      {transition((styles) => (
        <SSeasonAnimeTitle style={styles}>
          {details?.[Title?.[language]] || details?.[Title.Japan]}
        </SSeasonAnimeTitle>
      ))}
    </SSeasonAnimeCard>
  );
};

export default SeasonalAnimeHome;

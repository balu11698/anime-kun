import { useNavigate } from "react-router-dom";
import { config, useTrail, useTransition } from "react-spring";
import rating from "../../assets/images/rating.svg";
import score from "../../assets/images/score.svg";
import { Title, WeebType } from "../../Constants/Enum";

import { IAnimeData } from "../../Constants/Interface";

import { useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { SRatingImage } from "../../Pages/Home/Home.styled";
import {
  SAnimeCard,
  SAnimeDetails,
  SAnimeImage,
  SAnimeRank,
  SAnimeRating,
  SAnimeTitle,
  SAnimeWrapper,
  SScore
} from "./AnimeData.styles";

interface AnimeDataProps {
  data: IAnimeData[];
  type: WeebType;
}

const AnimeData = ({ data, type }: AnimeDataProps) => {
  const language = useAppSelector((state) => state.language.name);
  const navigate = useNavigate();

  const trail = useTrail(data?.length || 0, {
    config: { ...config.stiff, duration: 100 },
    from: { opacity: 0 },
    to: { opacity: 1 }
  });
  const transition = useTransition(language, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: config.molasses
  });

  const goToAnimeDetails = (mal_id: number) =>
    type === WeebType.Anime
      ? navigate(`/anime/${mal_id}/overview`)
      : navigate(`/manga/${mal_id}/overview`);

  return (
    <SAnimeWrapper>
      {trail.map((props, index) => (
        <SAnimeCard
          key={data?.[index]?.mal_id}
          style={props}
          onClick={() => goToAnimeDetails(data?.[index]?.mal_id)}>
          <SAnimeDetails>
            <SAnimeImage src={data?.[index]?.images?.jpg?.image_url} loading="lazy" />
            <SAnimeRank>#{data?.[index]?.rank}</SAnimeRank>
            <SAnimeRating>
              <SScore>
                <SRatingImage src={rating} />
                <div>{data?.[index]?.score}</div>
              </SScore>
              <SScore>
                <SRatingImage src={score} />
                <div>{data?.[index]?.scored_by?.toLocaleString()}</div>
              </SScore>
            </SAnimeRating>
          </SAnimeDetails>
          {transition((styles) => (
            <SAnimeTitle style={styles}>
              {data?.[index]?.[Title?.[language]] || data?.[index]?.[Title.Japan]}
            </SAnimeTitle>
          ))}
        </SAnimeCard>
      ))}
    </SAnimeWrapper>
  );
};

export default AnimeData;

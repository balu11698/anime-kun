import { useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { config, useTrail, useTransition } from "react-spring";

import { Title, WeebType } from "../../Constants/Enum";

import { IAnimeData } from "../../Constants/Interface";

import { useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { SRatingImage } from "../../Pages/Home/Home.styled";
import {
  useStarAnimation,
  useTrailAnimation,
  useTransistionAnimation
} from "../../utils/animation";
import rating from "../../assets/images/rating.svg";
import score from "../../assets/images/score.svg";
import {
  SAnimeCard,
  SAnimeDetails,
  SAnimeImage,
  SAnimeRank,
  SAnimeRating,
  SAnimeTitle,
  SAnimeWrapper,
  SScore,
  SScoreDetails
} from "./AnimeData.styles";

interface AnimeDataProps {
  data: IAnimeData[];
  type: WeebType;
  animationReset: boolean;
}

const AnimeData = ({ data, type, animationReset }: AnimeDataProps) => {
  const language = useAppSelector((state) => state.language.name);

  const starAnimation = useStarAnimation();
  const trailAnimation = useTrailAnimation(data);
  const transitionAnimation = useTransistionAnimation(language);

  return (
    <SAnimeWrapper>
      {trailAnimation.map((props, index) => (
        <SAnimeCard key={data?.[index]?.mal_id} style={props}>
          <SAnimeDetails>
            <NavLink
              to={
                type === WeebType.Anime
                  ? `/anime/${data?.[index]?.mal_id}/overview`
                  : `/manga/${data?.[index]?.mal_id}/overview`
              }>
              <SAnimeImage
                src={
                  data?.[index]?.images?.jpg?.large_image_url ||
                  data?.[index]?.images?.jpg?.image_url
                }
                loading="lazy"
                alt={rating}
              />
            </NavLink>
            {data?.[index]?.rank && <SAnimeRank>#{data?.[index]?.rank}</SAnimeRank>}
            {(data?.[index]?.score || data?.[index]?.scored_by) && (
              <SAnimeRating>
                <SScore>
                  <SRatingImage src={rating} style={starAnimation} />
                  <SScoreDetails>{data?.[index]?.score}</SScoreDetails>
                </SScore>
                <SScore>
                  <SRatingImage src={score} />
                  <div>{data?.[index]?.scored_by?.toLocaleString()}</div>
                </SScore>
              </SAnimeRating>
            )}
          </SAnimeDetails>
          {transitionAnimation((styles) => (
            <SAnimeTitle
              style={styles}
              title={data?.[index]?.[Title?.[language]] || data?.[index]?.[Title.Japanese]}>
              {data?.[index]?.[Title?.[language]] || data?.[index]?.[Title.Japanese]}
            </SAnimeTitle>
          ))}
        </SAnimeCard>
      ))}
    </SAnimeWrapper>
  );
};

export default AnimeData;

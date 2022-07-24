import { useNavigate } from "react-router-dom";
import { config, useTrail, useTransition } from "react-spring";
import { Title } from "../../Constants/Enum";
import { IAnimeData } from "../../Constants/Interface";
import { useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import {
  SAnimeCard,
  SAnimeImage,
  SAnimeTitle,
  SAnimeWrapper,
} from "../../Pages/Page.styles";

interface AnimeDataProps {
  data: IAnimeData[];
}

const AnimeData = ({ data }: AnimeDataProps) => {
  const language = useAppSelector((state) => state.language.name);
  const navigate = useNavigate();

  const trail = useTrail(data?.length || 0, {
    config: { ...config.stiff, duration: 80 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  const transition = useTransition(language, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: config.molasses,
  });

  const goToAnimeDetails = (mal_id: number) => {
    navigate(`/anime/${mal_id}`);
  };

  return (
    <SAnimeWrapper>
      {trail.map((props, index) => (
        <SAnimeCard
          key={data?.[index].mal_id}
          style={props}
          onClick={() => goToAnimeDetails(data?.[index]?.mal_id)}
        >
          <SAnimeImage src={data?.[index].images?.jpg?.image_url} />
          {transition((styles) => (
            <SAnimeTitle style={styles}>
              {data?.[index]?.[Title?.[language]] ||
                data?.[index]?.[Title.Japan]}
            </SAnimeTitle>
          ))}
        </SAnimeCard>
      ))}
    </SAnimeWrapper>
  );
};

export default AnimeData;

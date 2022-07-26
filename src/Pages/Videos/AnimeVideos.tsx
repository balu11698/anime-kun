import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IAnimeVideos } from "../../Constants/Interface/animeVideos";
import { useAppDispatch, useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { getAnimeVideos } from "../../Data/Slice/animeVideos.slice";
import { SOverviewVideo } from "../Overview/Overview.styled";
import { SAnimeVideosWrapper } from "./AnimeVideos.styled";

const AnimeVideos = () => {
  const { id: mal_id } = useParams();
  const animeEpisodes: IAnimeVideos = useAppSelector(
    (state) => state.animeVideos.details[mal_id as string]
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    animeEpisodes === undefined && dispatch(getAnimeVideos(mal_id));
  }, [mal_id]);

  return (
    <SAnimeVideosWrapper>
      {animeEpisodes?.promo?.map((video) => (
        <SOverviewVideo key={video?.trailer?.youtube_id}>
          <div>{video.title}</div>
          <iframe
            style={{ borderRadius: "8px" }}
            src={`https://www.youtube.com/embed/${video.trailer?.youtube_id}`}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </SOverviewVideo>
      ))}
    </SAnimeVideosWrapper>
  );
};

export default AnimeVideos;

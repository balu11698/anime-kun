import { copyFile } from "fs";
import { useEffect } from "react";
import { IAnimePromo } from "../../Constants/Interface/animePromo";
import { useAppDispatch, useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { getRecentPromos } from "../../Data/Slice/animePromos.slice";
import { SOverviewVideo } from "../Overview/Overview.styled";
import { SAnimeVideosWrapper } from "../Videos/AnimeVideos.styled";

const AnimePromos = () => {
  const animePromos: IAnimePromo[] = useAppSelector((state) => state.animePromos.details);

  const dispatch = useAppDispatch();

  useEffect(() => {
    animePromos.length === 0 && dispatch(getRecentPromos());
  }, []);

  console.log(animePromos);

  return (
    <SAnimeVideosWrapper>
      {animePromos?.map((video) => (
        <SOverviewVideo key={video?.trailer?.youtube_id}>
          <div>{video.entry.title}</div>
          <div>{video.title}</div>
          <iframe
            loading="lazy"
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

export default AnimePromos;

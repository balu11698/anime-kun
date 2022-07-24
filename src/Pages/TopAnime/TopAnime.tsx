import { useEffect } from "react";
import AnimeData from "../../Components/AnimeData/AnimeData";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Data/ReduxHooks/reduxHooks";
import { getTopAnime } from "../../Data/Slice/topAnime.slice";

const TopAnime = () => {
  const topAnimeData = useAppSelector(
    (state) => state.topAnime.topAnime?.details?.data
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    topAnimeData.length === 0 && dispatch(getTopAnime({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AnimeData data={topAnimeData} />;
};
export default TopAnime;

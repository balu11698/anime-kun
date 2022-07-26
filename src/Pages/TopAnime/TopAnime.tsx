import { useCallback, useEffect, useRef, useState } from "react";
import AnimeData from "../../Components/AnimeData/AnimeData";
import { WeebType } from "../../Constants/Enum";

import { ITopAnime } from "../../Constants/Interface/topAnime";
import useInfiniteScroll from "../../CustomHooks/useInfiniteScroll";
import { useAppDispatch, useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { getTopAnime } from "../../Data/Slice/topAnime.slice";

const TopAnime = () => {
  const topAnimeData: ITopAnime = useAppSelector((state) => state.topAnime.topAnime?.details);
  const topAnimeStatus = useAppSelector((state) => state.topAnime.topAnime.status);
  const [page] = useState(topAnimeData?.pagination?.current_page || 1);

  const ref = useRef(null);
  const { pageNumber } = useInfiniteScroll(ref, page, topAnimeStatus);

  const fetchTopAnime = useCallback(async () => {
    (topAnimeData.data.length === 0 || itemsCheck()) &&
      (await dispatch(getTopAnime({ page: pageNumber })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, topAnimeStatus]);

  const itemsCheck = () =>
    topAnimeData.data.length ===
      (topAnimeData.pagination.current_page - 1) * topAnimeData.pagination.items.per_page +
        topAnimeData.pagination.items.count &&
    pageNumber !== topAnimeData?.pagination?.current_page &&
    topAnimeData?.pagination?.has_next_page;

  useEffect(() => {
    fetchTopAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const dispatch = useAppDispatch();

  return (
    <>
      <AnimeData data={topAnimeData?.data} type={WeebType.Anime} />
      <div ref={ref}></div>
    </>
  );
};
export default TopAnime;

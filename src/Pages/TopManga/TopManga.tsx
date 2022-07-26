import { useCallback, useEffect, useRef, useState } from "react";
import AnimeData from "../../Components/AnimeData/AnimeData";
import { WeebType } from "../../Constants/Enum";

import { ITopAnime } from "../../Constants/Interface/topAnime";
import useInfiniteScroll from "../../CustomHooks/useInfiniteScroll";
import { useAppDispatch, useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { getTopManga } from "../../Data/Slice/topManga.slice";
const TopManga = () => {
  const topMangaData: ITopAnime = useAppSelector((state) => state.topManga.topManga?.details);
  const topAnimeStatus = useAppSelector((state) => state.topManga.topManga.status);
  const [page] = useState(topMangaData?.pagination?.current_page || 1);

  const ref = useRef(null);
  const { pageNumber } = useInfiniteScroll(ref, page, topAnimeStatus);

  const fetchTopManga = useCallback(async () => {
    (topMangaData.data.length === 0 || itemsCheck()) &&
      (await dispatch(getTopManga({ page: pageNumber })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, topAnimeStatus]);

  const itemsCheck = () =>
    topMangaData.data.length ===
      (topMangaData.pagination.current_page - 1) * topMangaData.pagination.items.per_page +
        topMangaData.pagination.items.count &&
    pageNumber !== topMangaData?.pagination?.current_page;

  useEffect(() => {
    fetchTopManga();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const dispatch = useAppDispatch();

  return (
    <>
      <AnimeData data={topMangaData?.data} type={WeebType.Manga} />
      <div ref={ref}></div>
    </>
  );
};

export default TopManga;

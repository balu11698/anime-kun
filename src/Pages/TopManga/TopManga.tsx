import { useCallback, useEffect, useState } from "react";
import AnimeData from "../../Components/AnimeData/AnimeData";
import CustomSelect from "../../Components/CustomSelect/CustomSelect";
import Pagination from "../../Components/Pagination/Pagination";
import { topMangaType } from "../../Constants/appConstants";
import { WeebType } from "../../Constants/Enum";
import { IAnimeData, IPagination } from "../../Constants/Interface";

import { useAppDispatch, useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { getTopManga } from "../../Data/Slice/topManga.slice";
import { scrollToTop } from "../../utils/window";
import {
  SAnimeHeaderSelect,
  SAnimeHeaderWrapper,
  SAnimeWrapper,
  STitleHeader
} from "../page.styled";
const TopManga = () => {
  const [page, setPage] = useState<number>(1);
  const [mangaType, setMangaType] = useState<string>("start");
  const topMangaData: IAnimeData[] = useAppSelector(
    (state) => state.topManga.topManga?.details?.[mangaType]?.[page]
  );
  const topMangaPagination: IPagination = useAppSelector(
    (state) => state.topManga.topManga?.details?.pagination
  );

  const dispatch = useAppDispatch();

  const fetchTopManga = useCallback(async () => {
    (topMangaData?.length === 0 || topMangaData?.length === undefined) &&
      (await dispatch(getTopManga({ page, type: mangaType })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, mangaType]);

  useEffect(() => {
    fetchTopManga();
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (page === 1 && mangaType !== "start") fetchTopManga();
    else setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mangaType]);

  return (
    <SAnimeWrapper>
      <SAnimeHeaderWrapper>
        <STitleHeader>Top Manga</STitleHeader>
        <SAnimeHeaderSelect>
          <CustomSelect
            {...{
              options: topMangaType,
              labelName: "label",
              valueName: "value",
              setValue: setMangaType,
              isClearable: true,
              value: "start"
            }}
          />
        </SAnimeHeaderSelect>
      </SAnimeHeaderWrapper>
      <AnimeData {...{ data: topMangaData, type: WeebType.Manga, animationReset: true }} />
      {topMangaPagination?.last_visible_page && (
        <Pagination
          {...{
            total: topMangaPagination?.items?.total,
            perPage: topMangaPagination?.items?.per_page,
            page,
            setPage
          }}
        />
      )}
    </SAnimeWrapper>
  );
};

export default TopManga;

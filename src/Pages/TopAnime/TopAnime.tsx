import { useCallback, useEffect, useState } from "react";
import AnimeData from "../../Components/AnimeData/AnimeData";
import CustomSelect from "../../Components/CustomSelect/CustomSelect";

import { WeebType } from "../../Constants/Enum";
import { IAnimeData, IPagination } from "../../Constants/Interface";

import { useAppDispatch, useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { getTopAnime } from "../../Data/Slice/topAnime.slice";
import { scrollToTop } from "../../utils/window";
import {
  SAnimeHeaderSelect,
  SAnimeHeaderWrapper,
  SAnimeWrapper,
  STitleHeader
} from "../page.styled";
import { topAnimeFilter, topAnimeType } from "../../Constants/appConstants";
import Pagination from "../../Components/Pagination/Pagination";

const TopAnime = () => {
  const [page, setPage] = useState<number>(1);
  const [type, setType] = useState<string>("start");
  const [filter, setFilter] = useState<string>("start");
  const topAnimeData: IAnimeData[] = useAppSelector(
    (state) => state.topAnime.topAnime?.details?.[type]?.[filter]?.[page]
  );
  const topAnimePagination: IPagination = useAppSelector(
    (state) => state.topAnime.topAnime?.details?.pagination
  );

  const fetchTopAnime = useCallback(async () => {
    (topAnimeData?.length === 0 || topAnimeData?.length === undefined) &&
      (await dispatch(getTopAnime({ page, type, filter })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, type, filter]);

  useEffect(() => {
    fetchTopAnime();
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (page === 1 && (type !== "start" || filter !== "start")) fetchTopAnime();
    else setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, filter]);

  const dispatch = useAppDispatch();

  return (
    <SAnimeWrapper>
      <SAnimeHeaderWrapper>
        <STitleHeader>Top Anime</STitleHeader>
        <SAnimeHeaderSelect>
          <CustomSelect
            {...{
              options: topAnimeType,
              labelName: "label",
              valueName: "value",
              setValue: setType,
              isClearable: true,
              placeholder: "Type",
              value: "start"
            }}
          />
          <CustomSelect
            {...{
              options: topAnimeFilter,
              labelName: "label",
              valueName: "value",
              setValue: setFilter,
              isClearable: true,
              placeholder: "Filter",
              value: "start"
            }}
          />
        </SAnimeHeaderSelect>
      </SAnimeHeaderWrapper>
      <AnimeData {...{ data: topAnimeData, type: WeebType.Anime, animationReset: true }} />
      {topAnimePagination?.last_visible_page && (
        <Pagination
          {...{
            total: topAnimePagination?.items?.total,
            perPage: topAnimePagination?.items?.per_page,
            page,
            setPage
          }}
        />
      )}
    </SAnimeWrapper>
  );
};
export default TopAnime;

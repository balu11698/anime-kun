import { useCallback, useEffect, useState } from "react";
import AnimeData from "../../Components/AnimeData/AnimeData";
import CustomSelect from "../../Components/CustomSelect/CustomSelect";
import {
  SPagination,
  SPaginationIcons,
  SPaginationWrapper
} from "../../Components/Pagination/Pagination.styled";
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
import { paginationLocale } from "../../Constants/appConstants";

const TopAnime = () => {
  const [page, setPage] = useState<number>(1);
  const [animeType, setAnimeType] = useState<string>("start");
  const topAnimeData: IAnimeData[] = useAppSelector(
    (state) => state.topAnime.topAnime?.details?.[animeType]?.[page]
  );
  const topAnimePagination: IPagination = useAppSelector(
    (state) => state.topAnime.topAnime?.details?.pagination
  );

  const topAnimeType = [
    { value: "tv", label: "TV" },
    { value: "movie", label: "Movie" },
    { value: "ova", label: "OVA" },
    { value: "special", label: "Special" },
    { value: "ona", label: "ONA" },
    { value: "music", label: "Music" }
  ];

  const fetchTopAnime = useCallback(async () => {
    // if (topAnimeData?.length === 0 || topAnimeData?.length === undefined)
    (topAnimeData?.length === 0 || topAnimeData?.length === undefined) &&
      (await dispatch(getTopAnime({ page, type: animeType })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, animeType]);

  useEffect(() => {
    fetchTopAnime();
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (page === 1 && animeType !== "start") fetchTopAnime();
    else setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animeType]);

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
              setValue: setAnimeType,
              isClearable: true
            }}
          />
        </SAnimeHeaderSelect>
      </SAnimeHeaderWrapper>
      <AnimeData data={topAnimeData} type={WeebType.Anime} />
      {topAnimePagination?.last_visible_page && (
        <SPaginationWrapper>
          <SPagination
            total={topAnimePagination?.items?.total}
            pageSize={topAnimePagination?.items?.per_page}
            onChange={(data) => setPage(data)}
            prevIcon={<SPaginationIcons>{"<"}</SPaginationIcons>}
            nextIcon={<SPaginationIcons>{">"}</SPaginationIcons>}
            current={page}
            showQuickJumper={true}
            jumpPrevIcon={<SPaginationIcons>...</SPaginationIcons>}
            jumpNextIcon={<SPaginationIcons>...</SPaginationIcons>}
            locale={paginationLocale}
          />
          {/* <CustomSelect
            {...{
              options: Array.apply(1, Array(topAnimePagination?.last_visible_page)).map((_, x) => ({
                value: (x + 1).toString()
              })),
              labelName: "value",
              valueName: "value",
              defaultValue: { value: page.toString() },
              setValue: setPage,
              isClearable: false
            }}
          /> */}
        </SPaginationWrapper>
      )}
    </SAnimeWrapper>
  );
};
export default TopAnime;

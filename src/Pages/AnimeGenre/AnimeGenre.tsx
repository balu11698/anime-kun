import { useCallback, useEffect, useState } from "react";
import AnimeData from "../../Components/AnimeData/AnimeData";
import { SAnimeWrapper } from "../page.styled";
import CustomSelect from "../../Components/CustomSelect/CustomSelect";
import Pagination from "../../Components/Pagination/Pagination";
import { WeebType } from "../../Constants/Enum";
import { IAnimeData, IPagination } from "../../Constants/Interface";
import { IAnimeGenres } from "../../Constants/Interface/animeGenres";
import { useAppDispatch, useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { getAnimeGenres } from "../../Data/Slice/animeGenre.slice";
import { getAnimeGenreSearch } from "../../Data/Slice/animeSearch.slice";
import { scrollToTop } from "../../utils/window";

const AnimeGenre = () => {
  const animeGenres: IAnimeGenres[] = useAppSelector((state) => state.animeGenres?.details);
  const animeData: IAnimeData[] = useAppSelector((state) => state.animeSearch.details);
  const animeDataPagination: IPagination = useAppSelector((state) => state.animeSearch.pagination);
  console.log(animeDataPagination);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<any>("");

  const fetchAnimeData = useCallback(() => {
    dispatch(getAnimeGenreSearch({ genre, page }));
  }, [page]);

  useEffect(() => {
    dispatch(getAnimeGenres());
  }, []);
  useEffect(() => {
    fetchAnimeData();
    scrollToTop();
  }, [page]);

  useEffect(() => {
    if (page !== 1) setPage(1);
    else if (genre !== "") fetchAnimeData();
  }, [genre]);

  console.log(animeData);
  return (
    <SAnimeWrapper>
      <CustomSelect
        {...{
          options: animeGenres,
          labelName: "name",
          valueName: "mal_id",
          placeholder: "Genre",
          value: "",
          defaultValue: animeGenres?.slice(0, 1)[0],
          setValue: setGenre,
          isMulti: true,
          isClearable: true
        }}
      />
      <AnimeData {...{ data: animeData, type: WeebType.Anime, animationReset: true }} />
      {animeDataPagination?.last_visible_page && (
        <Pagination
          {...{
            total: animeDataPagination?.items?.total,
            perPage: animeDataPagination?.items?.per_page,
            page,
            setPage
          }}
        />
      )}
    </SAnimeWrapper>
  );
};

export default AnimeGenre;

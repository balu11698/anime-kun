import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Title } from "../../Constants/Enum";
import { IAnimeData } from "../../Constants/Interface";
import { useAppDispatch, useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { getAnimeDetails } from "../../Data/Slice/animeDetails.slice";
import { scrollToTop } from "../../utils/window";
import { SAnimeDetailsNavWrapper, SAnimeDetailTitle, SNavLink } from "./AnimeDetails.styled";

const AnimeDetails = () => {
  const { id: mal_id } = useParams();
  const language = useAppSelector((state) => state.language.name);
  const animeDetails: IAnimeData = useAppSelector(
    (state) => state.anime.details?.[mal_id as string]?.data
  );
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
    !animeDetails && dispatch(getAnimeDetails(mal_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mal_id, pathname]);

  const activeLink = (linkName: string) => {
    if (pathname === linkName) return 1;
    else return 0;
  };
  return (
    <div>
      <SAnimeDetailTitle>
        {animeDetails?.[Title[language]] || animeDetails?.[Title.Japanese]}
      </SAnimeDetailTitle>
      <SAnimeDetailsNavWrapper>
        <SNavLink to="overview" active={activeLink(`/anime/${mal_id}/overview`)}>
          Overview
        </SNavLink>
        <SNavLink to="episodes" active={activeLink(`/anime/${mal_id}/episodes`)}>
          Episodes
        </SNavLink>
        <SNavLink to="videos" active={activeLink(`/anime/${mal_id}/videos`)}>
          Videos
        </SNavLink>
        <SNavLink to="characters" active={activeLink(`/anime/${mal_id}/characters`)}>
          Characters
        </SNavLink>
      </SAnimeDetailsNavWrapper>
    </div>
  );
};

export default AnimeDetails;

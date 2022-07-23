import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ApiStatus, Title } from "../../Constants/Enum";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Data/ReduxHooks/reduxHooks";
import { getAnimeDetails } from "../../Data/Slice/animeDetails.slice";
import { SAnimeDetailsNavWrapper, SNavLink } from "./AnimeDetails.styled";

const AnimeDetails = () => {
  const language = useAppSelector((state) => state.language.name);
  const animeDetails = useAppSelector((state) => state.anime);
  const dispatch = useAppDispatch();
  const { id: mal_id } = useParams();
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(getAnimeDetails(mal_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mal_id]);

  const activeLink = (linkName: string) => {
    if (pathname === linkName) return 1;
    else return 0;
  };

  return (
    <div>
      {animeDetails?.status === ApiStatus.Success && (
        <div>{animeDetails?.details?.data?.[Title[language]]} </div>
      )}
      <SAnimeDetailsNavWrapper>
        <SNavLink to="" active={activeLink(`/anime/${mal_id}`)}>
          Overview
        </SNavLink>
        <SNavLink
          to="episodes"
          active={activeLink(`/anime/${mal_id}/episodes`)}
        >
          Episodes
        </SNavLink>
        <SNavLink to="videos" active={activeLink(`/anime/${mal_id}/videos`)}>
          Videos
        </SNavLink>
      </SAnimeDetailsNavWrapper>
    </div>
  );
};

export default AnimeDetails;

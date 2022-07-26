/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import rating from "../../assets/images/rating.svg";
import useInfiniteScroll from "../../CustomHooks/useInfiniteScroll";
import { useAppDispatch, useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import {
  createEpisodeId,
  getAnimeEpisodes,
  updateCurrentPage
} from "../../Data/Slice/animeEpisodes.slice";
import {
  SEpisodeDetails,
  SEpisodeDetailsWrapper,
  SEpisodeFiller,
  SEpisodeNumber,
  SEpisodeRating,
  SEpisodesCard,
  SEpisodesWrapper
} from "./Episodes.styled";

const Episodes = () => {
  const { id: mal_id } = useParams();
  const animeEpisodes = useAppSelector((state) => state.episodes.details[mal_id as string]);
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const [page] = useState(animeEpisodes?.currentPage || 1);

  const { pageNumber } = useInfiniteScroll(ref, page, animeEpisodes?.status);

  const createUniqueIq = useCallback(() => {
    dispatch(createEpisodeId({ mal_id, page: pageNumber }));
    pageNumber > 1 && dispatch(updateCurrentPage({ mal_id, pageNumber }));
  }, [pageNumber]);

  useEffect(() => {
    createUniqueIq();
    firstPageCheck() && check() && dispatch(getAnimeEpisodes({ mal_id, page: pageNumber }));
  }, [pageNumber]);

  const firstPageCheck = () => {
    if (pageNumber === 1) {
      return animeEpisodes?.hasOwnProperty("pagination")
        ? animeEpisodes?.pagination?.hasOwnProperty("has_next_page")
          ? animeEpisodes?.pagination?.has_next_page
          : true
        : true;
    } else {
      return animeEpisodes?.pagination?.has_next_page;
    }
  };

  const check = () =>
    animeEpisodes?.data?.length === 0 ||
    animeEpisodes?.data?.length === undefined ||
    pageNumber !== animeEpisodes?.currentPage;

  // const trailSeasonAnime = useTransition(animeEpisodes?.data?.length, {
  //   config: { ...config.stiff },
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  // });

  return (
    <SEpisodesWrapper>
      {
        // trailSeasonAnime((styles) =>
        animeEpisodes?.data?.map((details) => (
          <SEpisodesCard key={details?.mal_id}>
            <SEpisodeNumber>{details.mal_id}</SEpisodeNumber>
            <SEpisodeDetailsWrapper>
              <div>{details.title}</div>
              <SEpisodeDetails>
                <SEpisodeRating src={rating} />
                <div>{details.score}</div>
                <div>
                  Filler -
                  <SEpisodeFiller isFiller={details.filler ? 1 : 0}>
                    {details.filler ? "Yes" : "No"}
                  </SEpisodeFiller>
                </div>
              </SEpisodeDetails>
            </SEpisodeDetailsWrapper>
          </SEpisodesCard>
        ))
        // )
      }
      <div ref={ref}></div>
    </SEpisodesWrapper>
  );
};

export default Episodes;

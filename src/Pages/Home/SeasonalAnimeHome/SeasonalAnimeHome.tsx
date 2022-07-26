import React from "react";
import AnimeData from "../../../Components/AnimeData/AnimeData";
import Tooltip from "../../../Components/Tooltip/Tooltip";
import { WeebType } from "../../../Constants/Enum";

import { ISeasonalAnime } from "../../../Constants/Interface/seasonalAnime";
import { SSeasonAnimeHeader, SSeasonPagination, SSeasonPaginationWrapper } from "../Home.styled";

export interface SeasonalAnimeHomeProps {
  seasonAnimePage: number;
  setSeasonAnimePage: React.Dispatch<React.SetStateAction<number>>;
  seasonalAnimeData: ISeasonalAnime;
}

const SeasonalAnimeHome = ({
  seasonAnimePage,
  setSeasonAnimePage,
  seasonalAnimeData
}: SeasonalAnimeHomeProps) => {
  const nextSeasonalAnime = (type: string) => {
    if (type === "forward") {
      if (seasonalAnimeData?.pagination?.has_next_page) setSeasonAnimePage(seasonAnimePage + 1);
    } else if (type === "back") {
      if (seasonAnimePage !== 1) setSeasonAnimePage(seasonAnimePage - 1);
    }
  };
  return (
    <>
      <SSeasonAnimeHeader>
        <div>Seasonal Anime</div>
        <SSeasonPaginationWrapper>
          <SSeasonPagination
            isPage={seasonAnimePage === 1 ? 0 : 1}
            onClick={() => nextSeasonalAnime("back")}
            data-for="backPage"
            data-tip>
            {"<"}
            <Tooltip id="backPage">Page {seasonAnimePage === 1 ? 1 : seasonAnimePage - 1}</Tooltip>
          </SSeasonPagination>
          <SSeasonPagination
            isPage={seasonalAnimeData?.pagination?.has_next_page ? 1 : 0}
            onClick={() => nextSeasonalAnime("forward")}
            data-for="forwardPage"
            data-tip>
            {">"}
            <Tooltip id="forwardPage">
              Page{" "}
              {seasonalAnimeData?.pagination?.has_next_page ? seasonAnimePage + 1 : seasonAnimePage}
            </Tooltip>
          </SSeasonPagination>
        </SSeasonPaginationWrapper>
      </SSeasonAnimeHeader>
      <AnimeData data={seasonalAnimeData?.data} type={WeebType.Anime} />
    </>
  );
};

export default SeasonalAnimeHome;

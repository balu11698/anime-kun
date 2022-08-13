import React from "react";
import { paginationLocale } from "../../Constants/appConstants";
import { SPagination, SPaginationIcons, SPaginationWrapper } from "./Pagination.styled";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  perPage: number;
}

const Pagination = ({ total, perPage, page, setPage }: PaginationProps) => {
  return (
    <SPaginationWrapper>
      <SPagination
        total={total}
        pageSize={perPage}
        onChange={(data) => setPage(data)}
        prevIcon={<SPaginationIcons>{"<"}</SPaginationIcons>}
        nextIcon={<SPaginationIcons>{">"}</SPaginationIcons>}
        current={page}
        showQuickJumper={true}
        jumpPrevIcon={<SPaginationIcons>...</SPaginationIcons>}
        jumpNextIcon={<SPaginationIcons>...</SPaginationIcons>}
        locale={paginationLocale}
      />
    </SPaginationWrapper>
  );
};

export default Pagination;

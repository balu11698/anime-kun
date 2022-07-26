import { RefObject, useEffect, useState } from "react";
import { ApiStatus } from "../Constants/Enum";

const useInfiniteScroll = (ref: RefObject<HTMLElement>, page: number, status: string) => {
  const [pageNumber, setPageNumber] = useState(page);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, status]);

  const handleObserver = (entities: any) => {
    const target = entities[0];

    if (target.isIntersecting) {
      status === ApiStatus.Success && setPageNumber((page) => page + 1);
    }
  };
  return { pageNumber };
};
export default useInfiniteScroll;

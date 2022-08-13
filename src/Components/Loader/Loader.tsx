import { HashLoader } from "react-spinners";
import { ApiStatus } from "../../Constants/Enum";
import { useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { SLoader, SLoaderWrapper } from "./Loader.styled";

const Loader = () => {
  const apiHandling = useAppSelector((state) => state.apiHandling.status);
  return apiHandling === ApiStatus.Pending ? (
    <SLoaderWrapper>
      <SLoader>
        <HashLoader size={100} color="#122840" />
      </SLoader>
    </SLoaderWrapper>
  ) : (
    <></>
  );
};

export default Loader;

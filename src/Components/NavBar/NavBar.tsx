import { useNavigate } from "react-router-dom";
import { Language } from "../../Constants/Enum";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Data/ReduxHooks/reduxHooks";
import { changeLanguage } from "../../Data/Slice/language.slice";
import {
  SHeaderName,
  SLanguage,
  SLanguageWrapper,
  SNavBar,
} from "./NavBar.styled";

const NavBar = () => {
  const selectedLanguage = useAppSelector((state) => state.language.name);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const languageChange = (language: Language) => {
    dispatch(changeLanguage(language));
  };
  return (
    <SNavBar>
      <SHeaderName onClick={() => navigate("/")}>Anime Kun</SHeaderName>
      <SLanguageWrapper>
        <SLanguage
          languageSelected={selectedLanguage === Language.English}
          onClick={() => languageChange(Language.English)}
        >
          EN
        </SLanguage>
        <SLanguage
          languageSelected={selectedLanguage === Language.Japan}
          onClick={() => languageChange(Language.Japan)}
        >
          JP
        </SLanguage>
      </SLanguageWrapper>
    </SNavBar>
  );
};

export default NavBar;

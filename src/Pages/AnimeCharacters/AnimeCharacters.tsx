import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { config, useSpring } from "react-spring";
import { IAnimeCharacters } from "../../Constants/Interface/animeCharacters";
import { useAppDispatch, useAppSelector } from "../../Data/ReduxHooks/reduxHooks";
import { getAnimeCharacters } from "../../Data/Slice/animeCharacters.slice";
import { SAnimeCard } from "../Overview/Overview.styled";
import {
  SAnimeCharacterDetail,
  SAnimeCharacterDetailWrapper,
  SAnimeCharacterImage,
  SAnimeCharacterInfo,
  SAnimeCharactersWrapper,
  SAnimeVoiceActors
} from "./AnimeCharacters.styled";

const AnimeCharacters = () => {
  const { id: mal_id } = useParams();

  const animeCharacters: IAnimeCharacters[] = useAppSelector(
    (state) => state.animeCharacters?.details?.[mal_id as string]
  );
  const language = useAppSelector((state) => state.language.name);

  const dispatch = useAppDispatch();

  useEffect(() => {
    !animeCharacters && dispatch(getAnimeCharacters(mal_id));
  }, []);

  const charactersAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(-20px,0,0)" },
    to: { opacity: 1, transform: "translate3d(0px,0,0)" },
    config: config.molasses
  });

  return (
    <SAnimeCharactersWrapper>
      {animeCharacters?.map((character) => (
        <SAnimeCard style={charactersAnimation} key={character?.character?.mal_id}>
          <SAnimeCharacterDetailWrapper>
            <SAnimeCharacterDetail>
              <SAnimeCharacterImage src={character?.character?.images?.jpg?.image_url} />
              <SAnimeCharacterInfo textAlign="start">
                <div>{character?.character?.name}</div>
                <div>{character?.role}</div>
              </SAnimeCharacterInfo>
            </SAnimeCharacterDetail>
            <SAnimeVoiceActors>
              {character?.voice_actors
                ?.filter((voice) => voice?.language === language)
                ?.map((actor) => (
                  <SAnimeCharacterDetail key={actor?.person?.mal_id}>
                    <SAnimeCharacterInfo textAlign="end">
                      <div>{actor?.person?.name}</div>
                      <div>{language}</div>
                    </SAnimeCharacterInfo>
                    <SAnimeCharacterImage src={actor?.person?.images?.jpg?.image_url} />
                  </SAnimeCharacterDetail>
                ))}
            </SAnimeVoiceActors>
          </SAnimeCharacterDetailWrapper>
        </SAnimeCard>
      ))}
    </SAnimeCharactersWrapper>
  );
};

export default AnimeCharacters;

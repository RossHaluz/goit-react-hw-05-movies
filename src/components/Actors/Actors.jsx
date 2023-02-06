import { nanoid } from 'nanoid';
import DefaultImg from 'components/default.jpg';
import { ActorLists } from './Actors.styled';

const Actors = ({ actors }) => {
  return (
    <ActorLists>
      {actors.cast.map(({ profile_path, name, character }) => {
        return (
          <li key={nanoid()}>
            <img
              src={
                profile_path !== null
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : DefaultImg
              }
              alt={name}
              width="100"
              height="150"
            />

            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ActorLists>
  );
};

export default Actors;

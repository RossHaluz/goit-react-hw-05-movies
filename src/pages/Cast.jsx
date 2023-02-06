import { useState, useEffect } from 'react';
import * as GetActors from 'components/api-service/api';
import { useParams } from 'react-router-dom';
import Actors from 'components/Actors';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    GetActors.castCredits(movieId).then(data => setActors(data.data));
  }, [movieId]);

  return <>{actors && <Actors actors={actors} />}</>;
};

export default Cast;

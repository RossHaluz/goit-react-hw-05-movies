import * as GetReviews from 'components/api-service/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsAboutFilm from 'components/Reviews';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    GetReviews.Reviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      {!reviews.length ? (
        <p>We don't have any reviews of this movie</p>
      ) : (
        <ReviewsAboutFilm reviews={reviews} />
      )}
    </>
  );
};

export default Reviews;

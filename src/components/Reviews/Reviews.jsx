import { ReviewsList } from './Reviews.styled';

const ReviewsAboutFilm = ({ reviews }) => {
  return (
    <ReviewsList>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h3>Authore: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ReviewsList>
  );
};

export default ReviewsAboutFilm;

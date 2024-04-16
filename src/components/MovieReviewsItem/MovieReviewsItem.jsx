// import css from "./MovieReviewsItem.module.css";

function MovieReviewsItem({ review }) {
  return (
    <div>
      <b>Author: {review.author}</b>
      <p>{review.content}</p>
    </div>
  );
}

export default MovieReviewsItem;

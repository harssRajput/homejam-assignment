function Review(props) {
  const { review } = props;
  return (
    <div className="review my-4 bg-dark container py-2">
      <div className="row">
        <div className="col-1 left-block">
          <img
            src={review.userImage}
            className="user-image"
            alt="review user image"
          />
        </div>
        <div className="col-9 right-block">
          <h5 className="username my-0">{review.username}</h5>
          <img
            className="country-flag mb-2"
            src={review.countryFlag}
            alt="review user country flag icon"
          />
          <span className="location">{review.location}</span>
        </div>
      </div>
      <div className="col mt-3">
        <p className="review-text fs-7 text-monospace">{review.reviewText}</p>
      </div>
    </div>
  );
}

export default Review;

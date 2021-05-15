import Review from "./Review";

function ReviewList() {
  return (
    <div className="review-list container">
      <div className="row justify-content-evenly row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div className="col">
          <Review />
        </div>
        <div className="col">
          <Review />
        </div>
        <div className="col">
          <Review />
        </div>
        <div className="col">
          <Review />
        </div>
      </div>
    </div>
  );
}

export default ReviewList;

import React from "react";

import Review from "./Review";
import { reviewsDataset } from "../dataset/reviewsDataset";

class ReviewList extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [...reviewsDataset],
      // currPageNum: 1,
      // currPageReviews: reviewsDataset.slice(0, 4),
    };
  }
  //these all functions to support handling prev and next button functionality
  // setCurrPageReviews = (isNextPageRequest) => {
  //   const { reviews, currPageNum, currPageReviews } = this.state;
  //   const changeBy = isNextPageRequest ? 1 : -1;

  //   const endIndex = Math.min(4 * (currPageNum + changeBy), reviews.length);
  //   const startIndex = 4 * (currPageNum + changeBy - 1);

  //   this.setState({
  //     currPageReviews: reviews.slice(startIndex, endIndex),
  //     currPageNum: currPageNum + changeBy,
  //   });
  // };

  // handlePrevPage = () => {
  //   if (this.state.currPageNum === 1) return;

  //   this.setCurrPageReviews(false);
  // };

  // handleNextPage = () => {
  //   const { reviews, currPageNum } = this.state;
  //   if (currPageNum === Math.ceil(reviews.length / 4)) return;

  //   this.setCurrPageReviews(true);
  // };

  render() {
    const { reviews } = this.state;
    // const { reviews, currPageNum, currPageReviews } = this.state;

    return (
      <article className="review-list container">
        <div className="row header">
          <h2 className="col-3 text-center">
            <span>Revie</span>ws
          </h2>
          <div className="col-3 text-center offset-md-6">
            {/* it is a (complementary of scrolling) feature of navigation buttons as prev and next review page */}
            {/* <nav aria-label="review navigation">
              <span className="text-muted mx-1 fs-5">{currPageNum}</span>
              <span className=" fs-5">/</span>
              <span className="text-muted mx-1 fs-5">
                {Math.ceil(reviews.length / 4)}
              </span>
              <button
                onClick={this.handlePrevPage}
                className={`prev-icon mx-2 btn btn-sm btn-outline-secondary ${
                  currPageNum === 1 ? "disabled" : ""
                }`}
              >
                &#8592;
              </button>
              <button
                onClick={this.handleNextPage}
                className={`next-icon mx-2 btn btn-sm btn-outline-secondary ${
                  currPageNum === Math.ceil(reviews.length / 4)
                    ? "disabled"
                    : ""
                }`}
              >
                &#8594;
              </button>
            </nav> */}
          </div>
        </div>
        {/* <div className="row justify-content-evenly row-cols-1 row-cols-md-2 row-cols-lg-4"> */}
        <div className="hor-scroll">
          {reviews.map((review, index) => {
            return (
              <div className="review-card" key={index}>
                <Review review={review} />
              </div>
            );
          })}
        </div>
      </article>
    );
  }
}

export default ReviewList;

import React from "react";

import Review from "./Review";
import prevIcon from "../bookmarked.png";
import nextIcon from "../bookmarked.png";
import { reviewsDataset } from "../dataset/reviewsDataset";
import { artistsDataset } from "../dataset/artistsDataset";

class ReviewList extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [...reviewsDataset],
      currPageNum: 1,
      currPageReviews: reviewsDataset.slice(0, 4),
    };
  }

  setCurrPageReviews = (isNextPageRequest) => {
    const { reviews, currPageNum, currPageReviews } = this.state;
    const changeBy = isNextPageRequest ? 1 : -1;

    const endIndex = Math.min(4 * (currPageNum + changeBy), reviews.length);
    const startIndex = 4 * (currPageNum + changeBy - 1);

    console.log(currPageReviews.length, "it is length of an array");

    this.setState({
      currPageReviews: reviews.slice(startIndex, endIndex),
      currPageNum: currPageNum + changeBy,
    });
  };

  handlePrevPage = () => {
    console.log("inside handel prev page");

    if (this.state.currPageNum === 1) return;
    console.log("inside handel prev page");

    // this.state.currPageNum -= 1;
    this.setCurrPageReviews(false);
  };

  handleNextPage = () => {
    console.log("inside handel next page");
    const { reviews, currPageNum } = this.state;
    if (currPageNum === Math.ceil(reviews.length / 4)) return;

    // currPageNum+=1;
    this.setCurrPageReviews(true);
  };

  render() {
    const { reviews, currPageNum, currPageReviews } = this.state;
    console.log("inside render function", "currPageNum is", currPageNum);
    console.log("currPageReviews is", currPageReviews);
    console.log("current page reviewsPart are", reviews.slice(4, 8));

    return (
      <div className="review-list container">
        <div className="row header">
          <h2 className="col-3 text-center">Reviews</h2>
          <div className="col-3 text-center offset-md-6">
            <nav aria-label="review navigation">
              <span className="text-muted mx-1 fs-5">{currPageNum}</span>
              <span className=" fs-5">/</span>
              <span className="text-muted mx-1 fs-5">
                {Math.ceil(reviews.length / 4)}
              </span>
              <img
                onClick={this.handlePrevPage}
                className={`prev-icon ${currPageNum === 1 ? "disabled" : ""}`}
                src={prevIcon}
                alt="previous review navigation"
              />
              <img
                onClick={this.handleNextPage}
                className={`next-icon ${
                  currPageNum === Math.ceil(reviews.length / 4)
                    ? "disabled"
                    : ""
                }`}
                src={nextIcon}
                alt="next review navigation"
              />
            </nav>
          </div>
        </div>
        <div className="row justify-content-evenly row-cols-1 row-cols-md-2 row-cols-lg-4">
          {currPageReviews.map((review, index) => {
            return (
              <div className="col" key={index}>
                <Review review={review} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ReviewList;

import React from "react";
import Review from "./Review";

import { reviewsDataset } from "../dataset/reviewsDataset";

class ReviewList extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: reviewsDataset,
    };
  }

  render() {
      const {reviews} = this.state;
        return (
            <div className="review-list  container">
            <div className="row header">
                <h2 className="col-3 text-center">Reviews</h2>
                {/* {dfkjas;lf} */}
                <div className="col-3 text-center offset-md-6">
                <nav aria-label="review navigation">
                    <ul class="pagination">
                    <li class="page-item ">
                        <a class="page-link bg-dark text-white" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {/* <li class="page-item">
                        <a class="page-link" href="#">
                        1
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                        2
                        </a>
                    </li> */}
                    <li class="page-item">
                        <a class="page-link bg-dark text-white" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            <div className="row justify-content-evenly row-cols-1 row-cols-md-2 row-cols-lg-4">
            {reviews.map((review) => {
            return (
              <div className="col">
                <Review review={review} />
              </div>
            );
          })}
                {/* <div className="col">
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
                </div> */}
            </div>
            </div>
        );
    }
}

export default ReviewList;

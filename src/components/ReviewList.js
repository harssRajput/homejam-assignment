import React from "react";
import Review from "./Review";

import { reviewsDataset } from "../dataset/reviewsDataset";

class ReviewList extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [...reviewsDataset],
      currPageNum: 1,
    
    }
    // console.log("this is current page reviews list", currPageReviews);
  }


  render() {
      const {reviews} = this.state;
    //   console.log("this is current page reviews list", currPageReviews);
        return (
            <div className="review-list  container">
            <div className="row header">
                <h2 className="col-3 text-center">Reviews</h2>
                {/* {dfkjas;lf} */}
                <div className="col-3 text-center offset-md-6">
                <nav aria-label="review navigation">
                    <ul className="pagination">
                    <li className="page-item ">
                        <a className="page-link bg-dark text-white" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {/* <li className="page-item">
                        <a className="page-link" href="#">
                        1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                        2
                        </a>
                    </li> */}
                    <li className="page-item">
                        <a className="page-link bg-dark text-white" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            <div className="row justify-content-evenly row-cols-1 row-cols-md-2 row-cols-lg-4">
            {reviews.map((review, index) => {
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

import React from "react";

import Artist from "./Artist";
import { artistsDataset } from "../dataset/artistsDataset";

class ArtistList extends React.Component {
  constructor() {
    super();

    this.state = {
      artists: artistsDataset,
    };
  }

  render() {
    //   console.log(artistsDataset);
    const { artists } = this.state;
    return (
      <div className="artist-list container">
        <div className="row header">
          <h2 className="col-5 text-center">Upcoming Shows</h2>
          <div className="col-3 text-center offset-md-4">
            <nav aria-label="artist navigation">
              <ul class="pagination">
                <li class="page-item ">
                  <a
                    class="page-link bg-dark text-white"
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link bg-dark text-white"
                    href="#"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row justify-content-evenly row-cols-1 row-cols-md-2 row-cols-lg-4">
          {artists.map((artist) => {
            return (
              <div className="col">
                <Artist artist={artist} />
              </div>
            );
          })}
          {/* <div className="col">
            <Artist />
          </div>
          <div className="col">
            <Artist />
          </div>
          <div className="col">
            <Artist />
          </div>
          <div className="col">
            <Artist /> 
        </div>*/}
        </div>
      </div>
    );
  }
}

export default ArtistList;

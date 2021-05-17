import React from "react";

import Artist from "./Artist";
import { artistsDataset } from "../dataset/artistsDataset";

class ArtistList extends React.Component {
  constructor() {
    super();

    this.state = {
      artists: artistsDataset,
      showMoreArtist: false,
    };
  }

  handleShowMoreFeature = () => {

    this.setState({
      showMoreArtist: !this.state.showMoreArtist,
    });
  };

  render() {
    const { artists, showMoreArtist } = this.state;
    const {handleDetailPage} = this.props;
    return (
      <article className="artist-list container">
        <div className="row header">
          <h1 className="col-7 text-center fs-3"><span>Upcomi</span>ng Shows</h1>
          <div className="col-3 text-center d-flex align-items-center offset-md-2">
            <p
              className="show-more-artist"
              onClick={this.handleShowMoreFeature}
            >
              {showMoreArtist ? "- Less" : "+ More"}
            </p>
          </div>
        </div>
        <div className="hor-scroll">
          {artists
            .slice(0, showMoreArtist ? artists.length : 3)
            .map((artist, index) => {
              return (
                <div className="artist-card" key={index}>
                  <Artist artist={artist} handleDetailPage={handleDetailPage} />
                </div>
              );
            })}
        </div>
      </article>
    );
  }
}

export default ArtistList;

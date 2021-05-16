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
    console.log("inside show more feature handler");

    this.setState({
      showMoreArtist: !this.state.showMoreArtist,
    });
  };

  render() {
    //   console.log(artistsDataset);
    const { artists, showMoreArtist } = this.state;
    const {handleDetailPage} = this.props;
    return (
      <div className="artist-list container">
        <div className="row header">
          <h2 className="col-7 text-center">Upcoming Shows</h2>
          <div className="col-3 text-center offset-md-2">
            <p
              className="show-more-artist"
              onClick={this.handleShowMoreFeature}
            >
              {showMoreArtist ? "- Less" : "+ More"}
            </p>
          </div>
        </div>
        <div className="row justify-content-evenly row-cols-1 row-cols-md-2 row-cols-lg-4">
          {artists
            .slice(0, showMoreArtist ? artists.length : 3)
            .map((artist, index) => {
              return (
                <div className="col" key={index}>
                  <Artist artist={artist} handleDetailPage={handleDetailPage} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ArtistList;

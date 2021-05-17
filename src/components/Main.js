import React from "react";

import Description from "./Description";
import ArtistList from "./ArtistList";
import Indicators from "./Indicators";
import ReviewList from "./ReviewList";
import ArtistDetailPage from "./ArtistDetailPage";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetailPage: false,
      artist: {},
    };
  }

  handleDetailPage = (artist) => {
    this.setState({
      showDetailPage: !this.state.showDetailPage,
      artist: artist,
    });
  };

  render() {
    const { showDetailPage, artist } = this.state;
    return (
      <main className="main">
        <Description />
        {showDetailPage ? (
          <ArtistDetailPage
            handleDetailPage={this.handleDetailPage}
            artist={artist}
          />
        ) : (
          <div>
            <Indicators />
            <ArtistList handleDetailPage={this.handleDetailPage} />
            <ReviewList />
          </div>
        )}
      </main>
    );
  }
}

export default Main;

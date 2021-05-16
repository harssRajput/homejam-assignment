import React from "react";
import bookmark from "../icons/bookmark.png";
import bookmarked from "../icons/bookmarked.png";

class Artist extends React.Component {
  constructor() {
    super();
    this.state = {
      isBookmark: false,
    };
  }

  handleBookmark = () => {
    this.setState({
      isBookmark: !this.state.isBookmark,
    });
  };

  render() {
    const { artist, handleDetailPage } = this.props;
    const { isBookmark } = this.state;
    return (
      <div className="artist card my-5">
        <img
          src={artist.image}
          className="card-img-top artist-image"
          alt="artist icon"
        />
        <div className="card-body pb-4">
          <p className="card-title">{artist.tag}</p>
          <h3 className="card-title">{artist.name}</h3>
        </div>
        <div className="card-body d-flex pt-0 mb-9 justify-content-between">
          <span className="more-info" onClick={()=>{handleDetailPage(artist)}}>more info -&gt;</span>
          <img
            onClick={this.handleBookmark}
            className="bookmark-icon"
            src={isBookmark ? bookmarked : bookmark}
            alt="bookmark icon"
          />
        </div>
      </div>
    );
  }
}

export default Artist;

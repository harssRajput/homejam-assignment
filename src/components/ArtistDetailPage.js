function ArtistDetailPage(props) {
  const { handleDetailPage, artist } = props;
  return (
    <div className="artist-page container">
      <div className="row">
        <div className="col-10">
          <button
            onClick={() => {
              handleDetailPage({});
            }}
            className="go-back text-end btn btn-dark"
          >
            Go Back
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <img className="artist-image" src={artist.image} alt="artist icon" />
        </div>
        <div className="col-6 artist-info">
          <p className="artist-tag">{artist.tag}</p>
          <p className="artist-name">{artist.name}</p>
          <p className="artist-dob">{artist.born}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <p className="artist-about">{artist.about}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <button
            onClick={() => {
              handleDetailPage({});
            }}
            className="go-back btn btn-dark text-center"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArtistDetailPage;

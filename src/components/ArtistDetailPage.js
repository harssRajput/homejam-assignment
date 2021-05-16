function ArtistDetailPage(props) {
  const { handleDetailPage, artist } = props;
  return (
    <div className="artist-page container">
      <div className="row">
        <div className="col-10">
          <p className="go-back text-end">Go Back top one handker</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img className="artist-image" src="" alt="artist image" />
        </div>
        <div className="col-6">
          <p className="artist-tag">artist tag goes here</p>
          <p className="artist-name">artist name here</p>
          <p className="artist-dob">artist DOB here</p>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <p className="artist-about">artist about goes here</p>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <p className="go-back text-center">Go Back bottom one handker</p>
        </div>
      </div>
    </div>
  );
}

export default ArtistDetailPage;

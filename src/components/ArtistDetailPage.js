function ArtistDetailPage(props) {
  const { handleDetailPage, artist } = props;
  return (
    <div className="artist-detail-page container">
      <div className="row header">
        <h2 className="col-5 text-center">{artist.name}</h2>
        <div className="col-3 text-center offset-md-4">
          <p className="go-back" onClick={handleDetailPage}>
            Go Back
          </p>
        </div>
      </div>
      it's a artist detail page
    </div>
  );
}

export default ArtistDetailPage;

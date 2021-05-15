import bookmark from "../bookmark.png";


function Artist(props) {
  const {artist} = props;
  return (
    <div className="artist card my-5">
      <img src={artist.image} className="card-img-top artist-image" alt="artist image" />
      <div className="card-body pb-4">
        <h5 className="card-title">{artist.name}</h5>
      </div>
      <div className="card-body d-flex pt-0 mb-9 justify-content-between">
        <a href={artist.moreDetail} className="card-link more-info"> 
          more info -&gt;
        </a>
          <img className="bookmark-icon" src={bookmark} alt="bookmark icon" />
      </div>
    </div>
  );
}

export default Artist;

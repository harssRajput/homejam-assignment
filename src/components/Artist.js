import bookmark from "../bookmark.png";


function Artist() {
  return (
    <div className="artist card my-5">
      <img src="https://wallpapercave.com/wp/wp4417868.jpg" className="card-img-top artist-image" alt="artist image" />
      <div className="card-body pb-4">
        <h5 className="card-title">Card title</h5>
      </div>
      <div className="card-body d-flex pt-0 mb-9 justify-content-between">
        <a href="#" className="card-link more-info"> 
          more info -&gt;
        </a>
          <img className="bookmark-icon" src={bookmark} alt="boolmark icon" />
      </div>
    </div>
  );
}

export default Artist;

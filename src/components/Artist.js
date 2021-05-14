import bookmark from "../bookmarked.png";


function Artist() {
  return (
    <div className="artist card my-5">
      <img src="https://wallpapercave.com/wp/wp4417868.jpg" className="card-img-top" alt="artist image" />
      <div className="card-body">
        <h5 className="card-title text-black-50">Card title</h5>
      </div>
      <div className="card-body d-flex justify-content-between">
        <a href="#" className="card-link mr-auto">
          More Info
        </a>
        <a href="#" className="card-link ml-auto">
          <img className="bookmark-icon" src={bookmark} alt="boolmark icon" />
        </a>
      </div>
    </div>
  );
}

export default Artist;

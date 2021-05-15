import Artist from "./Artist";

function ArtistList() {
  return (
    <div className="artist-list container">
      <div className="row header">
        <h2 className="col-5 text-center">Upcoming Shows</h2>
        {/* {dfkjas;lf} */}
        <div className="col-3 text-center offset-md-4">
          <nav aria-label="artist navigation">
            <ul class="pagination">
              <li class="page-item ">
                <a
                  class="page-link bg-dark text-white"
                  href="#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {/* <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li> */}
              <li class="page-item">
                <a
                  class="page-link bg-dark text-white"
                  href="#"
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="row justify-content-evenly row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div className="col">
          <Artist />
        </div>
        <div className="col">
          <Artist />
        </div>
        <div className="col">
          <Artist />
        </div>
        <div className="col">
          <Artist />
        </div>
      </div>
    </div>
  );
}

export default ArtistList;

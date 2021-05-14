import Artist from "./Artist"

function ArtistList() {
    return (
        <div className="artist-list container">
            <div className="row justify-content-evenly row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col">
                    <Artist/>
                </div>
                <div className="col">
                    <Artist/>
                </div>
                <div className="col">
                    <Artist/>
                </div>
                <div className="col">
                    <Artist/>
                </div>
            </div>
        </div>
    );
}

export default ArtistList;
  
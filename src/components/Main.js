import Description from './Description'
import ArtistList from './ArtistList'
import Indicators from './Indicators'
import ReviewList from './ReviewList'

function Main() {
    return (
        <div className="main">
            <Description/>
            <Indicators/>
            <ArtistList/>
            <ReviewList/>
        </div>
    );
}

export default Main;
  
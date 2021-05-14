import Indicator from './Indicator'

function Indicators() {
    return (
        <div className="indicators container my-3">
            <div className="row justify-content-evenly row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col">
                    <Indicator/>
                </div>
                <div className="col">
                    <Indicator/>
                </div>
                <div className="col">
                    <Indicator/>
                </div>
                <div className="col">
                    <Indicator/>
                </div>
            </div>
        </div>
    );
}

export default Indicators;
  
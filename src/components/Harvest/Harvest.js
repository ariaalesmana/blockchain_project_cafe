import { Fragment } from "react";
import "./Harvest.css";
import "./HarvestMedia.css";
import showResults from "../showResults/showResults";
import HarvestForm from "./HarvestForm";

const Harvest = () => {
  return (
    <Fragment>
      <div className="title harvest">
        <span className="lingkaran harvest"></span>
        <div className="heading harvest">
          <span className="harvest">Pemasukkan Data</span>
          <h1 className="harvest">Harvest</h1>
        </div>
      </div>

      <div className="garis harvest"></div>

      <HarvestForm onSubmit={showResults} />
    </Fragment>
  );
};

export default Harvest;

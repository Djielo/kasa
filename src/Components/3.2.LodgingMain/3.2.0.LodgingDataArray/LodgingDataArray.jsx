import { useLocation } from "react-router-dom";
import dataJson from "../../../Datas/lodging.json";

function LodgingDataArray() {
  const CurrentUrl = useLocation();
  const ArrayPictures = [...dataJson].filter((data) => data.pictures === CurrentUrl.pathname.split("/")[2])[0];
  console.log(ArrayPictures);
}
export default LodgingDataArray;

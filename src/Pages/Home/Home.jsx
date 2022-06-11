import Banner from "../../Components/Banner/Banner";
import Gallery from "../../Components/Gallery/Gallery";

function Home() {
  return (
    <div className="main">
      <Banner text="Chez vous, partout et ailleurs" customStyle="darken" />
      <Gallery />
    </div>
  );
}
export default Home;
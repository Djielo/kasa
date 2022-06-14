import Banner from "../../Components/2.Banner/Banner";
import Gallery from "../../Components/3.Gallery/Gallery";

function Home() {
  return (
    <div className="main">
      <Banner text="Chez vous, partout et ailleurs" customStyle="darken" />
      <Gallery />
    </div>
  );
}
export default Home;
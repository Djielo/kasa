import Banner from "../../Components/2.Banner/Banner";
import HomeMain from "../../Components/3.1.HomeMain/HomeMain";

function Home() {
  return (
    <div className="main">
      <Banner text="Chez vous, partout et ailleurs" customStyle="darken" />
      <HomeMain />
    </div>
  );
}
export default Home;

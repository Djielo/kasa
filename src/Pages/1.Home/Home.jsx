import Banner from "../../Components/Banner/Banner";
import HomeMain from "../../Components/HomeMain/HomeMain";

function Home() {
  return (
    <div className="main">
      <Banner text="Chez vous, partout et ailleurs" customStyle="darken" />
      <HomeMain />
    </div>
  );
}
export default Home;

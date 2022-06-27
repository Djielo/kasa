import Banner from "../../Components/Banner/Banner";
import AboutMain from "../../Components/AboutMain/AboutMain";

function AboutUs() {
  return (
    <div className="main">
      <Banner text="" customStyle="darken" page="aboutus" />
      <AboutMain className="aboutmain" />
    </div>
  );
}

export default AboutUs;

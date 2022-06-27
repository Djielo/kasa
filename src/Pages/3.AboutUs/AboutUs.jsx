import Banner from "../../Components/2.Banner/Banner";
import AboutMain from "../../Components/5.1.AboutMain/AboutMain"

function AboutUs() {
  return (
    <div className="main">
      <Banner text="" customStyle="darken" page="aboutus"/>
      <AboutMain className="aboutmain" />
    </div>
  );
}

export default AboutUs;
import Navbar from "./components/Navbar.js";
import HeroSection from "./components/HeroSection"
// import List from "./components/List"
import Footer from "./components/Footer"
import HorizontalCardsSlider from "./components/HorizontalCardsSlider.js";
import Data from "./assets/ListData.js";
function App() {
  return (
    <div className="main-container">
      <Navbar />
      <HeroSection/>
      <HorizontalCardsSlider title={"Latest & Trending"} Data={Data} />
      <HorizontalCardsSlider title={"Best in Sports"} Data={Data} isLive={true}/>
      <HorizontalCardsSlider title={"Thanksgiving Specials"} Data={Data} />
      <HorizontalCardsSlider title={"Popular Shows"} Data={Data} />
      <HorizontalCardsSlider title={"Movies Recommended For You"} Data={Data} />
      {/* <List/> */}
      <Footer/>
    </div>
  );
}

export default App;

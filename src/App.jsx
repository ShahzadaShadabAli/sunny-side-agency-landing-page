import AttrOne from "./components/AttrOne";
import AttrTwo from "./components/AttrTwo";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import MidPortion from "./components/MidPortion";
import Testimonials from "./components/Testimonials";

function App() {

  return (
    <>
    <Header />
    <MidPortion title={"Transform your brand"} img_lg={"/images/desktop/image-transform.jpg"} img_sm={"/images/mobile/image-transform.jpg"} desc={"We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you"} btnColor={"fdf3b8"} reversed={false}  />
    <MidPortion title={"Stand out to the right audience"} img_lg={"/images/desktop/image-stand-out.jpg"} img_sm={"/images/mobile/image-stand-out.jpg"} desc={"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."} btnColor={"tomato"} reversed={true}  />
    <div className="flex max-md:flex-col">
      <AttrOne />
      <AttrTwo />
    </div>
    <Testimonials />
    <Gallery />
    <Footer />
    </>
    
  );
}

export default App;

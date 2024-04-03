import ANIMAL1 from "../../Assets/Backgrounds/ANIMAL1.jpg";
import ANIMAL2 from "../../Assets/Backgrounds/ANIMAL2.png";
import ANIMAL3 from "../../Assets/Backgrounds/ANIMAL3.jpg";
import ANIMAL4 from "../../Assets/Birds/Parrots/Parrot6.png";
import ANIMAL5 from "../../Assets/Herbivores/Panda/Panda6.jpg";
import ANIMAL6 from "../../Assets/Omnivores/Hedgehog/Hedgehog6.jpg";
import { TypeAnimation } from "react-type-animation";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className="homepage md:h-full sm:h-screen">
      <div className="md:h-screen">
        <div className="text-center welcome ">
          <TypeAnimation
            sequence={[
              "Welcome to the world of Animals..",
              2000,
              "Enjoy The Adventure With Beautiful Animals..",
              2000,
            ]}
            wrapper="h1"
            speed={10}
            repeat={Infinity}
            className="lobster tracking-widest md:text-[60px] "
          />
        </div>

        <div className="zooHomeImageContainer gap-8 md:ml-[60px]">
          <img src={ANIMAL1} alt="img" className="zooGalleryItem" data-aos="fade-up-right" data-aos-duration="1000" />
          <img src={ANIMAL2} alt="img" className="zooGalleryItem" data-aos="fade-up-left" data-aos-duration="1000"/>
          <img src={ANIMAL3} alt="img" className="zooGalleryItem" data-aos="fade-up-right" data-aos-duration="1000"/>
          <img src={ANIMAL4} alt="img" className="zooGalleryItem" data-aos="fade-up-left" data-aos-duration="1000"/>
          <img src={ANIMAL5} alt="img" className="zooGalleryItem" data-aos="fade-up-right" data-aos-duration="1000"/>
          <img src={ANIMAL6} alt="img" className="zooGalleryItem" data-aos="fade-up-left" data-aos-duration="1000"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

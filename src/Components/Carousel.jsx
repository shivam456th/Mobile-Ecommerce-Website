import SimpleImageSlider from "react-simple-image-slider";
import Samsung from "../assets/pexels-webber-amir-1551084-20348037.jpg";
import Samsung2 from "../assets/pexels-zeleboba-29157232.jpg";
import Apple from "../assets/pexels-avinash-kumar-299518778-16004978.jpg";
import Apple2 from "../assets/pexels-zana-latif-2772032-18525573.jpg";

const images = [
  { url: Samsung },
  { url: Samsung2 },
  { url: Apple },
  { url: Apple2 },
];

const Slider = () => {
  return (
    <>
      <div className="my-4">
        <p className="text-2xl font-semibold text-center">
          Featured Categories
        </p>
        <p className="font-semibold text-center">
          Enjoy up to 20% OFF in the best offers
        </p>
      </div>

      <div className="w-full justify-center my-10 hidden md:flex">
        <div className="slider-container">
          <SimpleImageSlider
            width={1200}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            navStyle={2}
            navSize={40}
            navMargin={10}
            slideDuration={1.5}
            transitionSpeed={1.5}
            autoPlay={true}
            autoPlayDelay={4.5}
            pauseOnHover={true}
            style={{ position: "relative" }}
          />
        </div>
      </div>

      <div className="w-full flex justify-center my-10 md:hidden">
        <div className="slider-container max-w-[30rem] w-full">
          <SimpleImageSlider
            width="100%"
            height={300} // Adjust height to maintain aspect ratio
            images={images}
            showBullets={true}
            showNavs={true}
            navStyle={2}
            navSize={40}
            navMargin={10}
            slideDuration={1.5}
            transitionSpeed={1.5}
            autoPlay={true}
            autoPlayDelay={4.5}
            pauseOnHover={true}
            style={{ position: "relative" }}
          />
        </div>
      </div>
    </>
  );
};

export default Slider;

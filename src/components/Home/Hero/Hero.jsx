import logos from "./logosData.json";
import HeroText from "./HeroText";
import Corousel from "./Corousel";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__section container container--px">
        <HeroText />
        <div className="hero__image-content">
          <img
            src={"src/assets/images/general/brume-your-future-stuff.jpg"}
            alt="brume your future stuff"
          />
        </div>
      </div>
      <div className="logos container container--px container--pb">
        <h3>
          Used by <strong>5,000+ businesses</strong> from small startups to
          household names
        </h3>
        <Corousel logos={logos} />
      </div>
    </section>
  );
};

export default Hero;

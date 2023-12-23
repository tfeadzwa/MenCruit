import options from "./optionsData.json";
import PlatformImage from "./PlatformImage";
import { useState, useEffect } from "react";

const OnePlatform = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth < 600);
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize());

    // cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize());
    };
  }, []);

  return (
    <section className="one-platform" style={{ paddingTop: 2 + "rem" }}>
      <div className="one-platform__section container container--px container--pt flex">
        <div className="one-platform__left-section">
          <h2>
            MenCruit&#39;s the only HR platform with everything you need, for
            everyone.
          </h2>
          <p>
            We&#39;re making global team management so easy, businesses
            don&#39;t need to think twice. Whether you want to hire contractors
            and employees worldwide without opening legal entities, streamline
            HR for your global team, or consolidate payroll for everyone
            —MenCruit does it all (while keeping you compliant).
          </p>
          <button id="button">Request Demo</button>
        </div>

        <div className="one-platform__right-section">
          {/* <div className="one-platform__small-screen-img"></div> */}
          {isSmallScreen ? (
            <div className="one-platform__small-screen-img"></div>
          ) : (
            <PlatformImage />
          )}
        </div>
      </div>

      <div className="one-platform__bottom-section container container--px container--py">
        {options.map((option, index) => (
          <div key={index}>
            <div className="one-platform__option">
              <div className="one-platform__option-image">
                <img src={option.src} alt={option.alt} />
              </div>
              <div className="one-platform__option-title">{option.title}</div>
              <div className="one-platform__option-description">
                {option.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnePlatform;

// import onePlatform from "../../assets/images/general/one-platform-image.png";
import options from "./optionsData.json";
import PlatformImage from "./PlatformImage";

const OnePlatform = () => {
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
          <PlatformImage />
        </div>
      </div>

      <div className="one-platform__bottom-section container container--px container--py">
        {options.map((option) => (
          <>
            <div className="one-platform__option">
              <div className="one-platform__option-image">
                <img src={option.src} alt={option.alt} />
              </div>
              <div className="one-platform__option-title">{option.title}</div>
              <div className="one-platform__option-description">
                {option.description}
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default OnePlatform;

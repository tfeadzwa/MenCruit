// import onePlatform from "../../assets/images/general/one-platform-image.png";
import options from "./optionsData.json";

const oneplatform = () => {
  return (
    <section className="oneplatform">
      <div className="oneplatform__section container container--px container--py flex">
        <div className="text-only">
          <h2>
            Mencruit&#39;s the only HR platform with everything you need, for
            everyone.
          </h2>
          <p>
            We&#39;re making global team management so easy, businesses
            don&#39;t need to think twice. Whether you want to hire contractors
            and employees worldwide without opening legal entities, streamline
            HR for your global team, or consolidate payroll for everyone
            —Mencruit does it all (while keeping you compliant).
          </p>
          <button id="button">Request Demo</button>
        </div>
      </div>

      <div className="text-icon">
        <div className="option">
          {options.map((option) => (
            <>
              <div className="option__title">
                <img src={option.src} alt={option.alt} />
                {options.title}
              </div>
              <div className="option__description">{option.description}</div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default oneplatform;

const HrTools = () => {
  const cards = [
    {
      backgroundColor: "#0e81a0",
      imageUrl: "src/assets/images/general/visa-support.svg",
      title: "Hire or relocate team members with in-house visa support",
    },
    {
      backgroundColor: "#f78400",
      imageUrl: "src/assets/images/general/benefits.svg",
      title: "Offer country-specific benefits at competitive rates",
    },

    {
      backgroundColor: "",
      imageUrl: "src/assets/images/general/equipment.svg)",
      title: "Send equipment worldwide, without the hassle",
    },

    {
      backgroundColor: "#a041ff",
      imageUrl: "src/assets/images/general/coworking-wework.svg",
      title: "Provide your team with co-working access via WeWork",
    },

    {
      backgroundColor: "#1c4396",
      imageUrl: "src/assets/images/general/compliant-contracts.svg",
      title: "Automate any process and sync data with advanced",
    },
    {
      backgroundColor: "#00ac6b",
      imageUrl: "src/assets/images/general/integrations.svg",
      title: "Create compliant contracts with a single click",
    },
    {
      backgroundColor: "#1c4396",
      imageUrl: "src/assets/images/general/compliant-contracts.svg",
      title: "Automate any process and sync data with advanced",
    },
  ];

  return (
    <section className="hrtools container container--pall">
      <div className="hrtools__content">
        <h2>
          See you later 16 <br />
          different HR tools
        </h2>
        <p>
          We&#39;re simplifying every aspect of managing a worldwide team, from
          benefits and equity to working visas and equipment. It&#39;s one
          platform made to get you set up compliantly in just 5 minutes.
        </p>
      </div>

      <button
        type="button"
        title="button"
        className="hrtools__left-arrow arrow-buttons"
      ></button>
      <button
        type="button"
        title="button"
        className="hrtools__right-arrow arrow-buttons"
      ></button>

      <div className="hrtools__scroll-container" style={{ marginRight: "8em" }}>
        <div className="hrtools__cards-container">
          {cards.map((card, index) => (
            <div
              className="hrtools__card"
              key={index}
              style={{ backgroundColor: card.backgroundColor }}
            >
              <div
                className="hrtools__card-image"
                style={{ backgroundImage: `url(${card.imageUrl})` }}
              ></div>
              <h3>{card.title}</h3>
              <a href="#">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HrTools;

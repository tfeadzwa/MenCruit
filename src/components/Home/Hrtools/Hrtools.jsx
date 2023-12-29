import { useEffect, useRef } from "react";
import cardsData from "./cardsData.json";

const HrTools = () => {
  const scrollCardsRef = useRef(null);
  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);

  useEffect(() => {
    const scrollCards = scrollCardsRef.current;
    const scrollLength = scrollCards.scrollWidth - scrollCards.clientWidth;

    const handleScroll = () => {
      const { scrollLeft } = scrollCards;
      const { disabled: leftDisabled } = leftButtonRef.current;
      const { disabled: rightDisabled } = rightButtonRef.current;

      leftButtonRef.current.disabled = scrollLeft === 0;
      rightButtonRef.current.disabled = scrollLeft === scrollLength;

      if (leftDisabled !== leftButtonRef.current.disabled) {
        leftButtonRef.current.disabled = !leftButtonRef.current.disabled;
      }
      if (rightDisabled !== rightButtonRef.current.disabled) {
        rightButtonRef.current.disabled = !rightButtonRef.current.disabled;
      }
    };

    scrollCards?.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      scrollCards?.removeEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
    };
  });

  const scrollCards = (scrollValue) => {
    const scrollCards = scrollCardsRef.current;
    scrollCards.scrollTo({
      left: scrollCards.scrollLeft + scrollValue,
      behavior: "smooth",
      easing: "ease-in-out",
    });
  };

  return (
    <section className="hrtools container container--pall">
      <div className="hrtools__content">
        <h2>
          See you later 16 <br />
          different HR tools
        </h2>
        <p className="hrtools__text-content">
          We&#39;re simplifying every aspect of managing a worldwide team, from
          benefits and equity to working visas and equipment. It&#39;s one
          platform made to get you set up compliantly in just 5 minutes.
        </p>
      </div>

      <button
        type="button"
        title="button"
        className="hrtools__left-arrow arrow-buttons"
        ref={leftButtonRef}
        onClick={() => scrollCards(-340)}
      ></button>
      <button
        type="button"
        title="button"
        className="hrtools__right-arrow arrow-buttons"
        ref={rightButtonRef}
        onClick={() => scrollCards(338)}
      ></button>

      <div className="hrtools__scroll-container">
        <div className="hrtools__cards-container" ref={scrollCardsRef}>
          {cardsData.map((card, index) => (
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

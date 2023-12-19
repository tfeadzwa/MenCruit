import PropTypes from "prop-types";
import Logo from "./Logo";

const Carousel = ({ logos }) => {
  const renderLogos = () => {
    return logos.map((logo, index) => (
      <Logo key={index} src={logo.src} alt={logo.alt} />
    ));
  };

  return (
    <>
      <div className="looper">{renderLogos()}</div>
      <div className="looper">{renderLogos()}</div>
    </>
  );
};

Carousel.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;

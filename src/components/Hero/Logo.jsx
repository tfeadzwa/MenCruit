import PropTypes from "prop-types";

// Logo component for displaying a single logo
const Logo = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Logo;

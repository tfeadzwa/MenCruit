import PropTypes from "prop-types";

// component for displaying a single logo
const RenderImage = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

RenderImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default RenderImage;

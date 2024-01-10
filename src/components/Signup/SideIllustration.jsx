const SideIllustration = ({ title, style, h2Text, h4Text, imgSrc }) => {
  return (
    <div
      style={style}
      className="signup__side-illustration side-ill-container hide-for-mobile"
    >
      <div className="signup__side-illustration-content">
        <h2 style={{ color: style.color }} className="h2-content">
          {h2Text}
        </h2>
        <h4 style={{ color: style.color }} className="h4-content">
          {h4Text}
        </h4>
      </div>
      <div className="signup__side-illustration-image">
        <img src={imgSrc} className="img-content" alt="signup image" />
      </div>
    </div>
  );
};

export default SideIllustration;

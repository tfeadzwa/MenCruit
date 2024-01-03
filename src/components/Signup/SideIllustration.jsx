const SideIllustration = ({ imgContent, h2Content, h4Content }) => {
  return (
    <div className="signup__side-illustration side-ill-container hide-for-mobile">
      <div className="signup__side-illustration-content">
        <h2 className="h2-content"></h2>
        <h4 className="h4-content"></h4>
      </div>
      <div className="signup__side-illustration-image">
        <img className="img-content" alt="signup image" />
      </div>
    </div>
  );
};

export default SideIllustration;

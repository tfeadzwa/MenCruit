const TabContainer = (title, p1Content, p2Content, p3Content) => {
  return (
    <div className="tab__container hidden">
      <div className="tab__container-text">
        <h3 className="tab__container-title">Sign up as an organization to</h3>
        <p>Hire in 150+ countries without opening an entity</p>
        <p>Stay compliant with local tax and labor laws</p>
        <p>Pay your global team with one bulk payment</p>
      </div>

      <div className="tab__container-icon hide-for-mobile-small">
        <img src="/app/assets/icons/phone-icon.svg" alt="phone image" />
      </div>
    </div>
  );
};

export default TabContainer;

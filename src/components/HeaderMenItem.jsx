const MenuItem = ({ iconSrc, menuTitle, subMenuItems }) => {
  return (
    <div className="header__menu">
      <div className="header__menu-header">
        <img src={iconSrc} alt="" />
        <span>{menuTitle}</span>
      </div>
      <div className="header__sub-menu">
        {/* Map through sub-menu items */}
        {subMenuItems.map((item, index) => (
          <a href={item.link} key={index}>
            <div className="header__menu-sub-header">{item.title}</div>
            <span className="header__menu-sub-header-text">
              {item.description}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;

import PropTypes from "prop-types";

// MenuItem.jsx
const MenuItem = (props) => {
  const menu = props.menuItem;

  return (
    <div className="menu-overlay">
      <div className="header__menu">
        {menu.map((menuItem, index) => (
          <div className="header__sub-menu" key={index}>
            <div className="header__menu-header">
              <img src={menuItem.iconSrc} alt="" />
              <span>{menuItem.menuTitle}</span>
            </div>
            {menuItem.subMenuItems.map((item, subIndex) => (
              <a href={item.link} key={subIndex}>
                <div className="header__menu-sub-header">{item.title}</div>
                <span className="header__menu-sub-header-text">
                  {item.description}
                </span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  menuItem: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MenuItem;

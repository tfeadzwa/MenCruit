import { useEffect, useState } from "react";
import platformImage from "../../../assets/images/general/one-platform-img.jpg";
import menusData from "./menusData.json";
import "./platform.scss";

const PlatformImage = () => {
  const [menus, setMenus] = useState({ menu1: [], menu2: [] });

  useEffect(() => {
    // Assuming you fetch or process menu data here
    setMenus(menusData);
  }, []);

  return (
    <section className="platform-image">
      <div className="platform-image__menus">
        <img
          className="platform-image__image"
          src={platformImage}
          alt="platform image"
        />
        <div className="platform-image__menu1">
          {menus.menu1.map((row, index) => (
            <div className="platform-image__row" key={index}>
              <img src={row.iconSrc} alt={row.iconAlt} />
              <div className="platform-image__div-span">
                {row.title}
                <span></span>
              </div>
            </div>
          ))}
        </div>

        <div className="platform-image__menu2">
          {menus.menu2.map((row, index) => (
            <div className="platform-image__row" key={index}>
              <img
                className="platform__person-image"
                src={row.pnSrc}
                alt={row.pnAlt}
              />
              <div className="platform-image__div-span">
                {row.title}
                <span></span>
                <span></span>
              </div>
              <div className="platform-image__div-span-image">
                <img src={row.flagSrc} alt={row.flagAlt} />
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformImage;

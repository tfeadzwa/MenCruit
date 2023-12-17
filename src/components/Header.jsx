import SVGIcon from "./SVGIcon";
import MenuItem from "./HeaderMenItem";
import { useState } from "react";

const Header = () => {
  const [showDropdown, setDropdown] = useState(null);

  const menuItems = [
    // Define your menu item data here for each section...

    // MENU 1
    [
      // Menu 1, Item 1
      {
        iconSrc: "../assets/icons/hire-anywhere.svg",
        menuTitle: "Hire Anywhere",
        subMenuItems: [
          { link: "#", title: "EOR", description: "Hire employees abroad" },
          {
            link: "#",
            title: "Contractor",
            description: "Hire contractors globally",
          },
          {
            link: "#",
            title: "Shield",
            description: "Hire contractors globally",
          },
          {
            link: "#",
            title: "Immigration",
            description: "Get visa support worldwide",
          },
          {
            link: "#",
            title: "Background checks",
            description: "Run complient checks globally",
          },
        ],
      },

      // Men 1, Item 2
      {
        iconSrc: "../assets/icons/manage-your-team.svg",
        menuTitle: "Manage Your Team",
        subMenuItems: [
          {
            link: "#",
            title: "MenCruit HR",
            description: "Manage your whole workforce through MenCruit",
          },
          {
            link: "#",
            title: "Engage",
            description:
              "Slack plugins that let your team stay productive and engaged",
          },
          {
            link: "#",
            title: "Equipment",
            description: "Equip your global team",
          },
          {
            link: "#",
            title: "Equity",
            description: "Provide global teams with equity",
          },
          {
            link: "#",
            title: "Workspaces",
            description: "Flexible workspaces anywhere",
          },
          {
            link: "#",
            title: "Intergrations",
            description: "Automate your HR workflow",
          },
          {
            link: "#",
            title: "API",
            description: "Supercharge your product and processes",
          },
        ],
      },

      // Men 2, Item 2
      {
        iconSrc: "../assets/icons/pay-globally.svg",
        menuTitle: "Pay Globally",
        subMenuItems: [
          {
            link: "#",
            title: "Payroll",
            description: "Run payroll in 100+ countries",
          },
          {
            link: "#",
            title: "PEO",
            description: "Manage payroll, benefits, and HR for US teams",
          },
        ],
      },
    ],

    // MENU 2
    [
      // Menu 2, Item 1
      {
        iconSrc: "../assets/icons/business-size.svg",
        menuTitle: "Business Size",
        subMenuItems: [
          {
            link: "#",
            title: "Startup",
            description:
              "Get started on the right foot by complicantly hiring globally",
          },
          {
            link: "#",
            title: "Enterprise",
            description:
              "Effortlessly plug MenCruit into your existing workflows",
          },
        ],
      },

      // Menu 2, Item 2
      {
        iconSrc: "../assets/icons/solutions.svg",
        menuTitle: "Solutions",
        subMenuItems: [
          {
            link: "#",
            title: "Stay Complient",
            description: "Put your mind at ease",
          },
          {
            link: "#",
            title: "Run Global Payroll",
            description: "Run payroll in 100+ countries",
          },
          {
            link: "#",
            title: "Industries",
            description: "Stay at the forefront regardless of your industry",
          },
        ],
      },

      // Menu 2, Item 3
      {
        iconSrc: "../assets/icons/for-teams.svg",
        menuTitle: "For Teams",
        subMenuItems: [
          {
            link: "#",
            title: "Finance teams",
            description: "Save hours on admin and payroll",
          },
          {
            link: "#",
            title: "Legal teams",
            description: "Hire abroad without legal admin",
          },
          {
            link: "#",
            title: "Hiring Managers",
            description: "Hit your hiring targets faster",
          },
        ],
      },
    ],

    // MENU 3
    [
      {
        iconSrc: "../assets/icons/business-size.svg",
        menuTitle: "Benefits",
        subMenuItems: [
          {
            link: "#",
            title: "About us",
            description: "Everything you'd want to know",
          },
          {
            link: "#",
            title: "Compare competitors",
            description: "Why choose MenCruit",
          },
        ],
      },

      {
        iconSrc: "",
        menuTitle: "",
        subMenuItems: [
          {
            link: "#",
            title: "Case Studies",
            description: "How we help other companies",
          },
          {
            link: "#",
            title: "Solutions",
            description: "Enhance your global growth",
          },
        ],
      },
    ],
  ];

  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__left-section">
          <a href="#home" className="mencruit-logo">
            MenCruit
          </a>
          <div className="hide-for-mobile">
            <ul className="header__links">
              <li
                onMouseEnter={() => {
                  setDropdown(0);
                }}
                onMouseLeave={() => setDropdown(null)}
              >
                Platform <SVGIcon />
                {showDropdown === 0 && (
                  <MenuItem
                    iconSrc={menuItems[0].iconSrc}
                    menuTitle={menuItems[0].menuTitle}
                    subMenuItems={menuItems[0].subMenuItems}
                  />
                )}
              </li>

              <li
                onMouseEnter={() => {
                  setDropdown(1);
                }}
              >
                Companies <SVGIcon />
                {showDropdown === 1 && (
                  <MenuItem
                    iconSrc={menuItems[0].iconSrc}
                    menuTitle={menuItems[0].menuTitle}
                    subMenuItems={menuItems[0].subMenuItems}
                  />
                )}
              </li>

              <li
                onMouseEnter={() => {
                  setDropdown(2);
                }}
              >
                Resources <SVGIcon />
                {showDropdown === 2 && (
                  <MenuItem
                    iconSrc={menuItems[0].iconSrc}
                    menuTitle={menuItems[0].menuTitle}
                    subMenuItems={menuItems[0].subMenuItems}
                  />
                )}
              </li>

              <li
                onMouseEnter={() => {
                  setDropdown(3);
                }}
              >
                Pricing <SVGIcon />
                {showDropdown === 3 && (
                  <MenuItem
                    iconSrc={menuItems[0].iconSrc}
                    menuTitle={menuItems[0].menuTitle}
                    subMenuItems={menuItems[0].subMenuItems}
                  />
                )}
              </li>

              <li
                onMouseEnter={() => {
                  setDropdown(4);
                }}
              >
                About Us <SVGIcon />
                {showDropdown === 4 && (
                  <MenuItem
                    iconSrc={menuItems[0].iconSrc}
                    menuTitle={menuItems[0].menuTitle}
                    subMenuItems={menuItems[0].subMenuItems}
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="header__right-section">
          <div className="buttons">
            <a href="#login" className="login-btn">
              Log In
            </a>
            <a href="#signup" className="signup-btn">
              Join
            </a>
          </div>
          <a
            id="hamburger"
            href="#hamburger"
            className="header__toggle hide-for-desktop"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

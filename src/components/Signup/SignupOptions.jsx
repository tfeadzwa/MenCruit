import React, { useCallback, useRef, useEffect, useState } from "react";
import SideIllustration from "./SideIllustration";

const SignupOptions = () => {
  const [currOption, setCurrOption] = useState(0);
  const [className, setClassName] = useState("");
  const tabRef = useRef(null);

  const handleTabClick = useCallback((index) => {
    setCurrOption(index);
  }, []);

  useEffect(() => {
    const currTab = tabRef.current;

    if (currTab) {
      currTab.click();
      currTab.focus();
    }
  }, []);

  const optionsContent = [
    {
      sideContent: [
        {
          title: "Sign up as a Business",
          style: { color: "white", backgroundColor: "rgb(21, 53, 122)" },
          h2Text: "Hire internationally with complete confidence",
          h4Text:
            "We'll handle your worldwide compliance, payroll, and benefits, so you can fast-track your international expansion.",
          imgSrc: "src/assets/images/general/business-icon.svg",
        },

        {
          title: "Sign up as a Contractor",
          style: {
            color: "var(--dark-cerulean)",
            backgroundColor: "rgb(153, 202, 249)",
          },
          h2Text: "Work anywhere and get paid in any currency",
          h4Text:
            "Work compliantly from 150 countries, automate your invoicing, and get paid in any currency, including Crypto.",
          imgSrc: "src/assets/images/general/contractor-icon.svg",
        },

        {
          title: "Sign up as an Employee",
          style: {
            color: "var(--white)",
            backgroundColor: "rgb(189, 128, 255)",
          },
          h2Text: "One place to manage everything",
          h4Text:
            "Review your contract, access payslips and manage benefits, time off and more in just one place.",
          imgSrc: "src/assets/images/general/employee-icon.svg",
        },
      ],

      tabContent: [
        {
          tabTitle: "I'm A Business",
          title: "Sign up as an organization to",
          p1Content: "Hire in 150+ countries without opening an entity",
          p2Content: "Stay compliant with local tax and labor laws",
          p3Content: "Pay your global team with one bulk payment",
          imgSrc: "src/assets/images/general/phone-icon.svg",
        },
        {
          tabTitle: "I'm A Contractor",
          title: "Sign up as a contractor to",
          p1Content: "Work compliantly from 150+ countries",
          p2Content: "Automate your invoicing for every client",
          p3Content: "Avoid transfer fees with 7+ payment options",
          imgSrc: "src/assets/images/general/icon-contractor.svg",
        },
        {
          tabTitle: "I'm An Employee",
        },
      ],
    },
  ];

  return (
    <div className="signup">
      <header className="header">
        <nav className="container--pall flex flex-jc-sb flex-ai-c">
          {/* Left-Section */}
          <div className="header__left-section">
            <a href="../views/home.html" className="logo signup__logo">
              MenCruit
            </a>
          </div>

          {/* Right-Section */}
          <div className="right-section">
            <div className="signup__login hide-for-desktop">
              <a href="#" className="button btn-help hide-for-desktop">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                </svg>
                Help
              </a>
              <a
                href="./login.html"
                target="_parent"
                className="button hide-for-desktop"
              >
                Log In
              </a>
            </div>

            <div className="hide-for-mobile">
              <span>Already have an account?</span>
              <a href="./login.html" target="_parent" className="button">
                Log In
              </a>
            </div>
          </div>
        </nav>
      </header>

      {optionsContent.map((tab, index) => (
        <React.Fragment key={index}>
          {tab.sideContent.map(
            (tab, index) =>
              index === currOption && (
                <SideIllustration
                  key={index}
                  title={tab.title}
                  style={tab.style}
                  h2Text={tab.h2Text}
                  h4Text={tab.h4Text}
                  imgSrc={tab.imgSrc}
                />
              )
          )}

          <main className="signup__container container--pall">
            <div className="signup__tabs-container">
              <h1 className="signup__title">How will you use MenCruit?</h1>
              <h3 className="signup__subtitle">
                Please select an option below.
              </h3>

              <div className="signup__tabs">
                <div className="tab">
                  <div className="tab__btn-container">
                    {tab.tabContent.map((item, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleTabClick(index)}
                        className={`tab__button ${className}`}
                        ref={tabRef}
                      >
                        {item.tabTitle}
                      </button>
                    ))}
                  </div>

                  {tab.tabContent.map((content, index) => (
                    <div key={index}>
                      {index === currOption && index !== 2 && (
                        <div className="tab__container">
                          <div className="tab__container-text">
                            <h3 className="tab__container-title">
                              {content.title}
                            </h3>
                            <p>{content.p1Content}</p>
                            <p>{content.p2Content}</p>
                            <p>{content.p3Content}</p>
                          </div>

                          <div className="tab__container-icon hide-for-mobile-small">
                            <img src={content.imgSrc} alt="phone image" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {currOption === 2 && (
                    <div className="tab__container">
                      <div className="tab__container-text">
                        <h3 className="tab__container-title tab__employee">
                          Keep an eye on your inbox!
                        </h3>
                        <p>
                          Please sign up to MenCruit via the link in the email
                          invitation from your client. We&#39;re looking forward
                          to seeing you soon.
                        </p>
                        <button
                          className="tab__button-employee"
                          type="button"
                          title="Get to know MenCruit"
                        >
                          <div className="learn-mencruit">
                            Learn what MenCruit is
                          </div>
                          <svg
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="OpenInNewIcon"
                            height="24"
                            width="24"
                          >
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                  <button
                    className="button-blue"
                    id="next-button"
                    type="button"
                    title="Next page"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </main>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SignupOptions;

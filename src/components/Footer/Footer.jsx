const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container container--pall">
          <div className="footer__socials footer__left-section">
            <a className="footer__logo logo">MenCruit</a>
            <ul className="footer__menu">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="src/assets/icons/social-media/facebook-blue-social-icon.svg"
                    alt="facebook social"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="src/assets/icons/social-media/linkedin-social-icon.svg"
                    alt="instagram social"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="src/assets/icons/social-media/instagram-social-media.png"
                    alt="instagram social"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.x.com/" target="_blank" rel="noreferrer">
                  <img
                    src="src/assets/icons/social-media/x-twitter-social.svg"
                    alt="twiter social"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/263783948647"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="src/assets/icons/social-media/whatsapp-social.svg"
                    alt="whatsapp social"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <img
                    src="src/assets/icons/social-media/youtube-social-icon.svg"
                    alt="youtube social"
                  />
                </a>
              </li>
            </ul>
            <div className="footer__copyright">
              Copyright &#169; 2023, Tfeadzwa Tan
              <br />
              All rights reserved.
            </div>
          </div>

          <div className="footer__solutions">
            <div className="footer__heading">SOLUTIONS</div>
            <ul className="footer__menu">
              <li>
                <a href="#">Culture</a>
              </li>
              <li>
                <a href="#">HR Automation</a>
              </li>
              <li>
                <a href="#">DEI&B</a>
              </li>
              <li>
                <a href="#">Pay transparency</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
            </ul>
          </div>

          <div className="platform">
            <div className="footer__heading">PLATFORM</div>
            <ul className="footer__menu">
              <li>
                <a href="#">Platform Overview</a>
              </li>
              <li>
                <a href="#">Core HR</a>
              </li>
              <li>
                <a href="#">Onboarding</a>
              </li>
              <li>
                <a href="#">Time and Attendance</a>
              </li>
              <li>
                <a href="#">Compensation</a>
              </li>
              <li>
                <a href="#">Payroll Hub</a>
              </li>
              <li>
                <a href="#">Time Off</a>
              </li>
              <li>
                <a href="#">Surveys</a>
              </li>
              <li>
                <a href="#">Performance</a>
              </li>
              <li>
                <a href="#">People Analytics</a>
              </li>
              <li>
                <a href="#">Your Voice</a>
              </li>
              <li>
                <a href="#">Workforce Planning</a>
              </li>
            </ul>
          </div>

          <div className="resources">
            <div className="footer__heading">RESOURCES</div>
            <ul className="footer__menu">
              <li>
                <a href="#">Resource Center</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">HR Guides</a>
              </li>
              <li>
                <a href="#">Product Briefs</a>
              </li>
              <li>
                <a href="#">HR Glossary</a>
              </li>
              <li>
                <a href="#">Research</a>
              </li>
              <li>
                <a href="#">HR Tools</a>
              </li>
              <li>
                <a href="#">Webinars &#38; Events</a>
              </li>
              <li>
                <a href="#">Compare</a>
              </li>
              <li>
                <a href="#">Learn Onboarding</a>
              </li>
            </ul>
          </div>

          <div className="meetus">
            <div className="footer__heading">MEET US</div>
            <ul className="footer__menu">
              <li>
                <a href="#">Request Demo</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Why Us</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">News and Awards</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

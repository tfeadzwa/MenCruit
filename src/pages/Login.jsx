import { Link } from "react-router-dom";
import GoogleLoginButton from "../components/Login/GoogleLoginButton";
import LoginForm from "../components/Login/LoginForm";
import Seperator from "../utils/Seperator";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container container container--pall flex flex-ai-c">
        <Link to="/home" className="login__logo mencruit-logo">
          MenCruit
        </Link>

        <section className="login__text-section hide-for-mobile">
          {/* !-- ToDo -- */}
          <h1>Refer a business, get up to $200. It&#39;s that easy!</h1>
          <h3>
            For every company that joins MenCruit via your referral link, you
            will get a $200 PayPal worth of bitcoins.
          </h3>
        </section>

        <section className="login__form-section">
          <div className="login__form-content">
            <h1 className="login__title">Log in</h1>
            <GoogleLoginButton />
            <Seperator />
            <div className="login__using-email">Log in using email address</div>
            <LoginForm />
            <button className="button-blue" type="submit" id="submit">
              Log In
            </button>

            <div className="login__create-account-txt">
              Need to create an account? <a href="#">Sign Up</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;

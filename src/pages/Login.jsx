import GoogleLoginButton from "../components/Login/GoogleLoginButton";
import LoginForm from "../components/Login/LoginForm";
import Seperator from "../utils/Seperator";

const Login = () => {
  return (
    <div className="login container container--pall flex flex-ai-c">
      <a className="login__logo logo" href="../views/home.html">
        MenCruit
      </a>

      <section className="login__text-section hide-for-mobile">
        {/* !-- ToDo -- */}
        <h1>Refer a business, get up to $200. It&#39;s that easy!</h1>
        <h3>
          For every company that joins MenCruit via your referral link, you will
          get a $200 PayPal worth of bitcoins.
        </h3>
      </section>

      <section className="login__form-section">
        <div className="login__form-content">
          <h1 className="login__title">Log in</h1>
          <GoogleLoginButton />
          <Seperator />
          <div className="login__using-email">Log in using email address</div>
          <LoginForm />
        </div>
      </section>
    </div>
  );
};

export default Login;

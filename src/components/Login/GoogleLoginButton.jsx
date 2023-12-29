import PropTypes from "prop-types";

const GoogleLoginButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="button-google flex flex-jc-c flex-ai-c"
      onClick={onClick}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M17.6429 9.2067C17.6429 8.59491 17.5933 7.9798 17.4875 7.37793H8.99838V10.8437H13.8597C13.658 11.9614 13.0098 12.9502 12.0607 13.5786V15.8273H14.9609C16.664 14.2598 17.6429 11.9449 17.6429 9.2067Z"
            fill="#4285F4"
          ></path>
          <path
            d="M8.99832 18C11.4257 18 13.4727 17.203 14.9641 15.8273L12.0639 13.5786C11.257 14.1275 10.2153 14.4384 9.00162 14.4384C6.65365 14.4384 4.66284 12.8543 3.94853 10.7246H0.955692V13.0428C2.48353 16.0819 5.59541 18 8.99832 18Z"
            fill="#34A853"
          ></path>
          <path
            d="M3.94531 10.7246C3.56831 9.60685 3.56831 8.39649 3.94531 7.27872V4.96051H0.955782C-0.32072 7.5036 -0.32072 10.4997 0.955782 13.0428L3.94531 10.7246Z"
            fill="#FBBC04"
          ></path>
          <path
            d="M8.99832 3.56164C10.2814 3.54179 11.5216 4.02462 12.4508 4.91089L15.0204 2.34135C13.3933 0.813518 11.2338 -0.0264599 8.99832 -3.85195e-06C5.59541 -3.85195e-06 2.48353 1.91806 0.955692 4.9605L3.94522 7.2787C4.65623 5.14569 6.65035 3.56164 8.99832 3.56164Z"
            fill="#EA4335"
          ></path>
        </g>
        <defs>
          <clippath id="clip0">
            <rect width="17.6428" height="18" fill="white"></rect>
          </clippath>
        </defs>
      </svg>
      <div className="login__btn-text">Log In Using Google</div>
    </button>
  );
};

GoogleLoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GoogleLoginButton;

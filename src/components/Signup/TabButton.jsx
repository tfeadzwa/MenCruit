const TabButton = ({ text, tabIndex, onClick }) => {
  return (
    <button
      type="button"
      className="tab__button"
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {text}
    </button>
  );
};

export default TabButton;

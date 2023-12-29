import PropTypes from "prop-types";

const InputField = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  label,
  required,
}) => {
  return (
    <div className="input-field">
      <input
        className="input-field__text-input"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={id} className="input-field__label">
        {label}
      </label>
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

export default InputField;

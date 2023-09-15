import PropTypes from "prop-types";

const ToggleDisplay = ({ show, children }) => {
  const displayStyle = {
    display: show ? undefined : "none",
  };

  return <span style={displayStyle}>{children}</span>;
};

ToggleDisplay.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ToggleDisplay;

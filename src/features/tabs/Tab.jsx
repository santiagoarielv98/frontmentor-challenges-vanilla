import { Menu } from "semantic-ui-react";
import PropTypes from "prop-types";

const Tab = ({ name, label, onClick, active }) => (
  <Menu.Item name={name} content={label} active={active} onClick={() => onClick(name)} />
);

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Tab;

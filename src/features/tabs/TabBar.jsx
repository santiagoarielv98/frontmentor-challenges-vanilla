import PropTypes from "prop-types";

import { Menu } from "semantic-ui-react";

import Tab from "./Tab";

const TabBar = (props) => {
  const { tabs, currentTab, onTabClick, ...otherProps } = props;

  const tabItems = tabs.map((tabInfo) => {
    const { name, label } = tabInfo;

    return <Tab key={name} name={name} label={label} active={currentTab === name} onClick={onTabClick} />;
  });

  return (
    <div>
      <Menu tabular attached="top" {...otherProps}>
        {tabItems}
      </Menu>
    </div>
  );
};

TabBar.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabBar;

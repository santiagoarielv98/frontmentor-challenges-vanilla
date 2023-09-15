import PropTypes from "prop-types";

import { Menu } from "semantic-ui-react";
import ToggleDisplay from "../../common/components/ToggleDisplay";

import Tab from "./Tab";

const TabBar = (props) => {
  const { tabs, currentTab, onTabClick, ...otherProps } = props;

  const tabItems = tabs.map((tabInfo) => {
    const { name, label } = tabInfo;

    return <Tab key={name} name={name} label={label} active={currentTab === name} onClick={onTabClick} />;
  });

  const tabPanels = tabs.map((tabInfo) => {
    const { name, component: TabComponent } = tabInfo;

    return (
      <ToggleDisplay show={name === currentTab} key={name}>
        <TabComponent />
      </ToggleDisplay>
    );
  });

  return (
    <div>
      <Menu tabular attached="top" {...otherProps}>
        {tabItems}
      </Menu>
      {tabPanels}
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

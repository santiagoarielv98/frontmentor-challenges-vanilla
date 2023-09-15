import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Menu } from "semantic-ui-react";

import Tab from "./Tab";
import ToggleDisplay from "../../common/components/ToggleDisplay";

import { selectCurrentTab } from "./tabsSelectors";
import { selectTab } from "./tabsActions";

const mapState = (state) => {
  const currentTab = selectCurrentTab(state);

  return { currentTab };
};

const actions = { onTabClick: selectTab };

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
      component: PropTypes.func.isRequired,
    })
  ).isRequired,
  currentTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default connect(mapState, actions)(TabBar);

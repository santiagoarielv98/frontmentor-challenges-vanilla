import PropTypes from "prop-types";
import { useState } from "react";

import TabBar from "./TabBar";

const TabBarContainer = ({ tabs = [{ name: null }] }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].name);

  const onTabClick = (name) => {
    setCurrentTab(name);
  };

  return <TabBar currentTab={currentTab} onTabClick={onTabClick} tabs={tabs} />;
};

TabBarContainer.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default TabBarContainer;

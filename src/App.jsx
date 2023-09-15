import { Container, Header } from "semantic-ui-react";
import TabBarContainer from "./features/tabs/TabBarContainer";
import Mechs from "./features/mechs/Mechs";
import UnitInfo from "./features/unitInfo/UnitInfo";
import Pilots from "./features/pilots/Pilots";
import UnitOrganization from "./features/unitOrganization/UnitOrganization";

const tabs = [
  { name: "unitInfo", label: UnitInfo },
  { name: "pilots", label: Pilots },
  { name: "mechs", label: Mechs },
  { name: "unitOrganization", label: UnitOrganization },
];

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Header inverted as="h1">
          Project Mini-Mek
        </Header>
      </div>
      <Container>
        <TabBarContainer tabs={tabs} size="massive" />
      </Container>
    </div>
  );
};
export default App;

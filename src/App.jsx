import { Container, Header } from "semantic-ui-react";
import TabBarContainer from "./features/tabs/TabBarContainer";

const UnitInfo = () => <div>Unit Info content</div>;
const Pilots = () => <div>Pilots content</div>;
const Mechs = () => <div>Mechs content</div>;
const UnitOrganization = () => <div>Unit Organization content</div>;

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

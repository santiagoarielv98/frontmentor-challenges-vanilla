import { Container, Header } from "semantic-ui-react";
import TabBarContainer from "./features/tabs/TabBarContainer";

const tabs = [
  { name: "unitInfo", label: "Unit Info" },
  { name: "pilots", label: "Pilots" },
  { name: "mechs", label: "Mechs" },
  { name: "unitOrganization", label: "Unit Organization" },
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

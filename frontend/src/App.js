import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import { useMemo, useState } from "react";
import Incomes from "./components/Incomes/Incomes";
import Expenses from "./components/Expenses/Expenses";
function App() {
  const [active, setActive] = useState(1);
  const orbMemo = useMemo(() => {
    return <Orb></Orb>;
  }, []);
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard></Dashboard>;
      case 2:
        return <Dashboard></Dashboard>;
      case 3:
        return <Incomes></Incomes>;
      case 4:
        return <Expenses></Expenses>;
      default:
        return <Dashboard></Dashboard>;
    }
  };
  return (
    <AppStyled bg={bg} classname="App">
      {orbMemo}
      {/* <Orb></Orb> */}
      <MainLayout>
        <Navigation active={active} setActive={setActive}></Navigation>
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;

// 1:30:32

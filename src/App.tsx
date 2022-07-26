import { HashRouter } from "react-router-dom";
import { SContainer } from "./App.styled";
import Loader from "./Components/Loader/Loader";
import NavBar from "./Components/NavBar/NavBar";
import Routing from "./Routing";

const App = () => {
  return (
    <>
      <HashRouter>
        <NavBar />
        <SContainer>
          <Routing />
        </SContainer>
      </HashRouter>
      <Loader />
    </>
  );
};

export default App;

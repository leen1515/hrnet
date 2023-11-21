import Header from "./components/Header";
import ProvidesRoutes from "./providerRoutes/ProvidesRoutes";
import { GlobalStyle } from "./styled/global";

function App() {
  return (<>
    <Header/>
    <GlobalStyle/>
    <ProvidesRoutes/>
    </>
  );
}

export default App;

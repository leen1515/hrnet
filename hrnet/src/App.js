import Header from "./components/Header";
import ProvidesRoutes from "./providerRoutes/ProvidesRoutes";
import { GlobalStyle } from "./styled/global";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (<>
    <Provider store={store}>
      <Header/>
      <GlobalStyle/>
      <ProvidesRoutes/>
    </Provider>
    </>
  );
}

export default App;

import Header from "./components/Header";
import ProvidesRoutes from "./providerRoutes/ProvidesRoutes";
import { GlobalStyle } from "./styled/global";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (<>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Header/>
      <GlobalStyle/>
      <ProvidesRoutes/>
      </PersistGate>
    </Provider>
    </>
  );
}

export default App;

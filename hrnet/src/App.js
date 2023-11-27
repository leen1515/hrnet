import Header from "./components/Header";
import ProvidesRoutes from "./providerRoutes/ProvidesRoutes";
import { GlobalStyle } from "./styled/global";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                navigate('/');
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [navigate]);

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

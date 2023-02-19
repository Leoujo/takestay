import "./App.css";
import { Router } from "./router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { GoogleOAuthProvider } from "@react-oauth/google";

const theme = createTheme({
  palette: {
    primary: {
      main: "#263A5F",
    },
    secondary: {
      main: "#D4B170",
      light: "#F3F3F3",
    },
  },
});

const queryClient = new QueryClient();
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
let persistor = persistStore(store);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GoogleOAuthProvider clientId={clientId ? clientId : ""}>
              <Router />
            </GoogleOAuthProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

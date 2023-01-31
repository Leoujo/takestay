import "./App.css";
import { Router } from "./router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

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

let persistor = persistStore(store);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

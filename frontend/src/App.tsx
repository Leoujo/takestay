import "./App.css";
import { Router } from "./router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "react-query";

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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>{" "}
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

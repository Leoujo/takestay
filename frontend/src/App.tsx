import "./App.css";
import { Router } from "./router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./store/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#263A5F",
    },
    secondary: {
      main: "#D4B170",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>{" "}
    </Provider>
  );
}

export default App;

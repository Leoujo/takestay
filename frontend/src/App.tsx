import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Router } from "./router";

function App() {
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

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;

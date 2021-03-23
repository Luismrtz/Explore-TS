import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./components/theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./components/theme/Theme";

ReactDOM.render(
  <>
    <ThemeProvider theme={Theme}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </ThemeProvider>
  </>,
  document.querySelector("#root")
);

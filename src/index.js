import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import "./index.css";
import App from "./components/App";

const theme = createMuiTheme({
    palette: {
        type: "light",
    },
});

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

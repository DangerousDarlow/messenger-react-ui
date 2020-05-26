import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";

import * as serviceWorker from "./serviceWorker";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import "./index.css";
import App from "./components/App";
import reducers from "./reducers";

const theme = createMuiTheme({
    palette: {
        type: "light",
    },
});

const store = configureStore({
    reducer: reducers,
});

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

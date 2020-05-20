import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import TopBar from "./TopBar";
import Messages from "./Messages";

const styles = {
    app: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "lightyellow",
    },
    header: {
        backgroundColor: "lightsalmon",
    },
};

const App = ({ classes }) => {
    return (
        <div className={classes.app}>
            <div className={classes.header}>
                <TopBar />
            </div>
            <Router>
                <Route exact path="/" component={Messages} />
            </Router>
        </div>
    );
};

export default withStyles(styles)(App);

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { withStyles } from "@material-ui/core";

import Messages from "./Messages";
import Name from "./Name";
import TopBar from "./TopBar";

const styles = {
    root: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
    },
};

const App = ({ classes }) => {
    return (
        <div className={classes.root}>
            <div>
                <TopBar />
            </div>
            <Router>
                <Route exact path="/" component={Messages} />
                <Route exact path="/name" component={Name} />
            </Router>
        </div>
    );
};

export default withStyles(styles)(App);

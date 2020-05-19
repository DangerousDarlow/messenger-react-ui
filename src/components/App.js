import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Connect from "./Connect";
import Messages from "./Messages";
import Send from "./Send";

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
    content: {
        // Critical to limiting the content size to what’s available on screen
        overflow: "auto",

        backgroundColor: "lightgreen",
    },
    footer: {
        backgroundColor: "lightblue",
    },
};

const App = ({ classes }) => {
    return (
        <div className={classes.app}>
            <div className={classes.header}>
                <Connect />
            </div>
            <div className={classes.content}>
                <Messages />
            </div>
            <div className={classes.footer}>
                <Send />
            </div>
        </div>
    );
};

export default withStyles(styles)(App);

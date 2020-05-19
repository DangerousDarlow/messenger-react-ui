import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Connect from "./Connect";
import Messages from "./Messages";
import Send from "./Send";

const styles = {
    app: {
        display: "flex",
        height: "-webkit-fill-available",
        flexDirection: "column",
        flexWrap: "nowrap",
        backgroundColor: "lightyellow",
    },
    header: {
        flexShrink: 0,
        backgroundColor: "lightsalmon",
    },
    content: {
        flexGrow: 1,
        overflow: "auto",
        backgroundColor: "lightgreen",
    },
    footer: {
        flexShrink: 0,
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

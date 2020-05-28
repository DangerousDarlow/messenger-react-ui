import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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
    const history = useHistory();

    const isNameSet = useSelector((state) => state.user.isNameSet);

    useEffect(() => {
        if (!isNameSet && history.location.pathname !== "/name") {
            history.push("/name");
        }
    }, [history, isNameSet]);

    return (
        <div className={classes.root}>
            <div>
                <TopBar />
            </div>
            <Route exact path="/" component={Messages} />
            <Route exact path="/name" component={Name} />
        </div>
    );
};

export default withStyles(styles)(App);

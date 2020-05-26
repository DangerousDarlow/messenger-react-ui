import React, { useEffect } from "react";
import { Route, useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";

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

const App = ({ classes, isNameSet }) => {
    const history = useHistory();

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

const mapStateToProps = (state) => {
    return { isNameSet: state.user.isNameSet };
};

export default withRouter(
    connect(mapStateToProps, null)(withStyles(styles)(App))
);

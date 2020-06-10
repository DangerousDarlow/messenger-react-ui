import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { withStyles } from "@material-ui/core";

import SockJS from "sockjs-client";
import Stomp from "stompjs-websocket";

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
    const isNameSet = useSelector((state) => state.user.isNameSet);

    const history = useHistory();

    useEffect(() => {
        if (!isNameSet && history.location.pathname !== "/name") {
            history.push("/name");
        }
    }, [history, isNameSet]);

    useEffect(() => {
        if (isNameSet !== false) {
            const socket = new SockJS("http://localhost:8080/websocket");
            const stompClient = Stomp.over(socket);
            stompClient.connect({}, (frame) => {
                stompClient.send("/inbound/text", {}, "hi there");
            });
        }
    }, [isNameSet]);

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

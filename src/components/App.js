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
    const name = useSelector((state) => state.user.name);

    const history = useHistory();

    useEffect(() => {
        if (!isNameSet && history.location.pathname !== "/name") {
            history.push("/name");
        }
    }, [history, isNameSet]);

    useEffect(() => {
        if (isNameSet !== false) {
            const host = name === "local" ? "https://1f705b11909a.eu.ngrok.io" : "https://whats-crap.herokuapp.com";
            const socket = new SockJS(`${host}/websocket`);
            const stompClient = Stomp.over(socket);
            stompClient.connect({}, () => {
                stompClient.send("/inbound/text", {}, "hi there");
            });
        }
    }, [isNameSet, name]);

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

import React from "react";
import Connect from "./Connect";
import Messages from "./Messages";
import Send from "./Send";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <div className="header">
                <Connect />
            </div>
            <div className="content">
                <Messages />
            </div>
            <div className="footer">
                <Send />
            </div>
        </div>
    );
};

export default App;

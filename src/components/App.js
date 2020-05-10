import React from "react";
import Connect from "./Connect";
import Messages from "./Messages";
import Send from "./Send";
import "./App.css";

const App = () => {
    return (
        <div className="ui app">
            <div className="ui header">
                <div className="ui center aligned grid">
                    <div className="column">
                        <Connect />
                    </div>
                </div>
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
import React from "react";

import { withStyles } from "@material-ui/core/styles";

import MessageList from "./MessageList";
import Send from "./Send";

const styles = {
    content: {
        // Makes the content section fill the available space
        flexGrow: 1,

        // Limits the display of the content section to the available space
        overflow: "auto",

        backgroundColor: "lightgreen",
    },
    footer: {
        backgroundColor: "lightblue",
    },
};

const Messages = ({ classes }) => {
    return (
        <>
            <div className={classes.content}>
                <MessageList />
            </div>
            <div className={classes.footer}>
                <Send />
            </div>
        </>
    );
};

export default withStyles(styles)(Messages);

import React from "react";

import { withStyles } from "@material-ui/core";

import MessageList from "./MessageList";
import Send from "./Send";

const styles = {
    messageList: {
        // Makes the content section fill the available space
        flexGrow: 1,

        // Limits the display of the content section to the available space
        overflow: "auto",
    },
};

const Messages = ({ classes }) => {
    return (
        <>
            <div className={classes.messageList}>
                <MessageList />
            </div>
            <div>
                <Send />
            </div>
        </>
    );
};

export default withStyles(styles)(Messages);

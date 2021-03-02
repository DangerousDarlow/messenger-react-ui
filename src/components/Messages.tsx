import React from "react"
import { WithStyles, withStyles } from "@material-ui/core"
import MessageList from "./MessageList"
import Send from "./Send"
import { SocketProvider } from "./SocketProvider"

const styles = {
    messageList: {
        // Makes the content section fill the available space
        flexGrow: 1,

        // Limits the display of the content section to the available space
        overflow: "auto"
    }
}

interface MessageProps extends WithStyles<typeof styles> {
}

const Messages = ({ classes }: MessageProps) => {
    return (
        <SocketProvider>
            <div className={classes.messageList}>
                <MessageList />
            </div>
            <div>
                <Send />
            </div>
        </SocketProvider>
    )
}

export default withStyles(styles)(Messages)

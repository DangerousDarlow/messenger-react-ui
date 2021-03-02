import React from "react"
import { Container, Grid, WithStyles, withStyles } from "@material-ui/core"
import Message from "./Message"
import testMessageData from "../test_data/messages.json"

const styles = {
    root: {
        marginTop: 16
    }
}

interface MessageListProps extends WithStyles<typeof styles> {
}

const MessageList = ({ classes }: MessageListProps) => {
    return (
        <Container className={classes.root}>
            <Grid container spacing={1}>
                {testMessageData.map((message) => (
                    <Grid key={message.id} item xs={12}>
                        <Message message={message} you="anna" />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(MessageList)

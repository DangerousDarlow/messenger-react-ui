import React, { useContext, useRef } from "react"
import { SocketContext } from "./SocketProvider"
import { Container, Grid, IconButton, TextField, WithStyles, withStyles } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faToilet } from "@fortawesome/pro-duotone-svg-icons"

const styles = {
    grow: {
        flexGrow: 1
    },
    margin: {
        marginBottom: 8
    }
}

interface SendProps extends WithStyles<typeof styles> {
}

const Send = ({ classes }: SendProps) => {
    const inputField = useRef<HTMLInputElement>()
    const { send } = useContext(SocketContext)

    const sendMessage = () => {
        if (inputField.current) {
            send(inputField.current.value)
            inputField.current.value = ""
        }
    }

    return (
        <Container>
            <Grid className={classes.margin} container justify="flex-end">
                <Grid className={classes.grow} item>
                    <TextField
                        inputRef={inputField}
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Type your message here..."
                        fullWidth
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                </Grid>
                <Grid item>
                    <IconButton disabled={!send} onClick={sendMessage}>
                        <FontAwesomeIcon icon={faToilet} />
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(Send)

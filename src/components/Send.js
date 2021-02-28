import React, { useContext, useRef, useEffect } from "react";
import { SocketContext } from './SocketProvider'

import {
    Container,
    Grid,
    IconButton,
    TextField,
    withStyles,
} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToilet } from "@fortawesome/pro-duotone-svg-icons";

const styles = {
    grow: {
        flexGrow: 1,
    },
    margin: {
        marginBottom: 8,
    },
};

const Send = ({ classes }) => {

    const inputField = useRef()
    const { send } = useContext(SocketContext)

    const sendMessage = () => {
        send(inputField.current.value);
            inputField.current.value = ''
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
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    />
                </Grid>
                <Grid item>
                    <IconButton disabled={!send} onClick={sendMessage}>
                        <FontAwesomeIcon icon={faToilet} />
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
    );
};

export default withStyles(styles)(Send);

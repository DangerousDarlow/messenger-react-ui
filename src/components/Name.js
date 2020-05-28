import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button, Container, TextField, withStyles } from "@material-ui/core";

import { setName } from "../slices/userSlice";

const styles = {
    root: {
        marginTop: 16,
    },
    rightAlignedButtons: {
        float: "right",
    },
    button: {
        margin: 8,
    },
};

const Name = ({ classes }) => {
    const name = useSelector((state) => state.user.name);

    const dispatch = useDispatch();

    const [localName, setLocalName] = useState(name);

    const history = useHistory();

    const dispatchName = () => {
        dispatch(setName(localName));
        history.push("/");
    };

    const keyPressed = (event) => {
        if (event.key === "Enter") {
            dispatchName();
        }
    };

    return (
        <Container className={classes.root}>
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                placeholder="Enter your name..."
                defaultValue={localName}
                spellCheck="false"
                fullWidth
                onChange={(e) => setLocalName(e.target.value)}
                onKeyPress={(e) => keyPressed(e)}
            />
            <div className={classes.rightAlignedButtons}>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={() => dispatchName()}
                >
                    Confirm
                </Button>
            </div>
        </Container>
    );
};

export default withStyles(styles)(Name);

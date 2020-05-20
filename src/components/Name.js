import React from "react";

import { withStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";

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
    return (
        <Container className={classes.root}>
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                placeholder="Enter your name..."
                fullWidth
            />
            <div className={classes.rightAlignedButtons}>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                >
                    Confirm
                </Button>
            </div>
        </Container>
    );
};

export default withStyles(styles)(Name);

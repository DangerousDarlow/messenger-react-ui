import React from "react";

import { Grid, IconButton, TextField, withStyles } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToilet } from "@fortawesome/pro-duotone-svg-icons";

const styles = {
    grow: {
        flexGrow: 1,
    },
};

const Send = ({ classes }) => {
    return (
        <Grid container justify="flex-end">
            <Grid className={classes.grow} item>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Type your message here..."
                    fullWidth
                />
            </Grid>
            <Grid item>
                <IconButton>
                    <FontAwesomeIcon icon={faToilet} />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Send);

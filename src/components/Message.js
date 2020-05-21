import React from "react";

import { withStyles } from "@material-ui/core";
import { Grid, Paper, Typography } from "@material-ui/core";
import { lightGreen, purple } from "@material-ui/core/colors";

const styles = {
    margin: {
        margin: 8,
    },
    yourBackColour: {
        backgroundColor: lightGreen[50],
    },
    notYourBackColour: {
        backgroundColor: purple[50],
    },
    nameText: {
        color: purple[200],
        marginRight: 4,
    },
    yourMessageText: {
        color: lightGreen[800],
    },
    notYourMessageText: {
        color: purple[800],
    },
};

const Message = ({ classes, message, you }) => {
    let yours = message.from === you;

    return (
        <Paper
            className={
                yours ? classes.yourBackColour : classes.notYourBackColour
            }
            variant="outlined"
        >
            <Grid
                container
                spacing={1}
                justify={yours ? "flex-end" : "flex-start"}
            >
                <Grid className={classes.margin} item>
                    {!yours && (
                        <Typography
                            className={classes.nameText}
                            variant="body2"
                            display="inline"
                        >
                            {message.from}:
                        </Typography>
                    )}
                    <Typography
                        className={
                            yours
                                ? classes.yourMessageText
                                : classes.notYourMessageText
                        }
                        variant="body2"
                        display="inline"
                    >
                        {message.text}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default withStyles(styles)(Message);

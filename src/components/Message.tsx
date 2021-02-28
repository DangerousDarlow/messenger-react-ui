import React from 'react'
import { Grid, Paper, Typography, WithStyles, withStyles } from '@material-ui/core'
import { lightGreen, purple } from '@material-ui/core/colors'
import { IMessage } from '../model/IMessage'

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
}

interface MessageProps extends WithStyles<typeof styles> {
    message: IMessage
    you: string
}

const Message = ({ classes, message, you }: MessageProps) => {
    let yours = message.from === you

    return (
        <Paper
            className={
                yours ? classes.yourBackColour : classes.notYourBackColour
            }
            variant='outlined'
        >
            <Grid
                container
                spacing={1}
                justify={yours ? 'flex-end' : 'flex-start'}
            >
                <Grid className={classes.margin} item>
                    {!yours && (
                        <Typography
                            className={classes.nameText}
                            variant='body2'
                            display='inline'
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
                        variant='body2'
                        display='inline'
                    >
                        {message.text}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(styles)(Message)

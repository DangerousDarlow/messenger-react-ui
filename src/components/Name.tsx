import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Button, Container, createStyles, TextField, WithStyles, withStyles } from "@material-ui/core"
import { setName } from "../slices/userSlice"
import { useTypedSelector } from "../reducers"

const styles = createStyles({
    root: {
        marginTop: 16
    },
    rightAlignedButtons: {
        float: "right"
    },
    button: {
        margin: 8
    }
})

interface NameProps extends WithStyles<typeof styles> {
}

const Name = ({ classes }: NameProps) => {
    const name = useTypedSelector((state) => state.user.name)

    const dispatch = useDispatch()

    const [localName, setLocalName] = useState(name)

    const history = useHistory()

    const dispatchName = () => {
        const trimmedName = localName?.trim() || ""
        if (trimmedName.length > 0) {
            dispatch(setName(trimmedName))
            history.push("/")
        }
    }

    const keyPressed = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            dispatchName()
        }
    }

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
                onKeyPress={(e) => keyPressed(e as unknown as KeyboardEvent)} // TODO: How to reconcile these types?
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
    )
}

export default withStyles(styles)(Name)

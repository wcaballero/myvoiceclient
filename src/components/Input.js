import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import PlayArrow from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },

    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    Test: {
        color: '#fff000',
    },
});

class Input extends React.Component {
    state = {
        icon: 'Icon goes Here',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-full-width"
                        style={{ margin: 8 }}
                        placeholder="Texts Go Here"
                        className={classes.textField}
                        value={this.props.inputText}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            endAdornment: <InputAdornment position="start" ><IconButton><PlayArrow/></IconButton></InputAdornment>,
                        }}
                    />

                </form>
        </div>
        );
    }
}

Input.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Input);
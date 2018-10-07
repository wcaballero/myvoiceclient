import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const style = theme => ({
    media: {
        height: 130,
    },
    icon: {

        background: 'tomato',
        padding: '5px',
        width: '150px',
        height: '150px',
        margin: '5px',

        lineHeight: '150px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '3em',
        textAlign: 'center',
    },

});

// Ideally we would pass the img url or path and the text to be displayed
class Icon extends React.Component {



    render() {
        const { classes, icon } = this.props;
        return (
            <li className={classes.icon}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className={classes.media}
                            image={icon.imageUrl}
                            title={icon.text}
                            onClick={this.props.handleClick.bind(this, icon.text)}
                        />
                        <Typography style={{color: 'black'}} component="h3">
                            <span id="iconText">{icon.text}</span>
                        </Typography>
                    </CardActionArea>
                </Card>
            </li>
        );
    }
}

Icon.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(style)(Icon);
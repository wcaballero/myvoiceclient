import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import Input from './Input';
import Icon from './Icon';

import '../stylesheets/App.css';


const styles = theme => ({
    container: {
      padding: 0,
      margin: 0,
      listStyle: 'none',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
    },

    icon: {
        background: 'tomato',
        padding: '5px',
        width: '200px',
        height: '150px',
        margin: '5px',

        lineHeight: '150px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '3em',
        textAlign: 'center',
    },

});

class App extends Component {
    // Temp state manager. Passed down to Icon
    // todo: implement redux to manage the apps state
    state = {
        icons: [
            {
                imageUrl: '/static/images/icons/sid_v2.jpg',
                text: 'clear',
            },
            {
                imageUrl: '/static/images/icons/an.jpg',
                text: 'An'
            },
            {
                imageUrl: '/static/images/icons/sid_v2.jpg',
                text: 'Gracie',
            },
            {
                imageUrl: '/static/images/icons/an.jpg',
                text: 'Devony'
            },
            {
                imageUrl: '/static/images/icons/sid_v2.jpg',
                text: 'William',
            },
            {
                imageUrl: '/static/images/icons/an.jpg',
                text: 'Obama'
            },
            {
                imageUrl: '/static/images/icons/sid_v2.jpg',
                text: 'Clinton',
            },
            {
                imageUrl: '/static/images/icons/an.jpg',
                text: 'George'
            },
            {
                imageUrl: '/static/images/icons/sid_v2.jpg',
                text: 'Abraham',
            },
            {
                imageUrl: '/static/images/icons/an.jpg',
                text: 'An'
            },
            {
                imageUrl: '/static/images/icons/sid_v2.jpg',
                text: 'Sid',
            },
            {
                imageUrl: '/static/images/icons/an.jpg',
                text: 'An'
            },
            {
                imageUrl: '/static/images/icons/sid_v2.jpg',
                text: 'Sid',
            },
            {
                imageUrl: '/static/images/icons/an.jpg',
                text: 'An'
            },
            {
                imageUrl: '/static/images/icons/sid_v2.jpg',
                text: 'Sid',
            },
            {
                imageUrl: '/static/images/icons/an.jpg',
                text: 'An'
            },
            {
                imageUrl: '/static/images/icons/sid_v2.jpg',
                text: 'Sid',
            },
            {
                imageUrl: '/static/images/icons/an.jpg',
                text: 'An'
            },
        ],
        inputText: '',
        inputs: [],
    };


    clearInput() {
        console.log(`clearing the input`);
        this.setState({
            inputText: '',
            inputs: [],
        });
    }


    handleClick(text) {
        // this.handleChange(text);
        text = text.trim();

        if (text === 'clear') {
            this.clearInput();
            return;
        }
        console.log(`adding ${text} to input`);
        this.setState({
            inputs: [ ...this.state.inputs, text],
            inputText: this.state.inputText + ' ' + text,
        });
    }


  render() {
    const { classes } = this.props;
    return (
      <div className="App">

        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <Input inputText={this.state.inputText} />

          <ul className={classes.container}>
              {this.state.icons.map((icon, i) => {
                  return <Icon icon={icon} key={i} handleClick={this.handleClick.bind(this, icon.text)}/>
              })}
          </ul>


      </div>
    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);

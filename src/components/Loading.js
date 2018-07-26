import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

class Loading extends Component {
  state = {
    text: this.props.text,
  }
  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
  }
  static defaultProps = {
    text: 'Loading',
    speed: 300
  }
  componentDidMount() {
    const stopper = this.props.text + '...';
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState(() => ({ text: this.props.text }))
      } else {
        this.setState(({ text }) => ({ text: text + '.' }))
      }
    }, this.props.speed)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}

export default Loading;
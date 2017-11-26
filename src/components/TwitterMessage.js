import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  characterCounter = () => {
    const maxChars = 140;
    const inputChars = this.state.tweet.length;
    let remainingChars = maxChars - inputChars;
    return remainingChars;
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value
    });
    this.characterCounter();
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.handleChange} />
        <p>You have {this.characterCounter() !== 0 ? this.characterCounter() : 140 } characters remaining...</p>
      </div>
    );
  }
}

export default TwitterMessage;

import React from 'react';

const countWords = line => line.split(' ').filter(l => l).length;

const isValidPoem = poem => {
  if (poem) {
    const poemLines = poem.split('\n').filter(l => l);
    const isRightAmountOfLines = poemLines.length === 3;
    const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
    return isRightAmountOfLines && hasRightAmountOfWords;
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      bars: '',
      isValid: true
    };
  }

  handleChange = event => {
    this.setState({
      bars: event.target.value,
      isValid: isValidPoem(event.target.value)
  });
}

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.bars}
          onChange={this.handleChange}
        />
        {!this.state.isValid &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;

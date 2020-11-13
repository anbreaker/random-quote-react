import React, {Component} from 'react';
import Button from './components/Button';
import {random} from 'lodash';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.selectedQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/kasappeal/nerdquotes/master/README.md')
      .then((data) => data.text())
      .then((data) => {
        const quotes = [...data.match(/^[>*]\s?(.+)\*?$/gm)];

        this.setState({quotes}, this.assignNewQuoteIndex);
      });
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }

    const phrase = `${this.state.quotes[this.state.selectedQuoteIndex]} - Author ${
      this.state.quotes[this.state.selectedQuoteIndex + 1]
    }`;

    return phrase;
  }

  generateNewQuoteIndex() {
    if (!this.state.quotes.length) return undefined;
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({selectedQuoteIndex: this.generateNewQuoteIndex()});
  }

  render() {
    return (
      <div className="App" id="quote-box">
        {this.selectedQuote}
        <Button buttonDisplayName="Next Quote" clickHandler={this.assignNewQuoteIndex} />
      </div>
    );
  }
}

//15

export default App;

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
    fetch('https://raw.githubusercontent.com/anbreaker/nerdquotes/master/README.md')
      .then((data) => data.text())
      .then((data) => {
        const regex = /^[\sd{6-}][>*]\s?(.+)\*?$/gm;
        const phrasesKeepcoding = data.split(regex).join('').trim();
        const quotes = phrasesKeepcoding.split('------');

        this.setState({quotes}, this.assignNewQuoteIndex);
      });
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }

    let phraseAuthor = this.statequotes[this.state.selectedQuoteIndex].split('\n');
    const author = phraseAuthor[phraseAuthor.length - 3];

    phraseAuthor = phraseAuthor.filter((item) => {
      if (item !== author) {
        return item;
      }
    });

    const phraseWeb = {
      frase: phraseAuthor,
      autor: author.replace('*', '').replace('*', ''),
    };

    // const phrase = `${this.state.quotes[this.state.selectedQuoteIndex]}`;

    return phraseWeb;
  }

  generateNewQuoteIndex() {
    if (!this.state.quotes.length) return undefined;
    const numRandom = random(0, this.state.quotes.length - 1);
    return numRandom;
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

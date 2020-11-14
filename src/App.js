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
        let quotes = [];
        const regex = /^[\sd{6-}][>*]\s?(.+)\*?$/gm;

        let phrasesKeepcoding = data.split(regex).join('');
        phrasesKeepcoding = phrasesKeepcoding.split('------');

        phrasesKeepcoding.map((item) => {
          let phrase = item.split('\n');
          let author = phrase[phrase.length - 2];

          phrase = phrase.filter((item) => {
            if (item !== author) {
              return item;
            }
            return null;
          });

          quotes.push({
            phrase: phrase[0],
            author: phrase[1],
          });
          return quotes;
        });

        // console.log(quotes[random(0, quotes.length - 1)]);
        this.setState({quotes}, this.assignNewQuoteIndex);
      });
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }

    return `${this.state.quotes[this.state.selectedQuoteIndex].phrase} - Autor: ${
      this.state.quotes[this.state.selectedQuoteIndex].author
    }`;
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

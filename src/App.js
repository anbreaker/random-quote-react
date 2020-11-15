import React, {Component} from 'react';
import {random} from 'lodash';
import 'typeface-roboto';
import {Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import QuoteKeepcoding from './components/QuoteKeepcoding';
import './App.css';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
  },
};

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

    return this.state.quotes[this.state.selectedQuoteIndex];
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
      <Grid
        className={this.props.classes.container}
        id="quote-box"
        justify="center"
        container>
        <Grid item>
          <QuoteKeepcoding
            selectedQuote={this.selectedQuote}
            assignNewQuoteIndex={this.assignNewQuoteIndex}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);

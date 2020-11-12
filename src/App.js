import React, {Component} from 'react';
import Button from './components/Button';
import './App.css';

class App extends Component {
  nextQuoteHandler() {
    console.log('Hola');
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <Button buttonDisplayName="Next Quote" clickHandler={this.nextQuoteHandler} />
      </div>
    );
  }
}

//15

export default App;

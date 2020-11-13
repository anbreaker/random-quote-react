import React from 'react';
import Button from './Button';

const QuoteKeepcoding = (props) => {
  <>
    {props.selectedQuote ? `${props.selectedQuote}` : ''}
    <Button buttonDisplayName="Next Quote" clickHandler={props.assignNewQuoteIndex} />;
  </>;
};

export default QuoteKeepcoding;

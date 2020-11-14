import React from 'react';
import Button from './Button';

const QuoteKeepcoding = (props) => {
  <>
    {props.selectedQuote
      ? `"${props.selectedQuote.phrase}" - Autor: ${props.selectedQuote.author}`
      : ''}
    <Button buttonDisplayName="Next Quote" clickHandler={props.assignNewQuoteIndex} />
  </>;
};

export default QuoteKeepcoding;

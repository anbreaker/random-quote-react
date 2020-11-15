import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from './Button';

const QuoteKeepcoding = (props) => {
  return (
    <>
      {props.selectedQuote
        ? `"${props.selectedQuote.phrase.replace('*', '')}"
             - Autor: ${props.selectedQuote.author.replace('*', '')}`
        : ''}
      <Button buttonDisplayName="Next Quote" clickHandler={props.assignNewQuoteIndex} />
    </>
  );
};

export default QuoteKeepcoding;

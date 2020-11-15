import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from './Button';

const QuoteKeepcoding = (props) => {
  return (
    <>
      <Typography id="text">
        {props.selectedQuote
          ? `"${props.selectedQuote.phrase.replace('*', '')}"
             - ${props.selectedQuote.author.replace('*', '')}`
          : ''}
      </Typography>
      <br />
      <Typography>
        <Button buttonDisplayName="Next Quote" clickHandler={props.assignNewQuoteIndex} />
      </Typography>
    </>
  );
};

export default QuoteKeepcoding;

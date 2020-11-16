import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const QuoteKeepcoding = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography id="text">
          {props.selectedQuote
            ? `"${props.selectedQuote.phrase.replace('*', '')}"
             - ${props.selectedQuote.author.replace('*', '')}`
            : ''}
        </Typography>
        <br />
      </CardContent>
      <CardActions>
        <Button size="large" onClick={props.assignNewQuoteIndex}>
          Next Quote
        </Button>
      </CardActions>
    </Card>
  );
};

export default QuoteKeepcoding;

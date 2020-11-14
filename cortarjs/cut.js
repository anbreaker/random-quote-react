const fetch = require('node-fetch');
const fs = require('fs');

fetch('https://raw.githubusercontent.com/kasappeal/nerdquotes/master/README.md')
  .then((data) => data.text())
  .then((data) => {
    const regex = /^[\sd{6-}][>*]\s?(.+)\*?$/gm;

    const phrasesKeepcoding = data.split(regex).join('').trim();
    const phrase = phrasesKeepcoding.split('------');

    let phraseAuthor = phrase[296].split('\n');
    const author = phraseAuthor[phraseAuthor.length - 3];

    phraseAuthor = phraseAuthor.filter((item) => {
      if (item !== author) {
        return item;
      }
    });

    const json = {
      autor: author,
      frase: phraseAuthor,
    };

    console.log(json);

    fs.writeFile('phrasesKeepcoding.md', phrasesKeepcoding, (error) => {
      if (error) return console.error(error);
    });
  });

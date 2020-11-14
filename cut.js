const fetch = require('node-fetch');
const {random} = require('lodash');
const fs = require('fs');

fetch('https://raw.githubusercontent.com/anbreaker/nerdquotes/master/README.md')
  .then((data) => data.text())
  .then((data) => {
    let jsonFormat = [];
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
      });

      jsonFormat.push({
        phrase: phrase[0],
        author: phrase[1],
      });
    });

    console.log(jsonFormat[random(0, jsonFormat.length - 1)]);

    // fs.writeFile('phrasesKeepcoding.json', JSON.stringify(jsonFormat), (error) => {
    //   if (error) return console.error(error);
    // });
  });

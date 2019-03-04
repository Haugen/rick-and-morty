const fs = require('fs');

const express = require('express');

const app = express();

app.use('/episodes', (req, res) => {
  const episodes = JSON.parse(fs.readFileSync(__dirname + '/episodes.json'));
  res.json(episodes);
});

app.use('/characters', (req, res) => {
  const characters = JSON.parse(
    fs.readFileSync(__dirname + '/characters.json')
  );
  res.json(characters);
});

app.listen(3001);

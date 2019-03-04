const fs = require('fs');

const express = require('express');

const app = express();

app.use('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

app.use('/episode/:id', (req, res) => {
  const episode = JSON.parse(fs.readFileSync(__dirname + '/episode.json'));
  res.json(episode);
});

app.use('/episode', (req, res) => {
  const episodes = JSON.parse(fs.readFileSync(__dirname + '/episodes.json'));
  res.json(episodes);
});

app.use('/character', (req, res) => {
  const characters = JSON.parse(
    fs.readFileSync(__dirname + '/characters.json')
  );
  res.json(characters);
});

app.listen(3001);

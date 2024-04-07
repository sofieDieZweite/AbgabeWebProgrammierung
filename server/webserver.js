const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 5000;

const dataFilePath = 'comments.json';

// Verarbeitung von JSON-Daten
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000', // Nur Anfragen von Port 3000 annehmen
  optionsSuccessStatus: 200
}));

let comments = loadComments(dataFilePath);

// Funktion zum Laden von Daten aus der comments.json datei
function loadComments(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (error) {
    console.error('Fehler beim Laden der Daten aus der Datei:', error);
    return [];
  }
}

// Funktion zum Speichern von Daten in der comments.json datei
function saveComments(data, filePath) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.error('Fehler beim Speichern der Daten in die Datei:', error);
  }
}

// Hinzufügen eines Kommentars in der comments.json datei
app.post('/api/comments', (req, res) => {
  const { author, content } = req.body;
  const newComment = { author,content };
  comments.push(newComment);
  saveComments(comments, dataFilePath);
  res.status(200).send('Kommentar erfolgreich hinzugefügt');
});

// Alle Kommentare aus der comments.json datei abrufen
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
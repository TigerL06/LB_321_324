const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MongoDB-Verbindungsdetails
const url = 'mongodb+srv://HeissiSchoggi:GurgeleIschWichtig420@m324m321.bdyvh.mongodb.net/?retryWrites=true&w=majority&appName=M324M321'; // Dein Connection-String
const dbName = 'notizdb'; // Datenbankname
let db;

// Middleware
app.use(bodyParser.json());

// Verbindung zur MongoDB herstellen
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Mit MongoDB verbunden...');
        db = client.db(dbName);
    })
    .catch(error => {
        console.error('Fehler bei der Verbindung zur MongoDB:', error.message);
        process.exit(1);
    });

// --- CRUD-Funktionen ---

// 1. Alle Notizen abrufen
app.get('/notes', (req, res) => {
    db.collection('notes')
        .find()
        .toArray()
        .then(notes => res.status(200).json(notes))
        .catch(error => res.status(500).json({ error: error.message }));
});

// 2. Eine spezifische Notiz abrufen
app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    db.collection('notes')
        .findOne({ _id: new ObjectId(id) })
        .then(note => {
            if (!note) return res.status(404).json({ error: 'Notiz nicht gefunden' });
            res.status(200).json(note);
        })
        .catch(error => res.status(500).json({ error: error.message }));
});

// 3. Neue Notiz erstellen
app.post('/notes', (req, res) => {
    const newNote = req.body; // erwartet { title, mainText }
    newNote.lastModified = new Date();
    db.collection('notes')
        .insertOne(newNote)
        .then(result => res.status(201).json(result.ops[0]))
        .catch(error => res.status(500).json({ error: error.message }));
});

// 4. Notiz aktualisieren
app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const updatedNote = req.body;
    updatedNote.lastModified = new Date();
    db.collection('notes')
        .updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedNote }
        )
        .then(result => {
            if (result.matchedCount === 0) return res.status(404).json({ error: 'Notiz nicht gefunden' });
            res.status(200).json({ message: 'Notiz aktualisiert' });
        })
        .catch(error => res.status(500).json({ error: error.message }));
});

// 5. Notiz löschen
app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    db.collection('notes')
        .deleteOne({ _id: new ObjectId(id) })
        .then(result => {
            if (result.deletedCount === 0) return res.status(404).json({ error: 'Notiz nicht gefunden' });
            res.status(200).json({ message: 'Notiz gelöscht' });
        })
        .catch(error => res.status(500).json({ error: error.message }));
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});

const db = require('./db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, theme TEXT, title TEXT, introduction TEXT, body TEXT, conclusion TEXT, author TEXT, datetime TEXT)');
});
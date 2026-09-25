import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend files from the 'dist' directory
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

// Initialize SQLite database
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Database connected');
    
    // Create tables if they don't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS registrations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT NOT NULL,
        phone TEXT NOT NULL,
        industry TEXT NOT NULL,
        preferredPartner TEXT,
        needsInterpreter BOOLEAN,
        needsTransportation BOOLEAN,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        companyId TEXT NOT NULL,
        timeSlot TEXT NOT NULL,
        needsInterpreter BOOLEAN,
        needsPilot BOOLEAN,
        needsRD BOOLEAN,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});

// API Endpoints

// 1. Submit Registration
app.post('/api/register', (req, res) => {
  const { 
    name, email, company, phone, industry, 
    preferredPartner, needsInterpreter, needsTransportation 
  } = req.body;

  const sql = `
    INSERT INTO registrations (name, email, company, phone, industry, preferredPartner, needsInterpreter, needsTransportation)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  const params = [
    name, email, company, phone, industry, 
    preferredPartner || null, 
    needsInterpreter ? 1 : 0, 
    needsTransportation ? 1 : 0
  ];

  db.run(sql, params, function(err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save registration' });
    } else {
      res.status(201).json({ success: true, id: this.lastID });
    }
  });
});

// 2. Submit Booking
app.post('/api/book', (req, res) => {
  const { 
    companyId, timeSlot, 
    needsInterpreter, needsPilot, needsRD 
  } = req.body;

  const sql = `
    INSERT INTO bookings (companyId, timeSlot, needsInterpreter, needsPilot, needsRD)
    VALUES (?, ?, ?, ?, ?)
  `;
  
  const params = [
    companyId, timeSlot, 
    needsInterpreter ? 1 : 0, 
    needsPilot ? 1 : 0, 
    needsRD ? 1 : 0
  ];

  db.run(sql, params, function(err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save booking' });
    } else {
      res.status(201).json({ success: true, id: this.lastID });
    }
  });
});

// 3. Subscribe to newsletter
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const sql = `INSERT INTO subscribers (email) VALUES (?)`;
  
  db.run(sql, [email], function(err) {
    if (err) {
      // Ignore unique constraint errors for duplicate emails, just return success
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(200).json({ success: true, message: 'Already subscribed' });
      }
      console.error(err);
      res.status(500).json({ error: 'Failed to subscribe' });
    } else {
      res.status(201).json({ success: true, id: this.lastID });
    }
  });
});

// 4. Admin: Get all registrations (For viewing)
app.get('/api/admin/registrations', (req, res) => {
  db.all('SELECT * FROM registrations ORDER BY createdAt DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// 4. Admin: Get all bookings
app.get('/api/admin/bookings', (req, res) => {
  db.all('SELECT * FROM bookings ORDER BY createdAt DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Catch-all route to serve React App for any non-API routes
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT);
});

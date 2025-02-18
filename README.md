# 📝 Fullstack To-Do App mit Node.js & Vanilla JavaScript

Dieses Repository enthält eine vollständige To-Do-App mit **Backend und Frontend**. Die API ist in **plain Node.js** implementiert und das Frontend nutzt **Vanilla JavaScript**.

---

## 📚 Projektstruktur

```
todo-app/
├── backend/                # Enthält die vollständige API
│   ├── index.js            # Hauptserver mit Routing
│   ├── controllers/        # API-Logik
│   ├── services/           # Business-Logik
│   ├── data/               # JSON-Daten
│
├── frontend/               # Enthält das Frontend
│   ├── index.html          # Hauptseite der App
│   ├── styles.css          # Styling der UI
│   ├── scripts/            # Enthält die JavaScript-Logik
│   │   ├── TodoModel.js    # Model für die API-Kommunikation
│   │   ├── TodoView.js     # UI-Logik
│   │   ├── TodoController.js # Steuerung der App
│
├── package.json            # Enthält alle Skripte für Backend und Frontend
├── README.md               # Diese Anleitung
```

---

## 🛠️ Installation & Start

### Voraussetzungen

- **Node.js** (mindestens Version 18)
- **npm** (wird mit Node installiert)

### 1️⃣ Repository klonen

```bash
git clone <repository-url>
cd todo-app
```

### 2️⃣ Abhängigkeiten installieren

```bash
npm install
```

### 3️⃣ App starten (Backend + Frontend gleichzeitig)

```bash
npm run dev
```

### Manuelles Starten

Falls du das Backend und Frontend separat starten möchtest:

```bash
npm run start:backend
npm run start:frontend
```

Die App läuft dann unter [**http://localhost:8080**](http://localhost:8080) (Frontend) und nutzt das Backend unter [**http://localhost:3000**](http://localhost:3000).

---

## 📌 API-Endpunkte (Swagger UI)

Nach dem Start des Servers ist Swagger UI unter folgender URL erreichbar:

http://localhost:3000/swagger

Hier können alle Endpunkte getestet und ihre Strukturen eingesehen werden.

---

## 🎯 Aufgabenstellung für Teilnehmer

1. **Verstehe die Struktur von Backend und Frontend.**
2. **Binde das Frontend an die API an** – Die Hauptaufgabe besteht darin, die UI mit der API zu verbinden.

---

## 📋 Cheatsheets

### **1️⃣ Fetch API nutzen**
```javascript
// GET - Daten abrufen
fetch('http://localhost:3000/todos')
  .then(response => response.json())
  .then(data => console.log(data));

// POST - Neues To-Do hinzufügen
fetch('http://localhost:3000/todos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Neues To-Do', done: false })
});

// PUT - To-Do aktualisieren
fetch('http://localhost:3000/todos/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ done: true })
});

// DELETE - To-Do löschen
fetch('http://localhost:3000/todos/1', {
  method: 'DELETE'
});
```

### **2️⃣ DOM-Manipulation**
```javascript
// Element auswählen und Inhalt ändern
document.querySelector('#output').textContent = 'Neuer Inhalt';

// Neues Element erstellen und anhängen
const newElement = document.createElement('p');
newElement.textContent = 'Ich bin neu!';
document.body.appendChild(newElement);

// Element entfernen
document.querySelector('#output').remove();
```

### **3️⃣ Event Listener setzen**
```javascript
// Klick-Event
const button = document.querySelector('#myButton');
button.addEventListener('click', () => {
    alert('Button wurde geklickt!');
});

// Input-Event
const input = document.querySelector('#myInput');
input.addEventListener('input', (event) => {
    console.log('Eingegebener Text:', event.target.value);
});

// Formular absenden
const form = document.querySelector('#myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formular wurde abgeschickt!');
});
```

---

## 🚀 Viel Spaß beim Coden! 🎉


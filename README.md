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

## 🚀 Viel Spaß beim Coden! 🎉


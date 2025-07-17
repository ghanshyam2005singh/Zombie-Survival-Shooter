Let’s go! 🎮 We're building a **Zombie Survival Shooter Game** — top-down view, player vs zombies, with score tracking, health system, and Firebase integration.

You’ll use:

* **🕹️ Game Engine**: Phaser 3 (browser-based 2D game engine)
* **🛠️ Backend**: Firebase (for score + auth)
* **🌐 Deployment**: Vercel (free, fast)
* **🔡 Language**: JavaScript (you can switch to TypeScript later if you want)

---

# ✅ GAME OVERVIEW

| Feature              | Description                                              |
| -------------------- | -------------------------------------------------------- |
| Player Movement      | WASD or Arrow Keys                                       |
| Shooting             | Mouse click or spacebar                                  |
| Enemies              | Zombies follow and attack player                         |
| Health + Score       | Displayed onscreen; reset when dead                      |
| Firebase Integration | Save user high scores (later: auth, levels, leaderboard) |
| Deployment           | Vercel (1-click deploy from GitHub)                      |

---

# 📁 FOLDER STRUCTURE

```bash
zombie-survival-game/
├── public/
│   ├── assets/
│   │   ├── player.png
│   │   ├── zombie.png
│   │   ├── bullet.png
│   │   └── tileset.png (if map needed)
│   └── index.html
├── src/
│   ├── scenes/
│   │   ├── BootScene.js
│   │   ├── GameScene.js
│   │   └── UIScene.js
│   ├── firebase/
│   │   └── firebaseConfig.js
│   └── main.js
├── .gitignore
├── package.json
├── README.md
└── vercel.json
```

---

# 📦 PACKAGE REQUIREMENTS

```bash
npm init -y
npm install phaser firebase
```

For dev:

```bash
npm install --save-dev parcel
```

---

# 📝 README.md

````markdown
# 🧟‍♂️ Zombie Survival Shooter Game (Phaser + Firebase)

A top-down 2D zombie survival game made using **Phaser 3**, with **Firebase** for storing high scores. Easily deployable to **Vercel** for web.

## 🎮 Features

- WASD Movement + Mouse Shooting
- Zombies follow and attack player
- Health bar, Score system
- Save high scores to Firebase
- 1-click deployment via Vercel

## 🧱 Tech Stack

- **Frontend**: Phaser 3 (JavaScript)
- **Backend**: Firebase (Firestore)
- **Deploy**: Vercel (free hosting)
- **Bundler**: Parcel (for fast dev)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/ghanshyam2005singh/zombie-survival-game.git
cd zombie-survival-game
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Firebase

* Create Firebase Project
* Enable Firestore
* Enable Authentication (optional)
* Create `/src/firebase/firebaseConfig.js`:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
```

### 4. Start Dev Server

```bash
npx parcel public/index.html --open
```

### 5. Build for Production

```bash
npx parcel build public/index.html --dist-dir dist
```

---

## 📦 Deployment (Vercel)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Set `build` command: `parcel build public/index.html --dist-dir dist`
5. Set `output` directory: `dist`
6. Deploy!

---

## 🧠 TODO (Upgrade Ideas)

* Add different weapons
* Add player upgrades / shop
* Add multiplayer with WebSocket
* Build a mobile version with React Native

---

## 📸 Screenshots

*(Add your own)*

---

## 🧑‍💻 Author

Built by [@ghanshyam2005singh](https://github.com/ghanshyam2005singh)

````

---
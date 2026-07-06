# 🎵 Gaana AI Vibe Curator

An AI-powered music discovery prototype that transforms a user's mood, memory, or moment into a curated playlist of fictional independent regional Indian artists using Anthropic Claude.

## ✨ Features

* 🎧 Mood-based music discovery
* 🌧️ Supports English, Hindi, and Hinglish prompts
* 🤖 AI-generated playlist with contextual explanations
* 🎨 Modern responsive UI
* 🔒 Secure backend using environment variables
* ⚡ Serverless API powered by Vercel

---

## 📂 Project Structure

```text
gaana-vibe-curator/
│
├── api/
│   └── curate.js
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│
├── index.html
├── package.json
├── vercel.json
├── .gitignore
├── .env.local
└── README.md
```

---

## 🛠️ Prerequisites

Install the following software:

* Node.js (v20 or later)
* Git
* Visual Studio Code
* A Vercel account
* An Anthropic API key

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/gaana-vibe-curator.git
```

Move into the project:

```bash
cd gaana-vibe-curator
```

Install dependencies:

```bash
npm install
```

---

## 🔑 Environment Variables

Create a file named `.env.local` in the project root.

```env
ANTHROPIC_API_KEY=your_api_key_here
```

Never commit this file to version control.

---

## ▶️ Run Locally

Start the development server:

```bash
vercel dev
```

Open:

```
http://localhost:3000
```

---

## ☁️ Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the environment variable:

```
ANTHROPIC_API_KEY
```

4. Redeploy the project.

---

## 📡 API Endpoint

### POST `/api/curate`

**Request**

```json
{
  "prompt": "Late night drive in Bangalore during rain"
}
```

**Response**

```json
{
  "vibe_summary": "Rainy Midnight Drive",
  "songs": [
    {
      "track": "Neon Monsoon",
      "artist": "The Eastern Echoes",
      "region": "Indie Hindi",
      "vibe": "A reflective track with mellow rhythms perfect for solitary drives."
    }
  ]
}
```

---

## 🧰 Technology Stack

* HTML5
* CSS3
* JavaScript (ES Modules)
* Vercel Serverless Functions
* Anthropic Claude API

---

## 📸 Screenshots

You can add screenshots of the application in this section after deployment.

---

## 🔮 Future Improvements

* Real music catalog integration
* Spotify and Gaana authentication
* Playlist export
* Voice input
* Mood detection from images
* Multilingual recommendations
* Music previews
* User history and favorites

---

## 📄 License

This project is provided for educational and demonstration purposes. Modify and extend it as needed.

---

## 👤 Author

**Your Name**

Built as an AI-native music discovery prototype using modern web technologies and large language models.

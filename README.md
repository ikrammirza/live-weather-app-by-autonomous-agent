# 🌤️ Live Weather App (Built via Autonomous Agent Workflow)

This project is a simple Node.js application that fetches real-time weather data for London using the **Open-Meteo API** and generates a formatted `report.txt`.

The unique aspect of this project is not just the app itself — but **how it was built**.

It was fully developed through an autonomous agent workflow using Claude Code CLI routed through a local orchestration proxy.

---
## Proxy Terminal Proof

<img width="1590" height="1010" alt="proxy-banner" src="https://github.com/user-attachments/assets/c4d4d718-e840-4094-9e4b-fc032c096509" />
- Uses Open-Meteo API (no API key required)<img width="1590" height="1022" alt="Proxy running on localhos 8080" src="https://github.com/user-attachments/assets/9ccea66a-77d7-4ce1-b831-d73ee9ebfe82" />
<img width="1590" height="1002" alt="Quota exhausted log" src="https://github.com/user-attachments/assets/32f84176-264c-4efb-add4-2d84ae682d89" />




## 🚀 What This App Does

- Fetches live weather data for London (51.5074°N, -0.1278°W)

- Converts WMO weather codes into human-readable conditions
- Generates a timestamped `report.txt`
- Runs as a simple Node.js script

---

## 🧠 How It Was Built (Agentic Workflow)

The entire project lifecycle was executed through an AI agent:

- Created project folder
- Initialized npm project
- Configured ES modules (`"type": "module"`)
- Wrote the weather fetching script
- Executed and validated output
- Initialized Git repository
- Renamed branch to `main`
- Pushed to GitHub

All from a single high-level instruction.

---

## 🏗️ Architecture Overview

Claude Code CLI
↓
Antigravity Proxy (localhost:8080)
↓
Upstream Model Backend
↓
Agent executes terminal commands + file operations

## 
The proxy layer handled:

- Hybrid account distribution  
- Rate limit handling (`429 RESOURCE_EXHAUSTED`)  
- Capacity errors (`503 MODEL_CAPACITY_EXHAUSTED`)  
- Account validation issues (`403 VALIDATION_REQUIRED`)  

This allowed uninterrupted execution under real-world constraints.

---

## 📂 Project Structure
weather-app/
│
├── package.json
├── weather.js
└── report.txt



---

## 🛠️ Setup & Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ikrammirza/live-weather-app-by-autonomous-agent.git
cd live-weather-app-by-autonomous-agent

---

## 🛠️ Setup & Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ikrammirza/live-weather-app-by-autonomous-agent.git
cd live-weather-app-by-autonomous-agent

2️⃣ Install dependencies

No external packages required — uses native Node.js APIs.

3️⃣ Run the script

node weather.js

This will generate or update:

report.txt
📡 API Used

Open-Meteo API
https://open-meteo.com/

Free

No API key required

Provides real-time weather data

📌 Sample Output
Weather Report - London
Generated: Mon, 02 Mar 2026 07:41:39 GMT
Condition: Overcast
Temperature: 9.2°C (feels like 6.1°C)
Humidity: 78%
Wind: 8.5 mph @ 180°
💡 Key Takeaways

This project demonstrates:

Autonomous agent-driven development

CLI-based orchestration

Error recovery under quota and capacity constraints

Infrastructure-aware AI workflows

End-to-end Git lifecycle automation

The goal was not just to build a weather app —
but to explore resilient agentic system design.

👤 Author

Mirza Ikram

📄 License

ISC

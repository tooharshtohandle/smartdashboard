# Next Generation Supply Chain Dashboard  
**LLM-Powered Supply Chain Analytics with Dynamic KPI Visualization**

## Overview
This project is a full-stack **Supply Chain Analytics Dashboard** built using the **MERN stack**, enhanced with **Large Language Model (LLM) integration** to enable natural-language–driven data visualization.

Users can enter plain-English queries to generate supply chain KPIs. These queries are interpreted by an LLM, converted into executable SQL queries, and visualized dynamically as graphs on the dashboard.

---

## Key Features
- **Natural Language to Graph Generation**
  - User queries are processed using the OpenAI API
  - LLM converts text inputs into structured SQL queries
- **Dynamic KPI Visualization**
  - Graphs are generated at runtime (no hardcoded KPIs)
  - Currently supports **bar charts** and **pie charts**
- **Full-Stack MERN Architecture**
  - React frontend for interactive dashboards
  - Node.js + Express backend for API handling
  - Database layer for supply chain data extraction
- **Configurable & Extensible Design**
  - System prompts are database-specific and modular
  - Designed to support future database and LLM upgrades

---

## Architecture & Workflow
1. User submits a natural-language query from the frontend
2. Backend forwards the query to the LLM (OpenAI API)
3. LLM generates a corresponding SQL query
4. SQL query is executed on the database
5. Retrieved data is sent back to the frontend
6. Frontend dynamically renders the appropriate KPI graph

---

## Tech Stack
- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** SQL (currently using mock data)  
- **LLM Integration:** OpenAI API  
- **Visualization:** Dynamic bar and pie charts  

---

## Running the Project
- **Backend Server:** Runs on port `7000`
- **Frontend (React):** Runs on port `5000`

### Configuration
- Update the `callingChatGPT.js` file with your **OpenAI API key**
- LLM-based graph generation will not function without a valid API key

---

## Data & Configuration Notes
- Database-related queries are defined in the `dbQueries` file
- System prompts inside `callingChatGPT.js` are **database-specific**
  - Modify prompts if the schema or data structure changes
- Sample dataset (mock data):  
  https://1drv.ms/x/s!Alrm68gM8UZQilKDFGHcUKv5la0X?e=cdrvgV

---

## Current Limitations
- Only **bar charts** and **pie charts** are supported
- KPI data is partially sourced from mock data files
- Data may be inconsistent and produce unexpected results
- Uses an external LLM (ChatGPT) instead of a custom model

---

## Future Enhancements
- Replace mock data with a fully dynamic production database
- Support additional chart types (line, scatter, heatmaps)
- Add predictive analytics and anomaly detection
- Integrate a self-hosted or custom LLM
- Improve scalability and security features

---

## Disclaimer
This project is a prototype focused on system architecture, LLM integration, and dynamic data visualization. Data inconsistencies are expected at this stage and will be addressed in future iterations.

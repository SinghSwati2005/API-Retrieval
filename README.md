

#  Topic Retrieval API

This project simulates TOTLE’s `/api/catalogue/` by retrieving topics from a JSON file with **search** and **sort** functionality.  
Built using **Node.js** and **Express**, it demonstrates API design, error handling, and query-based filtering.

---

##  Features
- **Endpoint**: `GET /api/topic-api?search=<query>&sort=<field>`
- **Search**: Case-insensitive filtering by `name` or `category`
- **Sort**: Optional sorting by `name`, `category`, or `id`
- **Error Handling**:
  - `400` → Invalid query parameter
  - `500` → Server error (e.g., file read issues)
- **Data Source**: JSON file with multiple topics

---

##  Project Structure
```
topic-retrieval-api/
│
├── server.js              # Entry point of the application
├── routes/
│   └── topic-api.js       # API route logic
├── data/
│   └── topics.json        # Topics dataset
└──  README.md              # Documentation





##  Sample Data (`data/topics.json`)
```json
[
  { "id": 1, "name": "Data Structures", "category": "Computer Science" },
  { "id": 2, "name": "Machine Learning", "category": "Artificial Intelligence" },
  { "id": 3, "name": "Digital Marketing", "category": "Business" },
  { "id": 4, "name": "Cloud Computing", "category": "Technology" },
  { "id": 5, "name": "Human Psychology", "category": "Social Science" },
  { "id": 6, "name": "Quantum Physics", "category": "Science" },
  { "id": 7, "name": "Web Development", "category": "Technology" }
]
```

---

##  Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/topic-retrieval-api.git
   cd topic-retrieval-api
   ```

2. **Install dependencies**
   ```bash
   npm install express
   ```

3. **Run the server**
   ```bash
   node server.js
   ```

4. **Server starts at**
   ```
   http://localhost:3000
   ```

---

##  API Usage

### 1. Search by Name
```
GET http://localhost:3000/api/topic-api?search=Cloud
```
**Response:**
```json
[
  { "id": 4, "name": "Cloud Computing", "category": "Technology" }
]
```

---

### 2. Search by Category
```
GET http://localhost:3000/api/topic-api?search=Business
```
**Response:**
```json
[
  { "id": 3, "name": "Digital Marketing", "category": "Business" }
]
```

---

### 3. Search + Sort by Name
```
GET http://localhost:3000/api/topic-api?search=Technology&sort=name
```
**Response:**
```json
[
  { "id": 4, "name": "Cloud Computing", "category": "Technology" },
  { "id": 7, "name": "Web Development", "category": "Technology" }
]
```

---

### 4. Sort by Category
```
GET http://localhost:3000/api/topic-api?search=ing&sort=category
```
**Response:**
```json
[
  { "id": 3, "name": "Digital Marketing", "category": "Business" },
  { "id": 2, "name": "Machine Learning", "category": "Artificial Intelligence" },
  { "id": 4, "name": "Cloud Computing", "category": "Technology" },
  { "id": 7, "name": "Web Development", "category": "Technology" }
]
```

---

##  Video Demo
A **2-minute video** explaining:
- Problem statement
- Folder structure
- Code walkthrough
- API demo in Postman/browser
Video-Link - https://drive.google.com/file/d/1BnLRoCcGMbknJnSkKV44s0oVg0U1pNyk/view?usp=sharing

---

##  Submission Checklist
- [x] Source code with standard folder structure  
- [x] README file with workflow steps  
- [x] 2-minute video explanation  
- [x] GitHub repo link included in README  

---


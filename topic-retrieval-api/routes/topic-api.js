const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataPath = path.join(__dirname, '../data/topics.json');
router.get('/', (req, res) => {
  const searchQuery = req.query.search;
  const sortQuery = req.query.sort;

  if (!searchQuery || searchQuery.trim() === '') {
    return res.status(400).json({ error: 'Invalid query parameter: search is required' });
  }

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('File read error:', err);
      return res.status(500).json({ error: 'Server error while reading data' });
    }

    let topics = JSON.parse(data);

    // Filter by search (case-insensitive) in both name and category
    
   topics = topics.filter(topic => {
  const query = searchQuery.toLowerCase();
  return topic.name.toLowerCase().includes(query) ||
         topic.category.toLowerCase().includes(query);
         
});



if (sortQuery === 'name') {
  topics.sort((a, b) => a.name.localeCompare(b.name));
} else if (sortQuery === 'category') {
  topics.sort((a, b) => a.category.localeCompare(b.category));
} else if (sortQuery === 'id') {
  topics.sort((a, b) => a.id - b.id);
}


    res.status(200).json(topics);
  });
});

module.exports = router;

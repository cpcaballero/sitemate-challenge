const express = require('express'); 
const router = express.Router(); 
const FILE_NAME = 'issues.json';
const fs = require('fs');

const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(FILE_NAME, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveDataToFile = (data) => {
  fs.writeFileSync(FILE_NAME, JSON.stringify(data), 'utf8');
}

router.get('/', (req, res) => { 
  const data = readDataFromFile();
    res.json(data); 
}); 

router.get('/:id', (req, res) => { 
  const data = readDataFromFile();
  const item = data.find((item) => item.id === parseInt(req.params.id));
  if (item) {
    res.send(item);
  } else {
    res.status(404).send('Item not found.');
  }
}); 

router.post('/', (req, res, next) => { 
  const data = readDataFromFile();
  const newData = {
    id: data[data.length-1].id + 1,
    title: req.body.title,
    description: req.body.description,
  };
  data.push(newData);
  saveDataToFile(data);
  return res.send(newData);
}); 

router.delete('/:id', (req, res, next) => {
  const data = readDataFromFile();
  const parsedId = parseInt(req.params.id);
  const index = data.findIndex((item) => item.id === parsedId);
  if (index !== -1) {
    data.splice(index, 1);
    saveDataToFile(data);
    res.send({
      id: parsedId,
    });
  } else {
    res.status(404).send('Item not found.');
  }
});

router.put('/:id', (req, res, next) => { 
  const data = readDataFromFile();
  const parsedId = parseInt(req.params.id);
  const index = data.findIndex((item) => item.id === parsedId);
  if (index !== -1) {
    data[index] = {
      id: parsedId, 
      title: req.body.title,
      description: req.body.description
    };
    saveDataToFile(data);
    res.send(req.body);
  } else {
    res.status(404).send('Item not found.');
  }
}); 


module.exports = router;
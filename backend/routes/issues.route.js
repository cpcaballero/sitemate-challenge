const express = require('express'); 
const router = express.Router(); 
const FILE_NAME = 'issues.json';
const fs = require('fs');

const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(FILE_NAME, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.log(error)
  }
};

const saveDataToFile = (data) => {
  fs.writeFileSync(FILE_NAME, JSON.stringify(data), 'utf8');
}

const issues = [
  {
    id: 1,
    title: 'title 1',
    description: 'description 1',
  },
  {
    id: 2,
    title: 'title 2',
    description: 'description 2',
  },
  {
    id: 3,
    title: 'title 3',
    description: 'description 3',
  },
];

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

router.put('/', (req, res, next) => { 
  const data = readDataFromFile();
  const index = data.findIndex((item) => item.id === parseInt(req.params.id));
  if (index !== -1) {
    data[index] = req.body;
    saveDataToFile(data);
    res.send(req.body);
  } else {
    res.status(404).send('Item not found.');
  }
}); 


module.exports = router;
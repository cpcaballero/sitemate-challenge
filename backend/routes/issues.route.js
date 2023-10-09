const express = require("express"); 
const router = express.Router(); 

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

router.get("/", (req, res) => { 
    res.json(issues); 
}); 

router.post("/", (req, res, next) => { 
  console.log(req.body);
  res.json(req.body);
}); 


module.exports = router;
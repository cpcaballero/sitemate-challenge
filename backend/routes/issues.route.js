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

router.get("/:id", (req, res) => { 
  res.json(issues.filter(
    (issue) => issue.id === parseInt(req.params.id),
  )); 
}); 

router.post("/", (req, res, next) => { 
  res.json(req.body);
}); 

router.delete("/:id", (req, res, next) => {
  const parsedId = parseInt(req.params.id);
  const hasIssue = issues.some(
    (issue) => issue.id === parsedId,
  );
  if (hasIssue) {
    res.json({
      id: parsedId,
    });
  }
});

router.put("/", (req, res, next) => { 
  res.json(req.body);
}); 


module.exports = router;
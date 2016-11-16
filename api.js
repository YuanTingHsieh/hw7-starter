import { Router } from 'express';
import data from './users';

const router = new Router();


// Write your restful api here:
router.get('/users', (req, res) => {
  res.json(data);
});

router.get('/users/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const length = data.users.length;
  if (isNaN(id)) {
    next();
  }
  if (id > 0 && id <= length) {
    res.json(data.users[id - 1]);
  } else {
    next();
  }
});


export default router;

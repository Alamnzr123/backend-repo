import express from 'express';

import {
  createUsers,
  deleteUsers,
  getUserId,
  getUsers,
  updateUsers,
} from '../controllers/api.js';

const router = express.Router();

router.get('/fetch-user-data', getUsers);
router.post('/create-user-data', createUsers);
router.get('/fetch-user-data/:id', getUserId);
router.put('/update-user-data/:id', updateUsers);
router.delete('/remove-user-data/:id', deleteUsers);

export default router;

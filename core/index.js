import express from 'express';
import cors from 'cors';

import config from '../config/firebaseConfig.js';
import productRoute from '../routes/userRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use('/api', productRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);

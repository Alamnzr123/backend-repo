import { initializeApp } from 'firebase/app';
import config from './config/firebaseConfig.js';

const firebase = initializeApp(config.firebaseConfig);

export default firebase;

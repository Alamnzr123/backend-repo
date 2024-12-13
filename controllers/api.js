import firebase from '../firebase.js';
import Product from '../models/user.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebase);

export const createUsers = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'USERS'), data);
    res.status(200).send('Users created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const products = await getDocs(collection(db, 'USERS'));
    const productArray = [];

    if (products.empty) {
      res.status(400).send('No Users found');
    } else {
      products.forEach((doc) => {
        const product = new Product(
          doc.id,
          doc.data().name,
          doc.data().price,
          doc.data().retailer,
          doc.data().amountInStock,
        );
        productArray.push(product);
      });

      res.status(200).send(productArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getUserId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = doc(db, 'USERS', id);
    const data = await getDoc(product);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Users not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};


export const updateUsers = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const product = doc(db, 'USERS', id);
    await updateDoc(product, data);
    res.status(200).send('Users updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteUsers = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'USERS', id));
    res.status(200).send('Users deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

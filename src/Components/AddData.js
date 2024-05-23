// src/AddData.js
import React from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const AddData = () => {
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'your-collection'), {
        name: 'John Doe',
        age: 30,
        city: 'New York'
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return <button onClick={addData}>Add Data</button>;
};

export default AddData;

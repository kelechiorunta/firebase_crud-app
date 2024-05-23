// src/SetData.js
import React from 'react';
import { db } from './firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

const SetData = () => {
  const setData = async () => {
    try {
      await setDoc(doc(db, 'your-collection', 'your-doc-id'), {
        name: 'Jane Doe',
        age: 25,
        city: 'San Francisco'
      });
      console.log('Document successfully written!');
    } catch (e) {
      console.error('Error writing document: ', e);
    }
  };

  return <button onClick={setData}>Set Data</button>;
};

export default SetData;

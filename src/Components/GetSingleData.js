// src/GetSingleData.js
import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const GetSingleData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'your-collection', 'your-doc-id');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? JSON.stringify(data) : 'No data found'}
    </div>
  );
};

export default GetSingleData;

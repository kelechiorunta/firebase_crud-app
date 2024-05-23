import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const LoadUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users-collection'));
      setData(querySnapshot.docs.map(doc => doc.data()));
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{JSON.stringify(item)}</div>
      ))}
    </div>
  );
};

export default LoadUsers;
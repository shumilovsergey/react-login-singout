import React, { useState } from 'react';
import axios from 'axios';



const Profile = () => {
  const [response, setResponse] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:8080/validate', { withCredentials: true });
      console.log('Login successful:', response.data);


    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Send GET Request</button>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};


export default Profile
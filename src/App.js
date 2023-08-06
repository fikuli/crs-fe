import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //console.log(process.env.REACT_APP_CRS_BE_PATH_1)
    axios.get('https://crs-2.azurewebsites.net/counter')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      <p>header gibi olsun</p>
      {posts}
    </ul>
  );
}

export default App;

// todo:
// 1 - deploy react app to aws
// 2 - cross origin issue
// 3 - FE için de ci/cd kur

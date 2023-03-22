// import React, { useState, useEffect } from 'react';

// function DisplayHits() {

//   const [hits, setHits] = useState([]);

//   useEffect(() => {
//     const API = 'https://api.edamam.com/api/recipes/v2?type=public&q=pancake&app_id=75b02161&app_key=753511efadcc7174b03a8b7232bc5bc1';
//     fetch(API)
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         setHits(json.hits);
//       });
//     }, []);


//   return (
//     <div>
//       <ul>
//       {hits.map(item => <li className="item" key={item.recipe.label}>
//       <img src={item.recipe.image} />
//         <p>{item.recipe.label}</p>
//        </li>)}
//   </ul>
//     </div>
//   );
// }

// export default DisplayHits;
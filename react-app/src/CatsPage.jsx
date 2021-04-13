import React, {useEffect} from 'react';

export default function CatsPage() {

  const [cats, setCat] = React.useState([]);

  useEffect(fetchCatPicture, []);

  return (
    <div className="CatsPage">
      C'est le component CatsPage
      {cats.map(cat => (
          <div>
            <img style={{height: "90px", width: "90px"}} src={cat.url} alt=""/>
          </div>
        )
      )}
      <img src={cats} alt=""/>
    </div>
  );

  function fetchCatPicture() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=15').then(response => response.json()).then(response => {
      console.log(response);
      setCat(response);
    })
  }
}

import React from 'react';
import { useEffect,useState } from 'react';

function Home() {

    let search = new URLSearchParams(window.location.search)
    let code = search.get('code');
    console.log(process.env.REACT_APP_PRODUCTION_DATABASE_URL);

  useEffect(() => {


    
  }, []);


  return (
    <div>
      Home 
    </div>
  )
}

export default Home

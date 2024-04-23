import React from 'react';
import { useEffect,useState } from 'react';

function Home() {

    let search = new URLSearchParams(window.location.search)
    let code = search.get('code');

  useEffect(() => {
    
  }, []);


  return (
    <div>
      Home 
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'

function Search() {
    const [bookData,setBookData]=useState('harrypotter') 
    // getting data from api
    const LibraryData = async()=>{
        const res = await fetch(`https://openlibrary.org/search.json?q=${bookData}&limit=10&page=1`);
        const data = await res.json();
        console.log(data);
        setBookData(data);

    }
    useEffect(()=>{
     LibraryData();
    },[bookData])

  return (
    <div>
        <div className="input">
            <input type="text" name="search" placeholder='Search Book Here' />
            
        </div>

    </div>
  )
}

export default Search
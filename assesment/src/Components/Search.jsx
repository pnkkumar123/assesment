import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

function Search() {
    const [bookData,setBookData]=useState([]);
    const [searchTerm,setSearchTerm] = useState('harryPotter'); 
    const [loading,setLoading]=useState(false);
    const [error,setError] = useState('');
    // getting data from api
    const LibraryData = async()=>{
        setLoading(true)
        try{
            const res = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=10&page=1`);
        const data = await res.json();
        console.log(data);
        setBookData(data.docs);
        }catch (e){
          setError(e.message);
        }finally{
           setLoading(false);
        }

    }
    useEffect(()=>{
       let timeOut = setTimeout(()=>{

            LibraryData();
        },1000)
        return ()=> clearTimeout(timeOut);
    },[searchTerm]);
    // function for search term
    const handleInputChange = (e)=>{
         setSearchTerm(e.target.value);
    };

  return (
    <Wrapper>
        <div className="input">
            <input onChange={handleInputChange} type="text" name="search" placeholder='Search Book Here' />
              <NavLink to='/myshelf'> <button style={{backgroundColor:'green',color:'white',borderRadius:'10px'}}>MY BookShelf</button></NavLink>
        </div>
        <div className="display">
            {
                loading ? (<div className='loading'></div>)
                : error ? (<div>{error}</div>)
                :
                    (bookData&&bookData.map((book,index)=>{
                        const {author_name,edition_count,title}=book;
                        return(
                            <div key={index} className='card'>
                                <span>Book Title : {title}</span>
                             <span className='author'>Author : {author_name}</span>
                             <span className='edition'>Edition : {edition_count}</span>
                             <button className='button'>Add to MyBookShelf</button>
                            </div>
                        )
                    }))
                
            }
            
        </div>

    </Wrapper>
  )
}
const Wrapper = styled.div`
display:flex;
flex-direction:column;
padding:20px;
justify-content:center;
align-items:center;
margin:auto;
width:50%;
background-color:#f8f9fa;
border-radius:8px;
// box-shadow:0 4px 8px rgba(0,0,0,0.1);
.input{
    margin-bottom:20px;
    gap:50px;
    width:100%;
    display:flex;
    flex-direction:row;
   
}
input[type="text"]{
    width:100%;
    padding:10px;
    font-size:16px;
    border:1px solid #ccc;
    border-radius:4px;
   
}
.display{
    display:grid;
    width:100%;
    gap:20px;
    grid-template-columns:repeat(4,1fr);
    
}
.card{
    display:grid;
    grid-template-rows:repeat(3,1fr);
    border:1px solid #ccc;
    border-radius:4px;
    padding:10px;
    height:200px;
    width:150px;
   
    
    background-color:#fff;
    box-shadow:0 2px 4px rgba(0,0,0,0.1);
}
.card .author{
    font-size:16px;
    font-weight:bold;
    color:#333;
}
.card .edition{
    font-size:14px;
    color:#666;
}
.card .button{
    border-radius:10px;
    color:white;
    background-color:green;
    width:80%;
    text-align:center;
    height:40px;
    align-items:center;
    justify-content:center;
   
}
.loading {
    
    font-size: 20px;
   
    color: #333;
    text-align: center;
    margin: 20px 0;
}

.loading::after {
    content: 'loading';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #333;
    border-radius: 50%;
    border-top-color: transparent;
    border-right-color: transparent;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}


`


export default Search
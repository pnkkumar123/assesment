import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
function MyBookShelf() {
  return (
    <Wrapper>
        <div className="back">
      <NavLink to='/' style={{color:'black'}}>  <IoIosArrowRoundBack size={60} /></NavLink>
        </div>
        <div className="title" >
            <h1>MY BOOKSHELF</h1>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:auto;

.back{
    margin-right:1250px;
}

`
export default MyBookShelf
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
function MyBookShelf() {
  const [shelfBook, setShelfBook] = useState([]);

  useEffect(() => {
    const storeShelf = JSON.parse(localStorage.getItem("myShelf")) || [];
    setShelfBook(storeShelf);
  }, []);
  return (
    <Wrapper>
      <div className="back">
        <NavLink to="/" style={{ color: "black" }}>
          {" "}
          <IoIosArrowRoundBack size={60} />
        </NavLink>
      </div>
      <div className="title">
        <h1>MY BOOKSHELF</h1>
      </div>
      <div className="shelf">
        {shelfBook.map((book, index) => {
          const { title,author_name,edition_count } = book;
          return (
            <div key={index} className="book">
              <span className="title">Title : {title}</span>
              <span className="author">Author : {author_name}</span>
              <span className="edition">Edition : {edition_count}</span>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  .back {
    margin-right: 1250px;
  }
  .shelf{
    display:grid;
    width:100%;
    gap:20px;
    grid-template-columns:repeat(4,1fr);
    
}
  .book{
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
.book .author{
    font-size:16px;
    
    color:#333;
}
.book .title{
    font-size:18px;
    font-weight:bold;
    color:#333;
}
.book .edition{
    font-size:14px;
    color:#666;
}
`;
export default MyBookShelf;
